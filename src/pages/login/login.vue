<template>
    <div id="app">
        login
        <a href="../index">index</a>
        <loading></loading>
    </div>
</template>

<script>
import loading from 'base/loading'

export default {
    name: 'app',
    components: {
        loading
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

