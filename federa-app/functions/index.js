const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { SitemapStream, streamToPromise, SitemapIndexStream } = require('sitemap');
const { Nuxt } = require("nuxt-start");
const axios = require('axios');
const fs = require('fs');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const nuxtConfig = require("./nuxt.config.js");

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: ".nuxt",
  publicPath: "public"
};

const nuxt = new Nuxt(config);

let isReady = false;

async function handleRequest(req, res) {
  if (!isReady) {
    try {
      isReady = await nuxt.ready();
    } catch (error) {
      process.exit(1);
    }
  }
  await nuxt.render(req, res);
  await nuxt.renderer.ready();
}

async function handleSitemap(req, res) {
  res.header('Content-Type', 'application/xml');

  if (req.path.indexOf('-locations') > -1) {
    const url = 'https://storage.googleapis.com/federa-sitemap/sitemap-locations.xml?avoidTheCaches=1'
    const xmlResponse = await axios.get(url);
    res.send(xmlResponse.data);
    return;
  }

  if (req.path.indexOf('-properties') > -1) {
    let sitemapPath = req.path.replace('/sitemaps', '');
    res.header('Content-Type', 'application/xml');
    if (req.path.indexOf('-properties.xml') > -1) {
      sitemapPath = '/sitemap.xml';
    }

    const xmlResponse = await axios.get(`https://storage.googleapis.com/federa-sitemap${sitemapPath}?avoidTheCaches=1`);
    res.send(xmlResponse.data);
    return;
  }

  try {
    const routes = [
      "/",
      "/contact",
      "/faq",
      "/ourteam",
      "/terms-privacy",
      "/list-your-home",
    ];

    const smStream = new SitemapStream({ hostname: 'https://federa.com' });
    smStream.pipe(res).on('error', e => { throw e });
    routes.map(path => {
      console.log(path);
      smStream.write({
        url: path,
        priority: 0.5,
      });
    });
    smStream.end();
  } catch (error) {
    res.status(500);
    res.end('Unable to handle sitemap' + error.message);
  }
}

async function handleSitemapIndex(req, res) {
  try {
    const sim = new SitemapIndexStream();
    sim.pipe(res).on('error', e => { throw e });
    sim.write({
      url: 'https://federa.com/sitemaps/sitemap-website.xml',
    });
    sim.write({
      url: 'https://federa.com/sitemaps/sitemap-properties.xml',
    });
    sim.write({
      url: 'https://federa.com/sitemaps/sitemap-locations.xml',
    });
    sim.end();
  } catch (e) {
    res.status(500);
    res.end('Unable to handle sitemap index');
  }
}

async function handleAndroidLink(req, res) {
  try {
    var aasa = fs.readFileSync(__dirname + '/static/assetlinks.json');
    res.set('Content-Type', 'application/json');
    res.status(200).send(aasa);
  } catch (e) {
    res.status(500);
    res.end('Unable to handle android deep link json file');
  }
}

async function handleIOSLink(req, res) {
  try {
    var aasa = fs.readFileSync(__dirname + '/static/apple-app-site-association.json');
    res.set('Content-Type', 'application/json');
    res.status(200).send(aasa);
  } catch (e) {
    res.status(500);
    res.end('Unable to handle ios universal link json file');
  }
}

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '512MB'
}

exports.ssrapp = functions.https.onRequest(handleRequest);
exports.sitemapIndex = functions.https.onRequest(handleSitemapIndex);
exports.generateSitemap = functions.runWith(runtimeOpts).https.onRequest(handleSitemap);
exports.androidLink = functions.https.onRequest(handleAndroidLink);
exports.iosLink = functions.https.onRequest(handleIOSLink);