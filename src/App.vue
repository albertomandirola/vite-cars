<script>

import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>
<template lang="">
  <div>
    <AppHeader/>
    <router-view></router-view>
    <!-- AppFooter -->
  </div>
</template>
<style lang="scss">
@use './style/generals.scss' as *;
</style>