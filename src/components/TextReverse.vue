<template>
    <v-container fluid>
        <v-row no-gutters
               align="center"
               justify="center"
        >
            <v-col align="center">
                <v-card
                    width="400"
                    class="pa-2"
                    align="center"
                >
                    <v-textarea
                            v-model="message"
                            auto-grow="true" ></v-textarea>

                    <v-btn color="blue darken-3" @click="reverseMessage">뒤집기</v-btn>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                    width="400"
                    align="center"
            >
                <pre
                        class="pa-2"
                        v-bind:title="message">{{ message }}</pre>
            </v-col>
        </v-row>
    </v-container>
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