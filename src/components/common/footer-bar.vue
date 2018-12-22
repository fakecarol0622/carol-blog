<template>
  <div class="footerBar">
    <footer>
      <div class="footer-inner">
        <span>Copyright</span>
        <img class="foot-icon" src="../../assets/img/copyright.png">
        <span>2018 - {{year}}</span>
        |
        <img class="foot-icon" src="../../assets/img/like.png">
        <span>Carol.All Rights Reserved</span>
      </div>
      <div class="footer-inner">
      <span id="busuanzi_container_site_pv">本站总访问量
        <span id="busuanzi_value_site_pv"></span>次
      </span>
        |
        <span id="busuanzi_container_site_uv">
        您是第
        <span id="busuanzi_value_site_uv"></span>个来访者
      </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      year: ''
    }
  },
  mounted () {
    this.year = new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
  .footerBar{
    position:relative;
  }
  footer{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    min-width:350px;
    font-size:14px;
    color:#999;
    .footer-inner {
      text-align: center;
      margin: 5px 0;
      .foot-icon{
        width:16px;
        height:16px;
        margin-bottom:-3px;
      }
    }
  }
</style>
