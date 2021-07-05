<template>
  <div id="chat">
    <div class="header">
      <span class="chat-name">大学-于云鹏</span>
      <div class="other"><i class="el-icon-more"></i></div>
    </div>
    <div ref="chatBox" id="chatBox">
      <div id="chatTop">
        <GeminiScrollbar class="pointers-body">
          <MessageShow></MessageShow>
        </GeminiScrollbar>
      </div>
      <div id="chatResize">
        <div style=" border-top: 1px solid #e8e8e8;margin: 0 auto"></div>
      </div>
      <div id="chatDown">
        <GeminiScrollbar class="pointers-body">
          <MessageInput></MessageInput>
        </GeminiScrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import MessageShow from './Message/MessageShow'
import MessageInput from './Message/MessageInput'
export default {
  name: 'chat',
  components: { MessageShow, MessageInput },
  mounted () {
    this.dragControllerDiv()
  },
  methods: {
    dragControllerDiv () {
      const chatResize = document.getElementById('chatResize')
      const chatTop = document.getElementById('chatTop')
      const chatDown = document.getElementById('chatDown')
      const chatBox = document.getElementById('chatBox')
      chatResize.onmousedown = function (e) {
        const startY = e.clientY
        chatResize.top = chatResize.offsetTop
        document.onmousemove = function (e) {
          const endY = e.clientY
          let moveLen = chatResize.top + (endY - startY)
          const maxT = chatBox.clientHeight - chatResize.offsetHeight
          if (moveLen < 30) moveLen = 30
          if (moveLen > maxT - 30) moveLen = maxT - 30
          chatResize.style.top = moveLen.toString()
          chatTop.style.height = moveLen + 'px'
          chatDown.style.height = (chatBox.clientHeight - moveLen - 5) + 'px'
        }
        document.onmouseup = function (evt) {
          document.onmousemove = null
          document.onmouseup = null
          // chatResize.releaseCapture && chatResize.releaseCapture()
        }
        // chatResize.setCapture && chatResize.setCapture()
      }
    }
  }
}
</script>

<style scoped>
#chat {
  height: calc(100vh - 24px);
  background-color: rgb(245, 245, 245);
}

#chat .header {
  height: 36px;
  border-bottom: 1px solid rgb(227, 226, 226);
  position: relative;
}

#chat .header .chat-name {
  font-size: 16px;
  line-height: 36px;
  margin-left: 20px;
}

#chat .header .other {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 15px;
  color: #969799;
}



#chatBox{
  width:100%;
  height:calc(100vh - 61px);
  position: relative;
  overflow:hidden;
}
#chatTop {
  height:calc(100vh - 30% - 66px);
  width:100%;
  float:left;
  overflow: auto;
}

#chatResize {
  position: relative;
  width:100%;
  cursor: s-resize;
  float:left;
}

#chatDown {
  height: calc(100vh - 61px);
  width: 100%;
  float: left;
  min-height: 130px;
}
</style>
