import Vue from 'vue'
// 注册全局组件

// customComponent

// cube-ui
import {
    Style,
    Button,
    CheckboxGroup,
    Radio,
    Input,
    Textarea,
    Select,
    Switch,
    Rate,
    Validator,
    Loading,
    Tip,
    Popup,
    Toast,
    Picker,
    CascadePicker,
    TimePicker,
    Dialog,
    ActionSheet,
    Scroll,
    Slide,
    IndexList,
    Swipe,
    Upload
} from 'cube-ui'

const customComponent = {}

const cubeUi = {
    Style,
    Button,
    CheckboxGroup,
    Radio,
    Input,
    Textarea,
    Select,
    Switch,
    Rate,
    Validator,
    Loading,
    Tip,
    Popup,
    Toast,
    Picker,
    CascadePicker,
    TimePicker,
    Dialog,
    ActionSheet,
    Scroll,
    Slide,
    IndexList,
    Swipe,
    Upload
}

const components = {
    ...customComponent
}

export const directive = {
    ...cubeUi
}

Object.keys(directive).forEach(key => {
    Vue.use(directive[key])
})

export default {
    install(Vue) {
        Object.keys(components).forEach(key => {
            Vue.component(components[key].name, components[key])
        })
    }
}
