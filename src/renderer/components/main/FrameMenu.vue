<template>
<div id="frameMenu">
  <div class="minus" @click="windowOperation('window-min')">
    <i class="el-icon-minus"></i>
  </div>
  <div class="full-or-not" @click="windowOperation('window-max')">
    <i class="el-icon-full-screen"></i>
  </div>
  <div class="close" @click="windowOperation('window-close')">
    <i class="el-icon-close"></i>
  </div>
</div>
</template>

<script>
const { ipcRenderer } = require('electron')

export default {
  name: 'FrameMenu',
  methods: {
    windowOperation (operation) {
      ipcRenderer.send(operation)
    }
  }
}
</script>

<style scoped>
#frameMenu {
  height: 24px;
  background-color: rgb(245, 245, 245);
  position: relative;
  color: #646566;
  -webkit-app-region: drag;
}

#frameMenu div {
  position: absolute;
  width: 36px;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  text-align: center;
  -webkit-app-region: no-drag;
}

#frameMenu div:hover {
  background-color: rgb(229, 229, 229);
}

#frameMenu .close {
  right: 0;
}

#frameMenu .close:hover {
  background-color: rgb(250, 81, 81);
  color: #fff;

}

#frameMenu .full-or-not {
  right: 36px;
}

#frameMenu .minus {
  right: 72px;
}


</style>
