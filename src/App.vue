<template>
  <TopBanner />
  <NenefitSection />
  
</template>

<script>
import TopBanner from './components/TopBanner.vue'
import NenefitSection from './components/NenefitSection.vue'

export default {
  name: 'App',
  components: {
    TopBanner,
    NenefitSection,
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
a{
  color: #fff;
  text-decoration-line: none;
}
</style>
