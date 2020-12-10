const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const xmlParse = require("xml-js");
const fetch = require('node-fetch');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const property = express();
property.use(bodyParser.json());
property.use(cors({ origin: true }));
property.use(express.urlencoded({ extended: true }));

const adminApi = express();
adminApi.use(bodyParser.json());
adminApi.use(cors({ origin: true }));
adminApi.use(express.urlencoded({ extended: true }));

adminApi.get('/getUsers', async function(req, res) {
    try {
        let userRef = db.collection('users');
        const userSnapshot = await userRef.get().catch(function(error) {
            console.log("Error getting document:", error);
        });
        let data = [];
        userSnapshot.forEach(doc => {
            if (doc.data() && doc.data().username && doc.data().username.length > 0) {
                data.push(doc.data());
            }
        });
        res.json({ error: false, message: 'user list', data: data });
    } catch (error) {
        console.log(error.message);
        res.json({ error: true, message: error.message });
    }
});

exports.admin = functions.https.onRequest(adminApi);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const {
    RETS_HEADERS,
    digestFetch,
    MRIS_URL,
    getRETSSessionHeaders
} = require("./utils/digestAuth");

const { cookieParser, getMLSInserQuery } = require("./utils/utils");

async function login() {
    try {
        const resp = await digestFetch.fetch(`${MRIS_URL}/platinum/login`, { headers: RETS_HEADERS })
        const RETS_COOKIE = resp.headers.get('set-cookie')
        return RETS_COOKIE
    } catch (error) {
        return false
    }

    // const RETS_COOKIE = await digestFetch
    //     .fetch(`${MRIS_URL}/platinum/login`, { headers: RETS_HEADERS })
    //     .then(resp => resp.headers.get("set-cookie"))
    //     .then(header => header)
    //     .catch(e => console.error(e));
    // return RETS_COOKIE;
}

property.get('/getDetailMedia', async function (req, res) {
    if (!req.query.listingId) {
        res.json({ error: true, message: 'provide service key' });
    }
    const listingId = req.query.listingId;
    try {
        const RETS_COOKIE = await login();
        if (RETS_COOKIE === false) res.send('Error: Authentication Failed');
        console.log("RETS_COOKIE", RETS_COOKIE);
        const headers = cookieParser(RETS_COOKIE);
        const response = await digestFetch
            .fetch(
                `${MRIS_URL}/cornerstone/search?SearchType=Media&Class=PROP_MEDIA&QueryType=DMQL2&Query=%28ListingId%3D${listingId}%29&Format=STANDARD-XML`,
                {
                    headers: getRETSSessionHeaders(headers["RETS-Session-ID"])
                }
            )
            .then(resp => resp.text());
        const responseJson = xmlParse.xml2json(response, { compact: true, spaces: 4 });
        res.send(responseJson);
        // const mediaRef = await db.doc("media/" + listingId).get();
        // if (mediaRef.exists) {
        //     res.json({ error: false, data: mediaRef.data(), message: 'Property Detail Gotten' });
        //     return;
        // }
        // res.json({ error: true, message: 'Media Not Found' });
    } catch (error) {
        console.log(error.message);
        res.json({ error: true, message: error.message });
    }
})

property.get('/getDetailProperty', async function (req, res) {
    if (!req.query.address) res.send({ error: true, message: 'Provide Property Address' });
    const addressArray = req.query.address;
    try {
        let propertyRef = db.collection('properties');
        let propertySnapShot = await propertyRef.where("address", "in", [addressArray]).get();
        let allProperty = [];
        propertySnapShot.forEach(doc => {
            allProperty.push({ id: doc.id, data: doc.data() });
        });

        let detailProperty = allProperty[0];
        let detailPropertyId = allProperty[0].id;

        const mediaRef = await db.doc("media/" + detailPropertyId).get();
        let mediaData = {};
        if (mediaRef.exists) {
            mediaData = mediaRef.data();
        }

        let similarPropertySnapShot = await propertyRef.where("address", 'array-contains-any', addressArray).limit(4).get();
        let similarProperties = [];
        similarPropertySnapShot.forEach(doc => {
            similarProperties.push(doc.data());
        });

        let resObj = {
            property: detailProperty,
            media: mediaData,
            similars: similarProperties
        }
        res.json({ error: false, message: 'Property Detail', data: resObj });
    } catch (error) {
        console.log(error.message);
        res.json({ error: true, message: error.message });
    }
})

property.get('/searchProperty', async function (req, res) {
    if (!req.query.searchKey) {
        res.end('please provide any search key');
    }
    const queryText = req.query.searchKey;
    console.log(queryText);
    let limitCount = 10;
    let offsetCount = 1;
    if (req.query.limit) limitCount = parseInt(req.query.limit);
    if (req.query.offset) offsetCount = parseInt(req.query.offset);

    /* --------------- firebase database operation -------------*/
    try {
        let propertyRef = db.collection('properties');
        let propertySnapShot = await propertyRef.where("address", "array-contains", queryText.toUpperCase())
            .limit(limitCount)
            .get();
        let allProperty = [];
        propertySnapShot.forEach(doc => {
            allProperty.push(doc.data());
        });
        res.json({ data: allProperty });
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});

property.get('/getProperty', async function (req, res) {
    const RETS_COOKIE = await login();
    console.log("RETS_COOKIE", RETS_COOKIE);
    const headers = cookieParser(RETS_COOKIE);
    digestFetch
        .fetch(
            `${MRIS_URL}/cornerstone/search?Class=ALL&SearchType=Property&Query=%28Country%3D%7C10000002986%29&Format=STANDARD-XML&QueryType=DMQL2&Limit=2`,
            {
                headers: getRETSSessionHeaders(headers["RETS-Session-ID"])
            }
        )
        .then(resp => resp.text()).then(text => {
            console.log("Got Data========================");
            const responseJson = xmlParse.xml2json(text, { compact: true, spaces: 4 });
            res.send(responseJson);
        })
        .catch(e => {
            console.error(e)
            res.send('error : ' + e.message);
        });
});

property.get('/search', async function (req, res) {
    const apiKey = "AIzaSyCjrdc7mb9-MGOtTgUlvkUoToXV1_E1ga4";
    const cx = "014061159045535852673:mj1vcrlrd2g";
    if (!req.query.queryString) {
        return res.json({ error: true, message: "Provide Query String To Search." });
    }
    try {
        const queryString = req.query.queryString;
        let start = req.query.start || 1;
        if (start <= 0 || start > 91) start = 1;
        let url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${queryString}&start=${start}`;

        let resp = await fetch(url);
        let data = await resp.json();

        let result = {};
        result.info = data.searchInformation;
        result.spelling = data.spelling || {};
        result.info.totalResults = parseInt(result.info.totalResults, 10);
        if (!data.items) return res.json({ error: true, data: result, message: 'Data Not Found' });
        result.items = data.items.map(d => {
            delete d.kind;
            if (d.pagemap && d.pagemap.cse_thumbnail) {
                d.thumbnail = {
                    src: d.pagemap.cse_thumbnail[0].src,
                    width: d.pagemap.cse_thumbnail[0].width,
                    height: d.pagemap.cse_thumbnail[0].height
                }
            }
            delete d.pagemap;
            delete d.cacheId;
            return d
        });
        return res.json({ error: false, data: result, message: 'Search From Google' });
    } catch (error) {
        console.log(error.message);
        return res.json({ error: true, message: error.message });
    }
});

property.get('/getPropertyAddress', async function (req, res) {
    try {
        let propertyRef = db.collection('properties');
        let propertySnapshot = await propertyRef.offset(10).limit(100).get();
        let propertyArr = [];
        propertySnapshot.forEach(element => {
            propertyArr.push({id: element.id, data: element.data().address.join("-")});
        });
        res.json({ data: propertyArr });
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
})

let isEnd = false;
let limit = 450;
let offset = 1;
let countries = ['10000002986', '10000002987', '10038029384', '85500010429'];

let totalCount = 0;
let receivedCount = 0;

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: '1GB'
}

exports.property = functions.runWith(runtimeOpts).https.onRequest(property);

// exports.savePropertySchedule = functions.pubsub.schedule('every 12 hours').onRun((context) => {
//     console.log('This will be run every 12 hours!');
//     saveProperty(limit, offset);
// });

var isProcessingSavePropertyOneByOne = false

async function savePropertyOneByOne() {
    if (isProcessingSavePropertyOneByOne === true) {
        console.log('isProcessingSavePropertyOneByOne ...')
        return null
    }

    try {
        isProcessingSavePropertyOneByOne = true;
        var totalRef = db.doc("properties/totalCount");
        var totalDoc = await totalRef.get();
        let totalDataCount = 0;
        if (totalDoc.exists) {
            console.log("Document data:", totalDoc.data());
            totalDataCount = totalDoc.data().total;
        }
        console.log(totalDataCount)

        var receivedRef = db.doc("properties/count");

        var receivedDoc = await receivedRef.get();
        let receivedDataCount = 0;
        if (receivedDoc.exists) {
            console.log("Document data:", receivedDoc.data());
            receivedDataCount = receivedDoc.data().count;
        }
        console.log(receivedDataCount);
        if ((receivedDataCount === 0) || parseInt(receivedDataCount) < parseInt(totalDataCount)) {
            // still not finished to save all property
            var offsetPoint = parseInt(receivedDataCount) + 1;

            let RETS_COOKIE = await login();
            console.log("RETS_COOKIE", RETS_COOKIE);
            if (RETS_COOKIE === false) return 0
            const headers = cookieParser(RETS_COOKIE);

            console.log(limit, offsetPoint)
            console.log('start getting time =>', Date());

            // let isCount = totalDataCount === 0 ? 1 : 0;

            const resp = await digestFetch
                .fetch(
                    `${MRIS_URL}/cornerstone/search?SearchType=Property&Class=ALL&QueryType=DMQL2&Query=%28Country%3D%7C10000002986%29&Format=STANDARD-XML&Limit=${limit}&Offset=${offsetPoint}`,
                    {
                        headers: getRETSSessionHeaders(headers["RETS-Session-ID"])
                    }
                ).then(resXml => resXml.text())

            console.log("Got Data========================", resp);
            console.log('finished time =>', Date())
            var responseJson = JSON.parse(xmlParse.xml2json(resp, { compact: true, spaces: 4 }));

            if (responseJson.RETS) {
                var batch = db.batch();

                // const allCount = responseJson.RETS.COUNT._attributes.Records;
                // totalCount = allCount;
                // var totalBatch = db.collection("properties").doc('totalCount');
                // batch.set(totalBatch, { total: parseInt(allCount) });

                const allData = responseJson.RETS.REData.BrightAll.AllProperty;
                if (allData.length) {

                    receivedDataCount += allData.length;
                    var receiveBatch = db.collection("properties").doc('count');
                    batch.set(receiveBatch, { count: receivedDataCount });

                    allData.forEach(item => {
                        var fields = {
                            address: item.LocationAddress.FullStreetAddress._text ? item.LocationAddress.FullStreetAddress._text.split(" ") : [],
                            unParsedAddress: item.LocationAddress.UnparsedAddress._text ? item.LocationAddress.UnparsedAddress._text.split(" ") : [],
                            city: item.LocationAddress.City._text ? item.LocationAddress.City._text : null,
                            listingAgentMlsId: item.ListingAgent.ListAgentMlsId._text ? item.ListingAgent.ListAgentMlsId._text : null,
                            listingAgentKey: item.ListingAgent.ListAgentKey._text ? item.ListingAgent.ListAgentKey._text : null,
                            listingAgentFullName: item.ListingAgent.ListAgentFullName._text ? item.ListingAgent.ListAgentFullName._text.split(" ") : [],
                            highSchool: item.LocationSchool.HighSchool._text ? item.LocationSchool.HighSchool._text.split(" ") : [],
                            middleOrJuniorSchool: item.LocationSchool.MiddleOrJuniorSchool._text ? item.LocationSchool.MiddleOrJuniorSchool._text.split(" ") : [],
                            schoolDistrictName: item.LocationSchool.SchoolDistrictName._text ? item.LocationSchool.SchoolDistrictName._text.split(" ") : [],
                            locationLatitude: item.LocationGIS.Latitude._text ? parseFloat(item.LocationGIS.Latitude._text) : null,
                            locationLongitude: item.LocationGIS.Longitude._text ? parseFloat(item.LocationGIS.Longitude._text) : null,
                            street: item.LocationAddress.StreetName._text ? item.LocationAddress.StreetName._text : null,
                            postalCode: item.LocationAddress.PostalCode._text ? item.LocationAddress.PostalCode._text : null,
                            country: item.LocationAddress.Country._text ? item.LocationAddress.Country._text : null,
                            bathRoomsFull: item.ListingStructure.BathroomsTotalInteger._text ? parseInt(item.ListingStructure.BathroomsTotalInteger._text) : null,
                            bedRoomsFull: item.ListingStructure.BathroomsTotalInteger._text ? parseInt(item.ListingStructure.BathroomsTotalInteger._text) : null,
                            listPrice: item.ListingPricing.ListPrice._text ? parseFloat(item.ListingPricing.ListPrice._text) : null,
                            closePrice: item.ListingPricing.ClosePrice._text ? parseFloat(item.ListingPricing.ClosePrice._text) : null,
                            modificationDate: item.ListingDates.ModificationTimestamp._text ? new Date(item.ListingDates.ModificationTimestamp._text) : null,
                            listingDate: item.ListingDates.MLSListDate._text ? new Date(item.ListingDates.MLSListDate._text) : null,
                            listingOfficeName: item.ListingOffice.ListOfficeName._text ? item.ListingOffice.ListOfficeName._text.split(" ") : [],
                            livingArea: item.ListingStructure.LivingArea._text ? parseInt(item.ListingStructure.LivingArea._text) : null,
                            totalArea: item.ListingStructure.AreaTotal._text ? parseInt(item.ListingStructure.AreaTotal._text) : null,
                            heating: item.ListingStructure.Heating._text ? item.ListingStructure.Heating._text.split(" ") : [],
                            cooling: item.ListingStructure.Cooling._text ? item.ListingStructure.Cooling._text.split(" ") : [],
                            saleType: item.ListingContract.SaleType._text ? item.ListingContract.SaleType._text : null,
                            designType: item.ListingStructure.StructureDesignType._text ? item.ListingStructure.StructureDesignType._text : null,
                            taxAnnualAmount: item.PropertyTax.TaxAnnualAmount._text ? parseFloat(item.PropertyTax.TaxAnnualAmount._text) : null,
                            lotSizeAcres: item.Property.LotSizeAcres._text ? parseFloat(item.Property.LotSizeAcres._text) : null,
                            yearBuilt: item.ListingStructure.YearBuilt._text ? parseInt(item.ListingStructure.YearBuilt._text) : null,
                            createdTime: new Date(),
                            data: JSON.stringify(item)
                        };

                        var one = db.collection("properties").doc(item.Listing.ListingId._text);
                        batch.set(one, fields);
                    });
                }
                console.log("batch commit start ===> ", Date());
                batch.commit().then((res) => {
                    console.log('Batch finished time =>', Date())
                    console.log('batch.commit().then((res) =>', res)
                    isProcessingSavePropertyOneByOne = false
                }).catch(err => {
                    console.log(err.message);
                    isProcessingSavePropertyOneByOne = false
                });
            } else {
                isProcessingSavePropertyOneByOne = false
            }
        } else {
            isProcessingSavePropertyOneByOne = false
        }
        return null
    } catch (error) {
        isProcessingSavePropertyOneByOne = false
        console.log('savePropertyOneByOne Error =>', error)
        return null;
    }
}

exports.savePropertyEachSchedule = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
    console.log('this will be run every 1 minutes');
    try {
        return savePropertyOneByOne();
    }
    catch (err) {
        console.log(err);
        return null;
    }
});

var isProcessingSaveMediaOneByOne = false

async function savePropertyMediaByLimit() {
    if (isProcessingSaveMediaOneByOne === true) {
        console.log('isProcessingSaveMediaOneByOne ...')
        return null;
    }
    try {
        var totalRef = db.collection("media").doc("totalCount");

        var totalDoc = await totalRef.get();

        let totalDataCount = 0;
        if (totalDoc.exists) {
            console.log("Document data:", totalDoc.data());
            totalDataCount = totalDoc.data().total;
        }
        console.log("media", totalDataCount);

        var receivedRef = db.collection("media").doc("count");

        var receivedDoc = await receivedRef.get();

        let receivedDataCount = 0;
        if (receivedDoc.exists) {
            console.log("Document data:", receivedDoc.data());
            receivedDataCount = receivedDoc.data().count;
        }
        console.log("media", receivedDataCount);

        // still not finished to save all property
        var offsetPoint = parseInt(receivedDataCount) + 1;

        let RETS_COOKIE = await login();
        if (RETS_COOKIE === false) return 0;
        console.log("RETS_COOKIE", RETS_COOKIE);

        const headers = cookieParser(RETS_COOKIE);
        console.log('start getting time =>', Date());

        isProcessingSaveMediaOneByOne = true;

        const resp = await digestFetch
            .fetch(
                `${MRIS_URL}/cornerstone/search?SearchType=Media&Class=PROP_MEDIA&Query=%28MediaType%3D%7C10000000378%29&QueryType=DMQL2&Format=STANDARD-XML&Limit=${limit}&Offset=${offsetPoint}`,
                {
                    headers: getRETSSessionHeaders(headers["RETS-Session-ID"])
                }
            ).then(resXml => resXml.text())

        console.log("Got Data========================", resp);
        var responseJson = JSON.parse(xmlParse.xml2json(resp, { compact: true, spaces: 4 }));
        console.log("on data end", responseJson);
        if (responseJson.RETS) {
            // const allCount = responseJson.RETS.COUNT._attributes.Records;
            // totalCount = allCount;

            var batch = db.batch();

            // var totalBatch = db.collection("media").doc('totalCount');
            // batch.set(totalBatch, { total: parseInt(allCount) });

            const allData = responseJson.RETS.REData.BRIGHTPropMedia.MediaData;
            if (allData.length) {
                console.log(allData.length);
                receivedDataCount += allData.length;
                var receiveBatch = db.collection("media").doc('count');
                batch.set(receiveBatch, { count: receivedDataCount });

                allData.forEach(item => {
                    var fields = {
                        listingId: JSON.stringify(item.Media.ListingId._text),
                        mediaUrl: JSON.stringify(item.Media.MediaURL._text),
                        data: JSON.stringify(item)
                    };

                    var one = db.collection("media").doc(item.Media.ListingId._text);
                    batch.set(one, fields);
                });
            }
            batch.commit().then((res) => {
                console.log('Batch finished time =>', Date())
                console.log('batch.commit().then((res) =>', res)
                isProcessingSaveMediaOneByOne = false;
                return null;
            }).catch(err => {
                console.log(err.message);
                isProcessingSaveMediaOneByOne = false
                return null;
            });
        } else {
            isProcessingSaveMediaOneByOne = false
            return null;
        }
    } catch (error) {
        console.log('savePropertyOneByOne Error =>', error);
        isProcessingSaveMediaOneByOne = false
        return null;
    }
}

exports.savePropertyMediaSchedule = functions.pubsub.schedule('every 1 minutes').onRun(async (context) => {
    console.log('this will be run every 1 minutes');
    try {
        return savePropertyMediaByLimit();
    }
    catch (err) {
        console.log(err);
        return null;
    }
})

