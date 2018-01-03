{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './stores'
{{/vuex}}
{{#i18n}}
import i18n from './i18n'
{{/i18n}}
{{#sass}}

import '@/sass/main.scss'

{{/sass}}
Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable */
console.log('==>', __APP_CONFIG__, __APP_VERSION__)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#i18n}}
  i18n,
  {{/i18n}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
