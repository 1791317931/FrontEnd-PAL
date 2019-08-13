<template>
    <Upload class="upload-component" :action="action" :accept="getAccept()" :before-upload="beforeUpload" :on-remove="removeFile">
        <div :style="styles"></div>
    </Upload>
</template>
<script>
    export default {
        props: {
            action: {
                type: String,
                default: 'xxxx'
            },
            accept: {
                type: String,
                default: ''
            },
            styles: {
                type: Object,
                default: () => {
                    return {
                        width: '860px',
                        height: '44px'
                    }
                }
            }
        },
        data() {
            return {
                fileMap: {
                    'mp3': 'audio/mpeg',
                    'wav': 'audio/wav',
                    'rar': 'aplication/rar',
                    'zip': 'aplication/zip',
                    '7z': 'aplication/7z'
                },
                acceptArr: [],
                files: []
            }
        },
        methods: {
            getAccept() {
                this.acceptArr = this.accept.split(',')
                let fileMap = this.fileMap

                return this.acceptArr.map(item => {
                    return fileMap[item]
                }).join(',')
            },
            beforeUpload(file) {
                let name = file.name
                let format = name.substring(name.lastIndexOf('.') + 1).toLowerCase()
                if (this.acceptArr.indexOf(format) == -1) {
                    this.tipUtil.warning('文件格式不正确')
                    return false
                }

                this.files = [file]
                this.$emit('update:files', this.files)
                return false
            },
            removeFile(files) {
                this.files = []
                this.$emit('update:files', this.files)
            }
        }
    }
</script>

<style lang="less" scoped>
    .upload-component {
        width: 100%;
        height: 100%;
    }
</style>