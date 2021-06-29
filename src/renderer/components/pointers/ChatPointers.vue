<!-- 聊天界面 -->
<template>
  <div id="chat-pointers">
    <img src="../../assets/header2.jpg" style="height: 40px; width: 40px" alt="">
    <span class="chat-name">室友-赵策</span>
    <span class="chat-message">可能我理解的不对</span>
  </div>
</template>

<script>
export default {
  name: 'ChatPointers'
}
</script>

<style scoped>
#chat-pointers {
  height: 40px;
  padding: 12px 10px;
  background-color: rgb(230, 230, 230);
  position: relative;
}

#chat-pointers .chat-name {
  font-size: 12px;
  font-weight: 600;
  color: #1a1a1a;
  position: absolute;
  top: 14px;
  left: 60px;
}

#chat-pointers .chat-message {
  font-size: 12px;
  color: #969799;
  position: absolute;
  top: 36px;
  left: 60px;
}

</style>
