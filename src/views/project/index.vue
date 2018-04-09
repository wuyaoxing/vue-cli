<template>
    <div class="project">
        project
        <cube-button :light="true">Light Button</cube-button>
        <cube-button :inline="true">Inline Button</cube-button>
        <cube-button :outline="true">Outline Button</cube-button>
        <cube-button :primary="true">Primary Button</cube-button>
        <cube-input v-model="value"
                    :placeholder="placeholder"
                    :type="type"
                    :maxlength="maxlength"
                    :readonly="readonly"
                    :disabled="disabled"
                    :autofocus="autofocus"
                    :autocomplete="autocomplete"
                    :clearable="clearable"
                    :eye="eye"></cube-input>
        <cube-textarea v-model="value"
                       :placeholder="placeholder"
                       :maxlength="maxlength"
                       :readonly="readonly"
                       :disabled="disabled"
                       :autofocus="autofocus"></cube-textarea>
        <cube-button @click="showBtn">Dialog - btn</cube-button>
        <cube-rate v-model="rateValue"
                   :disabled="rateDisabled"
                   :max="rateMax"
                   :justify="rateJustify"></cube-rate>

        <p>## select</p>
        <cube-select v-model="selectValue"
                     :title="selectTitle"
                     :options="selectOptions"
                     :placeholder="selectPlaceholder"
                     :auto-pop="selectAutoPop"
                     :disabled="selectDisabled"
                     @change="selectChange">
        </cube-select>

        <p>## toast</p>
        <cube-button @click="showToast">show toast</cube-button>
        <p>## upload</p>
        <div>
            <cube-upload ref="upload2"
                         :action="uploadAction"
                         :simultaneous-uploads="1"
                         :process-file="processFile"
                         :value="files"
                         @file-removed="removed"
                         @file-submitted="fileSubmitted" />
        </div>
    </div>
</template>
<script>
import compress from 'lib/image'

export default {
    name: 'app-project',
    data() {
        return {
            value: '',
            placeholder: '请输入内容',
            type: 'password',
            readonly: false,
            maxlength: 100,
            disabled: false,
            autofocus: true,
            autocomplete: true,
            clearable: false,
            /*
             * 眼睛可见，且密码可见
             * 如果为 false 则眼睛不可见，密码不可见
             * 如果想要眼睛可见但是密码不可见，则配置为对象 { open: false }
             */
            eye: true,
            rateDisabled: false,
            rateMax: 5,
            rateValue: 3,
            rateJustify: false,
            toastTxt: 'cube toast content',

            selectOptions: [2013, 2014, 2015, 2016, 2017, 2018],
            selectValue: '',
            selectTitle: '入职时间',
            selectPlaceholder: '请选择入职时间',
            selectAutoPop: false,
            selectDisabled: false,
            uploadAction: {
                target: 'url',
                prop: 'base64Value'
            },
            files: [
                {
                    id: 11,
                    name: 'desk.png',
                    url: '',
                    progress: 0.8,
                    status: 'success'
                },
                {
                    id: 12,
                    name: 'desk.png',
                    url: '',
                    progress: 0.8,
                    status: 'success'
                }
            ]
        }
    },
    methods: {
        showBtn() {
            this.$createDialog({
                type: 'confirm',
                icon: 'cubeic-alert',
                title: '我是标题',
                content: '我是内容',
                confirmBtn: {
                    text: '确定按钮',
                    active: true,
                    disabled: false,
                    href: 'javascript:;'
                },
                cancelBtn: {
                    text: '取消按钮',
                    active: false,
                    disabled: false,
                    href: 'javascript:;'
                },
                onConfirm: () => {
                    this.$createToast({
                        type: 'warn',
                        time: 1000,
                        txt: '点击确认按钮'
                    }).show()
                },
                onCancel: () => {
                    this.$createToast({
                        type: 'warn',
                        time: 1000,
                        txt: '点击取消按钮'
                    }).show()
                }
            }).show()
        },
        showToast() {
            this.$createToast({
                txt: this.toastTxt
            }).show()
        },
        selectChange(value, index, text) {
            console.log('selectChange', value, index, text)
        },
        processFile(file, next) {
            compress(file, {
                compress: {
                    width: 1600,
                    height: 1600,
                    quality: 0.5
                }
            }, next)
        },
        fileSubmitted(file) {
            console.log('S:', file)
            file.base64Value = file.file.base64
        },
        removed(file) {
            console.log('R:', file)
        }
    }
}
</script>
<style lang="stylus">
</style>
