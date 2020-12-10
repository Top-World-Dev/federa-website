const uuidv4 = require("uuid/v4");

function cookieParser(cookieString) {
  let parsedCookie = {};
  cookieString.split("; ").map(cookieStr => {
    const parsed = cookieStr.split("=");
    parsedCookie = {
      ...parsedCookie,
      [parsed[0]]: parsed[1]
    };
  });
  return parsedCookie;
}

function getMLSInserQuery(mlsRowData) {
  return `( '${uuidv4()}',${mlsRowData
    .map(row => (row !== "" ? `'${row.replace(/'/g, "''")}'` : null))
    .toString()
    .replace(/^,/g, "NULL,")
    .replace(/,(?=[,])|,$/g, ",NULL")},NOW() )`;
}

module.exports = { cookieParser, getMLSInserQuery };
