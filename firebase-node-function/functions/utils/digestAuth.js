const DigestFetch = require("digest-fetch");

const digestFetch = new DigestFetch("3285804", "glprucrlswuni7lwrUbriVu42", {
  algorithm: "MD5"
});

const RETS_HEADERS = {
  "RETS-Version": "RETS/1.8",
  "User-Agent": "Bright RETS Application/1.0"
};

function getRETSSessionHeaders(sessionId) {
  return {
    ...RETS_HEADERS,
    "RETS-Session-ID": sessionId,
    cookie: `RETS-Session-ID=${sessionId};`
  };
}

const MRIS_URL = "http://csrets.mris.com:6103";

module.exports = { digestFetch, RETS_HEADERS, MRIS_URL, getRETSSessionHeaders };
