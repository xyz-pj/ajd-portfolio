<template>
  <TopBanner msg="퍼블리셔 박진혁"/>
  <h1>test</h1>
</template>

<script>
import TopBanner from './components/TopBanner.vue'

export default {
  name: 'App',
  components: {
    TopBanner
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: SUIT, Noto Sans KR, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
