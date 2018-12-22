<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
    <footer-bar></footer-bar>
    <BackTop></BackTop>
  </div>
</template>

<script>
import headerBar from './components/common/header-nav'
import FooterBar from './components/common/footer-bar'
export default {
  name: 'App',
  components: {
    FooterBar,
    headerBar
  }
}
</script>

<style>
#app {
  font-family: 'Arial Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#555;
  font-size:16px;
}
</style>
