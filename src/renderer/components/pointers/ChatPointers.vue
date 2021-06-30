<!-- 聊天界面 -->
<template>
  <div id="chat-pointers">
    <div v-for="item in data"
         :key="item.id"
         class="chat-pointers"
         :class="currentSelectChat === item.id ? 'selected' : ''"
         @click="selectChat(item)">
      <img :src="item.headerPath" style="height: 40px; width: 40px" alt="">
      <span class="chat-name">{{item.name}}</span>
      <span class="chat-message">{{item.lastMessage}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatPointers',
  data () {
    return {
      data: [
        {
          id: '1',
          name: '室友-赵策',
          headerPath: '/static/zhaoce.jpg',
          lastMessage: '可能我理解的不对',
          chatRecordPath: ''
        },
        {
          id: '2',
          name: '室友-方鑫泽',
          headerPath: '/static/fangxinze.jpg',
          lastMessage: '来吗',
          chatRecordPath: ''
        },
        {
          id: '3',
          name: '大学-于云鹏',
          headerPath: '/static/yuyunpeng.jpg',
          lastMessage: '[ 动画表情 ]',
          chatRecordPath: ''
        }
      ],
      currentSelectChat: ''
    }
  },
  methods: {
    selectChat (item) {
      this.currentSelectChat = item.id
    }
  }
}
</script>

<style scoped>
#chat-pointers .chat-pointers {
  height: 40px;
  padding: 12px 10px;
  background-color: rgb(230, 230, 230);
  position: relative;
}

#chat-pointers .chat-pointers .chat-name {
  font-size: 12px;
  font-weight: 600;
  color: #1a1a1a;
  position: absolute;
  top: 14px;
  left: 60px;
}

#chat-pointers .chat-pointers .chat-message {
  font-size: 12px;
  color: #969799;
  position: absolute;
  top: 36px;
  left: 60px;
}

#chat-pointers .chat-pointers:hover {
  background-color: rgb(216, 216, 216);
}

#chat-pointers .selected {
  background-color: rgb(196, 196, 196);
}

</style>
