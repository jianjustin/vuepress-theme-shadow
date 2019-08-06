<template>
  <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <v-btn>Button</v-btn>
    <Content />
  </div>
</template>
<script>
export default {

  data() {
    return {

    }
  }

}

</script>
