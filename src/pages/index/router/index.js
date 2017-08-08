import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'
import loading from 'base/loading'
import error from 'base/error'

Vue.use(Router)

const AsyncComp = () => ({
    // 需要加载的组件. 应当是一个 Promise
    component: import('components/Hello'),
    // loading 时应当渲染的组件
    loading,
    // 出错时渲染的组件
    error,
    // 渲染 loading 组件前的等待时间。默认：200ms.
    delay: 200,
    // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
    timeout: 3000
})
const AsyncComp1 = () => ({
    // 需要加载的组件. 应当是一个 Promise
    component: import('components/Hello1'),
    // loading 时应当渲染的组件
    loading,
    // 出错时渲染的组件
    error,
    // 渲染 loading 组件前的等待时间。默认：200ms.
    delay: 200,
    // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
    timeout: 3000
})
const AsyncComp2 = () => ({
    // 需要加载的组件. 应当是一个 Promise
    component: import('components/Hello2'),
    // loading 时应当渲染的组件
    loading,
    // 出错时渲染的组件
    error,
    // 渲染 loading 组件前的等待时间。默认：200ms.
    delay: 200,
    // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
    timeout: 3000
})

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: AsyncComp
        },
        {
            path: '/1',
            name: 'Hello',
            component: AsyncComp1
        },
        {
            path: '/2',
            name: 'Hello',
            component: AsyncComp2
        },
    ]
})
