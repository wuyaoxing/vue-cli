<template>
    <div id="app">
        <img src="common/images/default.png">
        <loading></loading>
        <router-view></router-view>
    </div>
</template>

<script>
import loading from 'base/loading'
import { GET } from 'core/ajax'

export default {
    name: 'app',
    components: {
        loading
    },
    mounted () {
        GET('projects/0TRJpUDTtyq/kanbans').then((response) => {
            console.log(response.data)
            console.log(response.status)
            console.log(response.statusText)
            console.log(response.headers)
            console.log(response.config)
        })
        window.addEventListener('load', (event) => {
            console.log('All resources finished loading!')
        })
        window.addEventListener('online', (event) => {
            console.log('online:', event)
        })
        window.addEventListener('offline', (event) => {
            console.log('offline:', event)
        })
        window.addEventListener('resize', (event) => {
            console.log('resize:', event)
        })
        window.addEventListener('cached', (event) => {
            console.log('cached:', event)
        })
        window.addEventListener('error', (event) => {
            console.log('error:', event)
        })
        document.addEventListener('error', (event) => {
            console.log('derror:', event)
        })
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
