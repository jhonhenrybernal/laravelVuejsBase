
require('./bootstrap');
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router  from './router'
import store from './store';
import App from './layout/App'



/**
 * @author Jhon Bernal
 * @description Base url para iniciar oyente url global
 */
axios.defaults.withCredentials = true
axios.defaults.baseURL= 'http://localhost:8000/api/'
const token = localStorage.getItem('token')
if(token){
  axios.defaults.headers.common['Authorization'] = token
}


/**
 * @author Jhon Bernal
 * @description Manejo erroes y intercepcion token
 */
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logout')
        return router.push('/login')
    }
    else{
      store.commit('handle_error',JSON.parse(error.response.data.error));
    }
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const app = new Vue({
    store,
    el: '#app',
    components: {App},
    router
});