import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: '希瑪眼科集團官網',
    htmlAttrs: { lang: 'zh-hk' },
    meta: [
      // { http- equiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests'},
      
      ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel:'stylesheet', type:'text/css', href:'//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.css'},
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js'  },
      { src: 'https://unpkg.com/vue-i18n@8.9.0/dist/vue-i18n.js' },
    ]
  },
  // target:'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/css.css',
  ],
  loading: { color: '#3B8070' },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js', ssr: false},
    { src: '~/plugins/api.js', ssr: false ,mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // '@nuxtjs/qs',
  ],
  axios: {
    proxy: true,// 表示开启代理
    prefix: '',// 表示给请求url加个前缀 /api
    credentials: true,// 表示跨域请求时是否需要使用凭证
    // 配置请求的基准URL地址
    baseURL : 'https://www.cmereye.com'
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  proxy: {
    '/api': {
      target: 'https://www.cmereye.com/wp-json/wp/v2', // 目标接口域名
      secure: false,// 如果是https接口，需要配置这个参数
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '', // 把 /api 替换成‘’
      }
    }
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt'))
    }
  },
     
 
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { 
    vendor: ['axios'], //防止重复渲染
    extractCSS: { allChunks: true }, // 分离css
  /*   analyze: true, 	// 开启打包分析
    assetFilter: function(assetFilename) {	    		
      return assetFilename.endsWith('.js');	    	
    }, */

  },
  
}
