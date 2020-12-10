const axios = require('axios');
const URL = require('url');
const PromiseB = require('bluebird');

async function GetStates() {
  const res = await axios.get({
    url: `${process.env.BASE_URL_API || 'https://api.federa.com'}/property/groups`,
    auth: {
      username: process.env.BASIC_AUTH_USERNAME || 'Federa',
      password: process.env.BASIC_AUTH_PASSWORD || 'FederaBasicAuthPassword'
    }
  });
  if (res.data && 'items' in res.data) {
    return res.data.items;
  }

  return [];
}

async function GetCities(stateName) {
  const res = await axios.get({
    url: `${process.env.BASE_URL_API ||
      'https://api.federa.com'}/property/groups/${stateName}`,
    auth: {
      username: process.env.BASIC_AUTH_USERNAME || 'Federa',
      password: process.env.BASIC_AUTH_PASSWORD || 'FederaBasicAuthPassword'
    }
  });
  if (res.data && 'items' in res.data) {
    return res.data.items;
  }

  return [];
}

async function SearchByCity(query) {
  console.log('SEARCHING', query)
  const res = await axios({
    url: `${process.env.BASE_URL_API ||
      'https://api.federa.com'}/property/search`,
    method: 'GET',
    params: { q: query },
    timeout: 300 * 1000,
    auth: {
      username: process.env.BASIC_AUTH_USERNAME || 'Federa',
      password: process.env.BASIC_AUTH_PASSWORD || 'FederaBasicAuthPassword'
    }
  });

  if (res.data && 'properties' in res.data) {
    return res.data;
  }

  return {
    total: 0,
    properties: [],
  };
}

async function GetRoutes() {
  const states = await GetStates()
  let routes = await Promise.all(
    states.map(async state => ({
      route: state.link,
      payload: await GetCities(state.name)
    }))
  );

  let allRoutes = [...routes];

  for (const { payload: cities } of routes) {
    await PromiseB.map(
      cities,
      async city => {
        const cityPayload = await SearchByCity(URL.parse(city.link).query)
        allRoutes = [
          ...allRoutes,
          {
            route: URL.parse(city.link).pathname,
            payload: cityPayload
          }
        ]
      },
      {
        concurrency: 2
      }
    )
  }

  return allRoutes;
}

module.exports = GetRoutes;
