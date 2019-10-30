<template>
  <v-container
    fluid
    style="max-width:600px"
  >
    <v-row no-gutters>
      <v-col>
        <v-card
                class="mx-auto ma-5"
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
        >
          <v-subheader>2019/10/30</v-subheader>
          <v-card-title class="subtitle-1">롤링 스톤 역사상 가장 위대한 노래 500곡</v-card-title>
          <v-card-text class="mb-2">
            - 500 곡을 자동으로 다운로드 하는 페이지.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-card
                class="mx-auto ma-1"
        >
          <v-subheader>2019/10/15</v-subheader>
          <v-card-title class="subtitle-1">'돌려돌려 돌림판' 메뉴 추가</v-card-title>
          <v-card-text class="mb-2">
            <div>- canvas 활용</div>
            <div>- 추가 개발 필요. (KonvaJS 활용 예정)</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-card
                class="mx-auto ma-1"
        >
          <v-subheader>2019/10/01</v-subheader>
          <v-card-title class="subtitle-1">첫 커밋.</v-card-title>
          <v-card-text class="mb-2">
            - 기존 프로젝트에 VueJS + Vuetify 적용 완료
          </v-card-text>
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
