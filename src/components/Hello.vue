<template>
    <div>
        hello
        {{msg}}
        <div v-for="i in 2000">
            {{i * i * i * i * i}}
        </div>
    </div>
</template>

<script>
import { GET } from 'core/ajax'

export default {
    name: '',
    data () {
        return {
            msg: '123'
        }
    },
    mounted() {
        GET('projects/0TRJpUDTtyq/kanbans').then((response) => {
            console.log(response.data)
            console.log(response.status)
            console.log(response.statusText)
            console.log(response.headers)
            console.log(response.config)
            this.msg = '456789'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
