import Vue from 'vue'
// import router from './router'
import index from './index.vue'

Vue.config.productionTip = false
console.log('index')
/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    render: h => h(index)
})
