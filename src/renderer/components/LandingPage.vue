<template>
  <div id="wrapper">
    <el-row class="main">
      <el-col class="main-menu" style="text-align: center;position: relative">
        <div style="margin-top: 35px; margin-bottom: 20px">
          <img src="../assets/header.jpg" style="height: 35px; width: 35px;" alt="">
        </div>
        <div class="menu-term">
          <i class="el-icon-chat-dot-round"></i>
        </div>
        <div class="menu-term">
          <i class="el-icon-user"></i>
        </div>
        <div class="menu-term">
          <i class="el-icon-suitcase"></i>
        </div>
        <div class="menu-term">
          <i class="el-icon-folder-opened"></i>
        </div>
        <div class="menu-term">
          <i class="el-icon-orange"></i>
        </div>
        <div class="menu-term" style="position: fixed; bottom: 0; left: 15px;">
          <i class="el-icon-s-operation"></i>
        </div>
      </el-col>
      <el-col class="main-contacts">
        <div class="contacts-header">
          <el-input
              placeholder="搜索"
              prefix-icon="el-icon-search"
              size="mini"
              v-model="mainSearch">
          </el-input>
          
        </div>
        <div class="contacts-body">
            sadasdasd
        </div>
      </el-col>
      <el-col class="main-content"></el-col>
    </el-row>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  const { remote } = require('electron')

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    data () {
      return {
        mainSearch: ''
      }
    },
    methods: {
      changeSize () {
        remote.getCurrentWindow().setSize(800, 500)
        remote.getCurrentWindow().setResizable(true)
        remote.getCurrentWindow().setMinimumSize(700, 500)
      }
    },
    created () {
      this.changeSize()
    }
  }
</script>


<style>
  /*#wrapper {*/
  /*  background:*/
  /*      radial-gradient(*/
  /*          ellipse at top left,*/
  /*          rgba(255, 255, 255, 1) 40%,*/
  /*          rgba(229, 229, 229, .9) 100%*/
  /*      );*/
  /*}*/

  #wrapper .main {
    height: 100vh;
    width: 100vw;
    /*-webkit-app-region: drag;*/
  }

  #wrapper .main .header-draw {
    height: 5px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  #wrapper .main .main-menu {
    height: 100vh;
    width: 55px;
    background-color: rgb(46, 46, 46);
  }

  #wrapper .main .main-menu div{
    margin-bottom: 20px;
  }

  #wrapper .main .main-menu .menu-term{
    color: #969799;
    font-size: 20px;
    font-weight: 100;
  }

  #wrapper .main .main-contacts {
    height: 100vh;
    width: 250px;
    background-color: rgb(239, 239, 239);
  }


  #wrapper .main .main-contacts .contacts-header {
    height: 60px;
    background-color: rgb(247, 247, 247);
  }

  #wrapper .main .main-contacts .contacts-header .el-input {
    width: 190px;
    margin-top: 25px;
    margin-left: 10px;
  }

  #wrapper .main .main-contacts .contacts-header .el-input .el-input__inner{
    height: 24px;
    line-height: 24px;
    background-color: rgb(226,226,226);
  }

  #wrapper .main .main-contacts .contacts-header .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: rgb(226,226,226) !important;
    background-color: rgb(248, 248, 248) !important;
    outline: 0;
  }

  #wrapper .main .main-contacts .contacts-body {
    background-color: rgb(230, 229, 229);
  }


  #wrapper .main .main-content {
    height: 100vh;
    width: calc(100vw - 305px);
    background-color: rgb(158, 48, 48);
  }



  /*main {*/
  /*  display: flex;*/
  /*  justify-content: space-between;*/
  /*}*/

  /*main > div { flex-basis: 50%; }*/



</style>
