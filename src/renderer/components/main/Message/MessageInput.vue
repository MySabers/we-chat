<!-- 聊天输入界面 -->
<template>
  <div id="messageInput">
    <div class="message-input-header">
      <div class="message-input-header-menu-left">
      </div>
      <div class="message-input-header-menu-left">
      </div>
      <div class="message-input-header-menu-left">
      </div>
      <div class="message-input-header-menu-left">
      </div>
      <div class="message-input-header-menu-right">
      </div>
      <div class="message-input-header-menu-right">
      </div>
    </div>
    <div class="message-input-body">
    </div>
    <div class="message-input-footer">
      <el-button size="mini" style="margin-top: 2px">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageInput'
}
</script>

<style scoped>
#messageInput {
  height: 100%;
  min-height: 130px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: beige;
}

#messageInput .message-input-header {
  height: 35px;
  position: relative;
  background-color: #323232;
}

#messageInput .message-input-header div {
  height: 23px;
  width: 23px;
  background-color: #35495e;
  margin-top: 6px;
}

#messageInput .message-input-header .message-input-header-menu-left {
  float: left;
  margin-right: 6px;
}

#messageInput .message-input-header .message-input-header-menu-right {
  float: right;
  margin-left: 6px;
}

#messageInput .message-input-body {
  background-color: #35495e;
  height: calc(100% - 70px);
}

#messageInput .message-input-footer {
  height: 35px;
  text-align: right;
  margin: 0 auto;
  background-color: #98E165;
}
</style>
