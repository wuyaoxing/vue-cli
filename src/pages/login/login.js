import Vue from 'vue'
import login from './login.vue'

console.log('login')
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(login)
})
