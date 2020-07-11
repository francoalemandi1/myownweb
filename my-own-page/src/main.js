import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import bulma from 'bulma'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import '@/assets/css/styles.css';

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(bulma)
Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('nav-bar', require('./components/Navbar.vue').default)

new Vue({
  render: function (h) { return h(App) },

}).$mount('#app')


const opts = {}

export default new Vuetify(opts)