<template>
  <div id="chat">
    <div class="header">
      <span class="chat-name">大学-于云鹏</span>
      <div class="other"><i class="el-icon-more"></i></div>
    </div>
    <splitpanes class="default-theme" id="chatBox" horizontal>
      <pane>
        <GeminiScrollbar class="pointers-body">
          <MessageShow></MessageShow>
        </GeminiScrollbar>
      </pane>
      <pane style="min-height: 130px">
        <MessageInput></MessageInput>
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
  mounted () {
  },
  methods: {
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

#chatBox{
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
