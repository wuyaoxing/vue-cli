<template>
    <div class="layout">
        <div class="layout-container"
             v-if="!loading">
            <transition name="router">
                <router-view></router-view>
            </transition>
        </div>
        <div class="app-loading"
             v-else>

        </div>
    </div>
</template>
<script>
export default {
    name: 'app-container',
    data() {
        return {
            loading: false
        }
    }
}
</script>
<style lang="stylus">
.layout {
    display: flex;
    width: 100%;
    height: 100%;

    &-container {
        position: relative;
        display: flex;
        flex: 1;
        overflow-y: auto;
        background: #f0f2f5;

        & > div {
            width: 100%;
        }
    }
}
</style>
