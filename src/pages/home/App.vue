<template>
    <div id="app">
        <img src="common/images/default.png">
        <loading></loading>
        <router-link to="/">甘特图</router-link>
        <router-link to="/1">甘特图1</router-link>
        <router-link to="/2">甘特图2</router-link>
        <router-link to="/3">甘特图3</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import loading from 'base/loading'

export default {
    name: 'app',
    components: {
        loading
    },
    mounted () {
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
