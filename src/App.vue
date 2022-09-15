<template>
  <div id="app">
    <preLoader
      v-if="isLoaded"
    />
    <header class="header">
        <h1>#movienow</h1>
    </header>
    <div class="main">
      <div class="main_wrapper">
        <router-view/>
        
      </div>
    </div>
  </div>
</template>

<script>
import preLoader from '@/components/v-preloader.vue'
import { mapState } from 'vuex';

export default{
  components: {preLoader},
  computed:{
    ...mapState(['isLoaded'])
  }
}

</script>

<style lang="scss">
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    src: url('@/assets/fonts/Roboto-Regular.ttf') format('truetype');
  }
  html,body {
    margin: 0;
    padding: 0;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    width: min(100%, 1920px);
    margin-inline: auto;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
  }
  .header {
    height: 100px;
    background-color: #FA2828 ;
    text-align: center;
    line-height:  100px;
    & h1 {
      margin: 0;
      font-size: 48px;
      color: black;
    }
  }
  .main {
    width: 100%;
    min-height: 1080px;
    background-color: #363232;
    &_wrapper {
      display: flex;
      width: 1400px;
      margin: auto;
    }
  }
</style>
