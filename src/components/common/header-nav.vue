<template>
  <div class="headerBar">
    <header class="header">
      <div class="top-bar">
        <div class="music-bar">
          <div id="music-btn" class="music-btn" @click="toggleMusic()">
            <audio id="music01" src="../../../static/CornfieldChase.mp3" autoplay="autoplay" preload="auto" loop="loop">该浏览器不支持audio标签</audio>
          </div>
          <span>Hans Zimmer - Cornfield Chase</span>
        </div>
      </div>
      <div class="header-inner">
        <div class="title">
          <div>
            <a href="/" class="brand">
              <span class="site-title">Carol的星球</span>
            </a>
          </div>
        </div>
        <nav>
          <ul class="menu">
            <li class="menu-item">
              <router-link to="/">
                <img class="menu-icon" src="../../assets/img/home.png">
                <span>首页</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/tags">
                <img class="menu-icon" src="../../assets/img/tags.png">
                <span>标签</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/archives">
                <img class="menu-icon" src="../../assets/img/archive.png">
                <span>归档</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/about">
                <img class="menu-icon" src="../../assets/img/user1.png">
                <span>关于</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {
      msg: 'headerBar',
      flag: true,
      hasName: false, // 用户名被占
      dialogFormVisible: false,
      form: {
        admin: '',
        password: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    toggleMusic: function () {
      var audio = document.getElementById('music01')
      var btn = document.getElementById('music-btn')
      if (!this.flag) {
        audio.play()
        this.flag = true
        btn.className = 'rotate'
      } else if (this.flag) {
        audio.pause()
        this.flag = false
        btn.className = 'rotate-pause'
      }
    }

  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: "shuke";
    src:url('../../assets/font/shuke.ttf')
  }
  .header {
    background-image: url('../../../static/flower.jpg');
    width: 100%;
    height: 350px;
    .header-inner {
      margin: 0 auto;
      padding: 100px 0;
      width: 700px;
      height: 100%;
      position: relative;
      .title {
        text-align: center;
        color: #fff;
        font-size: 30px;
        .brand {
          display: inline-block;
          line-height: 36px;
          .site-title {
            font-family: "shuke",serif;
            top: -50px;
            opacity: 0.8;
            display: inline-block;
            vertical-align: top;
            line-height: 56px;
            color: #f5f5f5;
            font-weight: normal;
            animation: down 0.2s linear;
            animation-fill-mode: both;
            &:hover {
              transform: scale(1.2);
              transition: all 1s;
            }
          }
        }
      }
      .menu {
        padding:0;
        margin: 20px auto 0;
        font-size: 16px;
        display: flex;
        justify-content: center;
        height: 80px;
        width: 450px;
        background: rgba(255, 255, 255, 0.65);
        list-style: none;
        a{
          color: #333;
          font-size: 16px;
          height: 100%;
          width:60px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          animation: down 0.3s 0.2s linear;
          animation-fill-mode: both;
          text-decoration: none;
          margin:0 10px;
          svg {
            opacity: 0.8;
          }
          .menu-icon {
            width: 20px;
            height: 20px;
            margin-top:18px;
          }
          span {
            margin-bottom:18px;
            position: relative;
            opacity: 0.8;
            &::before {
              content: '';
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: -5px;
              left: 0;
              background-color: #333;
              visibility: hidden;
              transform: scaleX(0);
              transition: all 0.2s ease-in-out;
            }
          }
          &:hover {
            svg {
              opacity: 1;
            }
            span {
              opacity: 1;
              &::before {
                visibility: visible;
                transform: scaleX(1);
              }
            }
          }
        }
        .menu-items {
          flex: 1;
          padding:0 20px;
        }
      }
    }
    .top-bar{
      width:100%;
      height:45px;
      background-color:rgba(255,255,255,0.5);
      left:0;
      top:0;
      z-index:3;
      .music-bar{
        height:100%;
        padding:0px 20px;
        display:flex;
        justify-content: start;
        align-items: center;
        z-index:4;
        #music-btn{
          position:relative;
          width:28px;
          height:28px;
          margin-right:10px;
          background-image:url("../../assets/img/music-w.png");
          background-repeat: no-repeat;
          background-size: contain;
          -webkit-animation: rotating 3s linear infinite;
          animation: rotating 3s linear infinite;
        }
        .rotate{
          animation-play-state:running;
          -webkit-animation-play-state:running; /* Safari 和 Chrome */
        }
        .rotate-pause{
          animation-play-state:paused !important;
          -webkit-animation-play-state:paused !important; /* Safari 和 Chrome */
        }
        @-webkit-keyframes rotating {
          from { -webkit-transform: rotate(0) }
          to { -webkit-transform: rotate(360deg) }
        }
        @keyframes rotating {
          from { transform: rotate(0) }
          to { transform: rotate(360deg) }
        }
        @-moz-keyframes rotating {
          from { -moz-transform: rotate(0) }
          to { -moz-transform: rotate(360deg) }
        }
        span{
          z-index:4;
          color:#000;
        }
      }
    }
  }

@media only screen and (min-width: 300px) and (max-width:768px){
  header {
    min-width: 350px;
    height: 260px;
    .header-inner {
      width: 80% !important;
    }
    nav {
      margin: 0 auto;
      .menu {
        width: 100% !important;
        padding:0 !important;
      }
    }
  }
}
</style>
