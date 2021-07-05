<!-- 聊天输入界面 -->
<template>
  <div id="messageInput">
    <div class="message-input-header">

    </div>
    <div class="message-input-body">
    </div>
    <div class="message-input-footer">

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
  background-color: #98E165;
}

#messageInput .message-input-header {
  height: 35px;
  background-color: #98E165;
}
#messageInput .message-input-body {
  background-color: #35495e;
  /*height: calc(100% - 300px);*/
}

#messageInput .message-input-footer {
  height: 30px;
  background-color: blueviolet;
}
</style>
