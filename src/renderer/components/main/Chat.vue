<template>
  <div id="chat">
    <div class="header">
      <span class="chat-name">室友-赵策</span>
      <div class="other"><i class="el-icon-more"></i></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'chat'
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
</style>
