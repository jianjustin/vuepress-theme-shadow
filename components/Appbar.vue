<template>
  <v-card class="ma-2 mb-6">
    <v-app-bar class="white--text" color="#CCD1D1">
      <v-toolbar-title offset-md5>
        <v-btn class="ml-2 white--text" text rounded v-on:click="toPath($localePath)">
          {{ $siteTitle }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ml-2 white--text" text rounded v-on:click="toPath($localePath)">首页</v-btn>
      <v-btn class="ml-2 white--text" text rounded v-on:click="toPath('/about/about')">关于</v-btn>
    </v-app-bar>
  </v-card>
</template>
<script>
export default {
  name: "Appbar",
  data() {
    return {}
  },
  components: {},
  methods: {
    toPath: function(path){
      debugger;
        this.$router.push(path);
    }, 
  }
}
</script>
