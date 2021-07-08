<template>
  <div id="chat">
    <div class="header">
      <span class="chat-name">大学-于云鹏</span>
      <div class="other"><i class="el-icon-more"></i></div>
    </div>
    <splitpanes class="default-theme" id="chatBox" horizontal>
      <pane>
        <GeminiScrollbar class="pointers_body" ref="detailScroll"
                         @ready="(example) => scrollUpdate(example, 'detailScroll')">
          <MessageShow :record="currentMessageData"></MessageShow>
        </GeminiScrollbar>
      </pane>
      <pane style="min-height: 130px">
        <MessageInput @sendMessage="sendMessage"></MessageInput>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import MessageShow from './Message/MessageShow'
import MessageInput from './Message/MessageInput'
export default {
  name: 'chat',
  components: { Splitpanes, Pane, MessageShow, MessageInput },
  data () {
    return {
      currentMessageData: [
        {
          id: '1',
          userId: '1',
          type: 'receive',
          message: '我前端不行，目前正在学vue',
          header: '/static/yuyunpeng.jpg'
        },
        {
          id: '2',
          userId: '2',
          type: 'send',
          message: '那玩应真不用学，随用随学',
          header: '/static/liuwei.jpg'
        }
      ]
    }
  },
  methods: {
    sendMessage (msg) {
      this.currentMessageData.push({
        id: Math.random().toString(36).slice(-8),
        userId: '2',
        type: 'send',
        message: msg,
        header: '/static/liuwei.jpg'
      })
    },
    // TODO 为了解决下拉列别不能自动到最底下，暂时搁置
    scrollUpdate (geminiScrollbar, scroll) {
      this[scroll] = geminiScrollbar
      this.$nextTick(() => {
        this[scroll].update()
      })
    }
  }
}
</script>

<style>
#chat {
  height: calc(100% - 24px);
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

#chatBox {
  width:100%;
  height:calc(100% - 37px);
  position: relative;
}
#chatBox .splitpanes__splitter::before,
#chatBox .splitpanes__splitter::after {
  display: none;
}

#chatBox .splitpanes__splitter {
  height: 2px;
  border: 1px solid #eaeaea;
  cursor: n-resize;
}


</style>
