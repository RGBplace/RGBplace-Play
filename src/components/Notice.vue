<template>
  <v-container
    fluid
  >
    <v-row no-gutters>
      <v-col>
        <v-card
                class="mx-auto ma-5"
                width="600"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">업데이트 현황</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-card
                class="mx-auto ma-1"
                width="600"
        >
          <v-subheader>2019/10/15</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-6">'돌려돌려 돌림판' 메뉴 추가</v-list-item-title>
              <v-list-item-subtitle class="mb-2">
                - canvas 활용
              </v-list-item-subtitle>
              <v-list-item-subtitle class="mb-2">
                - 추가 개발 필요. (KonvaJS 활용 예정)
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-card
                class="mx-auto ma-1"
                width="600"
        >
          <v-subheader>2019/10/01</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-6">첫 커밋.</v-list-item-title>
              <v-list-item-subtitle class="mb-2">
                - 기존 프로젝트에 VueJS + Vuetify 적용 완료
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({  }),
};
</script>
