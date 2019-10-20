<template>
  <div class="vue-grid-main">
    <div class="vue-game-rule">
      <ul>
        <li>설명 : n * n 개의 카드를 순서대로 (1, 2, 3, ... n) 정렬, 카드를 이동하면 시작 합니다.</li>
        <li>예시 :</li>
      </ul>

      <div class="map">
        <table>
          <tr v-for="num1 in mapSize" v-bind:key="num1">
            <td v-for="num2 in mapSize" v-bind:key="num2">{{ (num1 - 1) * mapSize + num2 }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="game-status">
      <span class="state">{{ stateTitle }}</span>
      <span class="ma-2">: {{ totalTime }}</span>
      <v-btn small class="primary ma-2" @click="first">첫 단계로</v-btn>
      <v-btn small class="primary ma-2" @click="next">{{levelTitle}}</v-btn>
    </div>
    <div class="vue-grid-frame">
      <grid-layout
        :layout.sync="layout"
        :col-num="colSize"
        :row-height="40"
        :is-draggable="true"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
        @layout-created="layoutCreatedEvent"
        @layout-updated="layoutUpdatedEvent"
      >
        <grid-item
          v-for="(item, index) in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :static="true"
          :key="index"
          :data-idx="index"
        >
          <div class="vue-grid-item-contents" @click="changeEvent">{{item.i}}</div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>
<script>
import VueGridLayout from "vue-grid-layout";

let answerLayout = [];
let testLayout = [];
let numberStack = [];

const MAX_MAP_SIZE = 5;
let mapSize = 2;

let startSw = false;
let sum = 0;

let startTime = 0;
let finishTime = 0;
let timer = null;

const gridGenerator = () => {
  const getQueryString = function(field, url) {
    let href = url ? url : window.location.href;
    let reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
    let string = reg.exec(href);
    return string ? string[1] : null;
  };

  const createLayout = (tmpMapSize, tmpNumberStack, tmpLayout) => {
    let dataMap = [];

    for (let i = 1; i <= tmpMapSize; i++) {
      for (let j = 1; j <= tmpMapSize; j++) {
        //let x = (12 - mapSize * 2 > 0 ? 12 - mapSize * 2 : 0) + (j - 1) * 2;
        let x = (j - 1) * 2;
        let y = (i - 1) * 2;

        dataMap.push({
          x: x,
          y: y
        });

        tmpLayout.push({
          x: x,
          y: y,
          w: 2,
          h: 2,
          i: tmpNumberStack[(i - 1) * tmpMapSize + j - 1]
        });
      }
    }

    // tmpLayout.sort((a, b) => {
    //   return a.i - b.i;
    // });

    for (let i = 1; i <= MAX_MAP_SIZE; i++) {
      for (let j = 1; j <= MAX_MAP_SIZE; j++) {
        let x = (j - 1) * 2;
        let y = (i - 1) * 2;
        let sw = false;

        dataMap.forEach(e => {
          if (e.x === x && e.y === y) {
            sw = true;
            return;
          }
        });

        if (sw) continue;

        tmpLayout.push({
          x: (j - 1) * 2,
          y: (i - 1) * 2,
          w: 2,
          h: 2,
          i: null
        });

        sw = false;
      }
    }
  };

  if (getQueryString("map_size")) {
    mapSize =
      (getQueryString("map_size") > 0 && getQueryString("map_size") <= 7 ) ? parseInt(getQueryString("map_size")) : 2;
  }

  for (let num = 1; num <= mapSize * mapSize; num++) {
    numberStack.push(num);
  }
  createLayout(mapSize, numberStack, answerLayout);

  numberStack = numberStack.sort(function() {
    return 0.5 - Math.random();
  });

  createLayout(mapSize, numberStack, testLayout);
};

gridGenerator();

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      colSize:MAX_MAP_SIZE*2,
      stateTitle: "대기",
      levelTitle: "재시작",
      layout: testLayout,
      totalTime: "0.0 초",
      mapSize: mapSize,
      beforeNumber: null,
      beforeNumberNode: null
    };
  },
  methods: {
    layoutUpdatedEvent: function(newLayout) {
      sum = 0;
      for (let i = 0; i < mapSize * mapSize; i++) {
        if (
          answerLayout[i]["x"] === newLayout[i]["x"] &&
          answerLayout[i]["y"] === newLayout[i]["y"]
        ) {
          sum += 1;
        }
      }

      if (sum === mapSize * mapSize) {
        this.stateTitle = "끝";
        this.levelTitle = "다음 단계로";
        clearInterval(timer);
        this.totalTime = ((finishTime - startTime) / 1000).toFixed(2) + " 초";
        /* eslint-disable no-console */
        console.log((finishTime - startTime) / 1000);
      }
    },
    // moveEvent: function(i, newX, newY) {
    // },
    first: function() {
      window.location.href = "/#/arrange-number";
      document.location.reload();
    },
    next: function() {
      if (this.stateTitle === "끝") {
        if (mapSize >= MAX_MAP_SIZE) {
          alert("Winner Winner Checkin Dinner!\n 총 시간 : " + this.totalTime + " 초");
          event.preventDefault();
          return;
        }
        window.location.href = "/#/arrange-number?map_size=" + (mapSize + 1);
      }

      document.location.reload();
    },
    changeEvent: function(event) {
      // console.log(event.target);
      // console.logg(event.target.parentElement.getAttribute("data-idx"));

      if (!startSw) {
        startSw = true;
        this.stateTitle = "시작";
        startTime = performance.now();
        timer = setInterval(() => {
          finishTime = performance.now();
          this.totalTime = ((finishTime - startTime) / 1000).toFixed(2) + " 초";
        }, 10);
      }

      let idx = event.target.parentElement.getAttribute("data-idx");

      if (idx == this.beforeNumber || !event.target.innerHTML) {
        return;
      } else if (this.beforeNumber) {
        testLayout[idx]["i"] = testLayout[this.beforeNumber]["i"];
        testLayout[this.beforeNumber]["i"] = parseInt(event.target.innerHTML);
        this.beforeNumber = null;
        this.beforeNumberNode.classList.toggle("select");
      } else {
        this.beforeNumber = idx;
        this.beforeNumberNode = event.target;
        event.target.classList.toggle("select");
      }

      sum = 0;
      for (let i = 0; i < mapSize * mapSize; i++) {
        if (answerLayout[i]["i"] === testLayout[i]["i"]) {
          sum += 1;
        }
      }

      if (sum === mapSize * mapSize) {
        this.stateTitle = "끝";
        this.levelTitle = "다음 단계로";
        clearInterval(timer);
        this.totalTime =
          (finishTime - startTime > 0
            ? ((finishTime - startTime) / 1000).toFixed(2)
            : "0.0") + " 초";
        /* eslint-disable no-console */
        console.log(finishTime - startTime > 0 ? (finishTime - startTime) / 1000 : 0.0);
      }
    }
  },
  name: "ArrangeNumber"
};
</script>

<style lang="scss" scoped>
.vue-grid-frame {
  width: 100%;
  max-width: 750px;
  margin: auto;

  .vue-grid-item {
    background-color: lightgray;

    & .vue-grid-item-contents {
      margin: 0;
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 2rem;
      line-height: 6rem;
      user-select: none;
      color: black;

      &:hover {
        color: white;
        background-color: tomato;
      }

      &.select {
        background-color: mediumaquamarine;
      }

      &:empty {
        background-color: black;
      }
    }
  }
}

.game-status {
  text-align: center;

  .state {
    width: 32px;
    display: inline-block;
    text-align: right;
  }
}

.map {
  position: relative;
  top: -2rem;
  left: 6rem;
  display: inline-block;
}
</style>