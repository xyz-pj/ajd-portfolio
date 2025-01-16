<template>
  <TopBanner />
  <NenefitSection msg="<strong>정당<strong>하게 받을 수 있는 혜택들, <br> 모르고 계셨나요?"/>
  
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
