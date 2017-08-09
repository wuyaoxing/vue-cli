<template>
    <div id="app">
        login
        <a href="/index.html">index</a>
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
