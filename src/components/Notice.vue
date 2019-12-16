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
          <v-subheader>2019/12/16</v-subheader>
          <v-card-title class="subtitle-1">진행해야될 프로젝트</v-card-title>
          <v-card-text class="mb-2">
            1. 도신의 주사위 (Gambler's Dice) : 주사위 조작하기<br/>
            2. 나라 수도 이름 맞추기 : 벼락치기 공부법을 위한 퀴즈<br/>
          </v-card-text>
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
