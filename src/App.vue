<template>
    <div id="app">
        <img src="./common/images/default.png">
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
    mounted() {
        GET('projects/0TRJpUDTtyq/kanbans')
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
