<template>
  <div id="wrapper">
    <el-row class="main">
      <el-col class="main-menu" style="text-align: center;position: relative">
        <div style="margin-top: 35px; margin-bottom: 12px">
          <img src="../assets/header.jpg" style="height: 35px; width: 35px;" alt="">
        </div>
        <div v-for="item in menus"
             class="menu-term"
             :key="item.id"
             :class="selectId === item.id ? 'active' : ''"
             @click="checkMenu(item)">
          <i :class="item.icon"></i>
        </div>
        <div class="menu-term" style="position: fixed; bottom: 0; left: 15px;">
          <i class="el-icon-s-operation"></i>
        </div>
      </el-col>
      <el-col class="main-pointers">
        <div class="pointers-header">
          <el-input
              placeholder="搜索"
              prefix-icon="el-icon-search"
              size="mini"
              v-model="mainSearch">
          </el-input>
          <div class="createChat">
            +
          </div>
        </div>
        <GeminiScrollbar class="pointers-body">
          <router-view name="ChatPointers"></router-view>
        </GeminiScrollbar>
      </el-col>
      <el-col class="main-content">
          <FrameMenu></FrameMenu>
          <!--        <ChatBlank></ChatBlank>-->
          <Chat></Chat>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // 微信顶部菜单
  import FrameMenu from './main/FrameMenu'

  // 聊天实体部分
  import ChatBlank from './main/ChatBlank'
  import Chat from './main/Chat'

  import ChatPointers from './pointers/ChatPointers'

  const { remote } = require('electron')

  export default {
    name: 'landing-page',
    components: { FrameMenu, ChatBlank, Chat, ChatPointers },
    data () {
      return {
        selectId: '1',
        mainSearch: '',
        pointerBodyStyle: '',
        menus: [
          { id: '1', icon: 'el-icon-chat-dot-round', path: 'chatPointers' },
          { id: '2', icon: 'el-icon-user', path: 'ContactsPointer' },
          { id: '3', icon: 'el-icon-suitcase', path: 'StorePointer' },
          { id: '4', icon: 'el-icon-folder-opened', path: 'FilePointer' },
          { id: '5', icon: 'el-icon-orange', path: 'WechatMoments' }
        ]
      }
    },
    methods: {
      changeSize () {
        remote.getCurrentWindow().setSize(800, 500)
        remote.getCurrentWindow().setResizable(true)
        remote.getCurrentWindow().setMinimumSize(700, 500)
        remote.getCurrentWindow().center()
      },
      checkMenu (item) {
        this.selectId = item.id
        this.$router.push(item.path)
      },
      addClass (className) {
        this.pointerBodyStyle = className
      }
    },
    mounted () {
      setTimeout(() => {
        this.checkMenu(this.menus[0])
      }, 50)
    },
    created () {
      this.changeSize()
    }
  }
</script>


<style>
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
    -webkit-app-region: drag;
  }

  #wrapper .main .main-menu div {
    -webkit-app-region: no-drag;
  }

  #wrapper .main .main-menu .menu-term {
    color: #969799;
    font-size: 20px;
    font-weight: 100;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
  }

  #wrapper .main .main-menu .menu-term:hover {
    cursor: pointer;
    color: #a3a5a7;
  }

  #wrapper .main .main-menu .menu-term.active {
    color: rgb(7, 193, 96);
  }

  #wrapper .main .main-pointers {
    height: 100vh;
    width: 250px;
    background-color: rgb(239, 239, 239);
    border-right: 1px solid #d9d7d7;
  }


  #wrapper .main .main-pointers .pointers-header {
    height: 60px;
    background-color: rgb(247, 247, 247);
    position: relative;
  }

  #wrapper .main .main-pointers .pointers-header .el-input {
    width: 190px;
    margin-top: 25px;
    margin-left: 10px;
  }

  #wrapper .main .main-pointers .pointers-header .el-input .el-input__inner{
    height: 24px;
    line-height: 24px;
    background-color: rgb(226,226,226);
  }

  #wrapper .main .main-pointers .pointers-header .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: rgb(226,226,226) !important;
    background-color: rgb(248, 248, 248) !important;
    outline: 0;
  }

  #wrapper .main .main-pointers .pointers-header .createChat {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    position: absolute;
    top: 25px;
    right: 15px;
    color: black;
    background-color: rgb(226,226,226);
    border-radius: 4px;
  }

  #wrapper .main .main-pointers .pointers-body {
    height: calc(100vh - 60px);
  }

  #wrapper .main .main-content {
    height: 100vh;
    width: calc(100vw - 305px);
  }

  #wrapper .main .main-pointers .pointers-body .gm-scrollbar {
    right: 0;
    width: 8px;
    border-radius:4px;
    overflow-x: hidden
  }

  .gm-scrollbar.-horizontal {
    background-color: transparent;
    overflow-x: hidden
  }

  /* scrollbar thumb */
  #wrapper .main .main-pointers .pointers-body:hover .gm-scrollbar .thumb {
    background: rgba(204, 201, 198, 0.8) !important;
  }

  #wrapper .main .main-pointers .pointers-body .gm-scrollbar .thumb {
    background: rgba(0, 0, 0, 0) !important;
  }
</style>
