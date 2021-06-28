<template>
<div id="frameMenu">
  <div class="minus">
    <i class="el-icon-minus"></i>
  </div>
  <div class="full-or-not">
    <i class="el-icon-full-screen"></i>
  </div>
  <div class="close">
    <i class="el-icon-close"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'FrameMenu'
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
}

#frameMenu .close {
  right: 0;
}

#frameMenu .full-or-not {
  right: 36px;
}

#frameMenu .minus {
  right: 72px;
}


</style>
