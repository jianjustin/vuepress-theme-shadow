<template>
  <v-app id="inspire">
    <v-card class="pa-8" min-height="100vh" color="#CCD1D1">
      <Appbar></Appbar>
      <Home v-if="$page.frontmatter.home"></Home>
      <v-card class="ma-2" v-else="!$page.frontmatter.home">
        <v-container>
         <v-card-text>
                  <Content />
                </v-card-text>
        </v-container>
      </v-card>
    </v-card>
  </v-app>
</template>
<script>
import Appbar from '@theme/components/Appbar.vue'
import Home from '@theme/components/Home.vue'
export default {

  data() {
    return {

    }
  },
  components: {
    Appbar,Home
  },
  mounted(){
      this.onready();
      
  },
  methods: {
      onready: function(){
        debugger;
      }
  }

}

</script>
