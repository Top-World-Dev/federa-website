const GetRoutes = require('./generate.js')
const cheerio = require('cheerio')
require('dotenv').config()
const path = require('path')
const projectSrc = path.resolve(__dirname)

module.exports = {
  telemetry: false,
  debug: true,
  dev: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Federa',
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      {
        name: "google-site-verification",
        content: "IF5XtOjFwxWirytsenYGPUiv6uMxv1AAis9AnguQ0Ok"
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ hid: 'icon', rel: 'icon', type: 'image/*', href: '/logo.png' }],
    script: [
      {
        src: '//script.crazyegg.com/pages/scripts/0093/7227.js',
        async: true,
        type: 'text/javascript',
        body: true
      },
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        type: 'text/javascript'
      },
      {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6lfGBxteO6dODAh_h8kxooHvc3eLdGGo&libraries=places",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00c58e', height: '3px' },
  /*
   ** Global CSS
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~assets/scss/_global.scss'
  ],
  router: {
    middleware: 'auth'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/api/init.js',
    '@/plugins/element-ui',
    '@/plugins/fontawesome.js',
    { src: '@/plugins/googleTrack.js', mode: 'client' },
    { src: '@/plugins/v-calendar.js', ssr: false },
    { src: '@/plugins/vue-carousel.js', ssr: false },
    { src: '@/plugins/gallery-slideshow.js', ssr: false },
    { src: '@/plugins/event-utils.js', ssr: false },
    { src: '@/plugins/f-calendar.js', ssr: false },
    { src: '@/plugins/svg-icon.js', ssr: false },
    { src: "@/plugins/vClickOutside", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-TV4QTVK'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/google-gtag',
    'bootstrap-vue/nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyAU-D-nj5iSxxNwCBP4C09ldANn1dd5_bo',
        libraries: ['places']
      }
    ],
    '@nuxtjs/device',
    '@nuxtjs/dotenv'
  ],
  'google-gtag': {
    id: 'GTM-TV4QTVK',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['federa.com']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    transpile: [/^element-ui/, /@fullcalendar.*/],
    vender: ['axios'],
    /*
     ** You can extend webpack config here
     */
    // extend(config, { isClient }) {}
    extend(config, { isClient }) {
      config.resolve.alias['@Components'] = path.join(projectSrc, 'components')
    }
  },
  generate: {
    concurrency: 10,
    routes: GetRoutes
  },
  hooks: {
    'render:route': (url, result) => {
      this.$ = cheerio.load(result.html)
      this.$(`head meta[data-n-head="ssr"]`).removeAttr('data-n-head')
      this.$(`head link[data-n-head="ssr"]`).removeAttr('data-n-head')
      this.$(`head script[data-n-head="ssr"]`).removeAttr('data-n-head')
      result.html = this.$.html()
    }
  },
  publicRuntimeConfig: {
    baseURLAPI: process.env.BASE_URL_API || 'https://api.federa.com',
    basicAuthUsername: process.env.BASIC_AUTH_USERNAME || 'Federa',
    basicAuthPassword:
      process.env.BASIC_AUTH_PASSWORD || 'FederaBasicAuthPassword'
  },
  privateRuntimeConfig: {}
}
