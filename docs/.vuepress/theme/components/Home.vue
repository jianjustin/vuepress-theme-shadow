<template>
  <v-container fluid grid-list-md pa-2>
    <v-layout wrap>
      <v-flex v-for="card in cards" :key="card.title" xs4>
        <v-card>
          <v-img v-bind:src="randomImg()" class="white--text" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
            <v-card-title class="fill-height align-end" ></v-card-title>
          </v-img>
          <v-card-text v-text="card.title"></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      cards: [
        { title: 'Pre-fab homes'},
        { title: 'Favorite road trips'},
        { title: 'Best airlines'},
      ],
    }
  },
  components: {},
  methods: {
    randomNum: function (minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },
    randomImg(){
      var number = this.randomNum(0,100);
      var url = "https://picsum.photos/id/" + number + "/1920/1080";
      return url;

    }
  }
}

</script>
