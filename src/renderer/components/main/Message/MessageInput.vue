<!-- 聊天输入界面 -->
<template>
  <div id="messageInput" :class="backgroundColor">
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
    <div class="message-input-body" @click="focusin">
      <GeminiScrollbar class="pointers-body"  style="height: 100%">
        <el-input type="textarea"  v-model="messageContent" autosize ref="textareaInput" />
      </GeminiScrollbar>
    </div>

    <div class="message-input-footer">
      <el-button size="mini" style="margin-top: 2px">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageInput',
  data () {
    return {
      messageContent: '',
      backgroundColor: 'unFocusColor'
    }
  },
  methods: {
    focusin () {
      let childMessage = this.$refs.textareaInput
      childMessage.focus()
      this.backgroundColor = 'FocusColor'
    },
    focusout () {
      this.backgroundColor = 'unFocusColor'
    }
  }
}
</script>

<style>
#messageInput {
  height: 100%;
  min-height: 130px;
  padding-left: 20px;
  padding-right: 20px;
}

#messageInput .message-input-header {
  height: 35px;
  position: relative;
}

#messageInput .message-input-header div {
  height: 23px;
  width: 23px;
  background-color: #c5c6c7;
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
  height: calc(100% - 70px);
}

#messageInput .message-input-body .el-textarea__inner {
  padding: 0;
  height: 100%;
  font-size: 12px;
  color: #323232;
  border: none;
  resize: none;
}

#messageInput .message-input-footer {
  height: 35px;
  text-align: right;
  margin: 0 auto;
}

.unFocusColor {
  background-color: rgb(245, 245, 245);
}

.unFocusColor .el-textarea__inner {
  background-color: rgb(245, 245, 245);
}

.FocusColor {
  background-color: #fff;
}

.FocusColor .el-textarea__inner {
  background-color: #fff
}
</style>
