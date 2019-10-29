<template>
    <div id='nav-menu'>
        <div id='nav-title'>
            <h1>
                <router-link to="/">Play! RGB Place</router-link>
            </h1>
        </div>

        <button id="menu" @click="toggle">Menu</button>
        <div class="" v-bind:class="{ show: isActive }" id="nav-list">
            <ul>
                <li>
                    <router-link to="/logo">Logo</router-link>
                </li>
                <li>
                    <router-link to="/arrange-number">숫자 정렬</router-link>
                </li>
                <li>
                    <router-link to="/text-reverse">문자열 뒤집기</router-link>
                </li>
                <li>
                    <router-link to="/playground">Playground</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                isActive: false,
            };
        },
        methods: {
            toggle: function () {
                this.isActive = !this.isActive;
            },
        },
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
    #nav-list {
        display: none;

        &.show {
            display: block;
        }
    }
</style>
