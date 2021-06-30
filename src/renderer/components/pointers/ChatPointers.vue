<!-- 聊天界面 -->
<template>
  <div id="chat-pointers">
    <div v-for="(item, index) in data" :key="index" class="chat-pointers">
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
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        },
        {
          headerPath: '/static/header2.jpg',
          name: '室友-赵策',
          lastMessage: '可能我理解的不对'
        }
      ]
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
  background-color: rgb(214, 211, 210);
}

</style>
