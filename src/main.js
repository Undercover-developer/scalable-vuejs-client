import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"
import JwPagination from "jw-vue-pagination"
import VueCookies from 'vue-cookies'
import GoogleAuth from '@/config/google_oAuth.js'

const gauthOption = {
  clientId: '819057095901-avn4s41ppctk16qb2hi0nhu5dgbhlsjd.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.use(VueCookies)
Vue.component('jw-pagination', JwPagination)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
