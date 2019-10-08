<template>
    <div align="center">
        <p v-bind:title="message"> {{ message }} </p>
        <v-text-field v-model="message"></v-text-field>

        <v-btn color="blue darken-3" @click="reverseMessage">뒤집기</v-btn>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message : '기러기 토마토 스위스',
            }
        },
        methods: {
            reverseMessage() {
                this.message = this.message.split('').reverse().join('')
            }
        },
        name: 'TextReverse'
    }
</script>

<style lang="scss" scoped>

</style>