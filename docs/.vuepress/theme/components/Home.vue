<template>
  <v-container fluid grid-list-md pa-2>
    <v-layout wrap>
      <v-flex v-for="page in $site.pages" :key="page.title" v-if="page.path.indexOf('posts') > -1" xs4>
        <v-card v-on:click="toPath(page.path)">
          <v-img v-bind:src="randomImg()" class="white--text" height="200px">
            <v-card-title class="fill-height align-end"></v-card-title>
          </v-img>
          <v-card-text>{{page.title}}</v-card-text>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {}
  },
  components: {},
  methods: {
    toPath: function(path){
      debugger;
        this.$router.push(path);
    },
    randomNum: function(minNum, maxNum) {
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
    randomImg() {
      var number = this.randomNum(0, 100);
      var url = "https://picsum.photos/id/" + number + "/1920/1080";
      return url;

    }
  }
}

</script>
