<template>
  <v-app id="inspire">
    <!-- <vue-header></vue-header> -->
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-item @click="moveToLink('/logo')">
          <v-list-item-action>
            <v-icon>mdi-image</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logo</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="moveToLink('/arrange-number')">
          <v-list-item-action>
            <v-icon>mdi-cards-playing-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>카드 정렬</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="moveToLink('/text-reverse')">
          <v-list-item-action>
            <v-icon>mdi-format-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>문자열 뒤집기</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="moveToLink('/playground')">
          <v-list-item-action>
            <v-icon>mdi-test-tube</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Playground</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="r">R</span>
        <span class="g">G</span>
        <span class="b">B</span>

        <span> place</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
              class="fill-height fill-width"
              fluid
      >
        <v-row no-gutters
                align="center"
                justify="center"
        >
          <v-col class="shrink" cols="4" sm="4">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        methods: {
            moveToLink: function (link) {
                window.location.href = "/#" + link;
            }
        },
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
        }),
        created () {
            this.$vuetify.theme.dark = true
        },
    }
</script>

<style lang="scss" scoped>
  @import "@/style/base.scss";
</style>