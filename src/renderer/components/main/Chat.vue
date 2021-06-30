<template>
  <div id="chat">
    <div class="header">
      <span class="chat-name">室友-赵策</span>
      <div class="other"><i class="el-icon-more"></i></div>
    </div>
    <div ref="svgBox" id="svgBox">
      <div id="svgTop">
<!--        <svg width="100%" height="auto"></svg>-->
      </div>
      <div id="svgResize"></div>
      <div id="svgDown" style="border-top: 1px solid #b5b9a9;">
        <svg width="100%" height="auto" id="serverSvg"></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  mounted () {
    this.dragControllerDiv()
  },
  methods: {
    dragControllerDiv () {
      const svgResize = document.getElementById('svgResize')
      const svgTop = document.getElementById('svgTop')
      const svgDown = document.getElementById('svgDown')
      const svgBox = document.getElementById('svgBox')
      svgResize.onmousedown = function (e) {
        const startY = e.clientY
        svgResize.top = svgResize.offsetTop
        document.onmousemove = function (e) {
          const endY = e.clientY
          let moveLen = svgResize.top + (endY - startY)
          const maxT = svgBox.clientHeight - svgResize.offsetHeight
          if (moveLen < 30) moveLen = 30
          if (moveLen > maxT - 30) moveLen = maxT - 30
          svgResize.style.top = moveLen
          svgTop.style.height = moveLen + 'px'
          svgDown.style.height = (svgBox.clientHeight - moveLen - 5) + 'px'
        }
        document.onmouseup = function (evt) {
          document.onmousemove = null
          document.onmouseup = null
          // svgResize.releaseCapture && svgResize.releaseCapture()
        }
        // svgResize.setCapture && svgResize.setCapture()
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



#svgBox{
  width:100%;
  height:calc(100vh - 61px);
  position: relative;
  overflow:hidden;
}
#svgTop {
  height:calc(100vh - 30% - 66px);
  width:100%;
  float:left;
  overflow: auto;
}

#svgResize {
  position: relative;
  height:5px;
  width:100%;
  cursor: s-resize;
  float:left;
}

#svgDown {
  height: calc(100vh - 61px);
  width: 100%;
  float: left;
  overflow: hidden;
}
</style>
