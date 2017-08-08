<template>
    <div id="app">
        index
        <a href="/index.html">index</a>
        <a href="/home.html">home</a>
        <a href="/login.html">login</a>
        <!-- <div v-for="(key, value) in utils.entries()" :key="key">
            <a :href="`/${key}`">{{key}}</a>
        </div> -->
        <loading></loading>
    </div>
</template>

<script>
import loading from 'base/loading'
// import utils from '../../../build/utils'

export default {
    name: 'app',
    components: {
        loading
    },
    mounted() {
        // console.log(utils.entries())
    }
}
</script>
