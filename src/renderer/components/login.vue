<template>
  <div id="login-wrapper">
    <div class="header-draw"></div>
    <div class="header">
      <el-row>
        <el-col span="4" style="padding-left: 5px">weChat</el-col>
        <el-col span="3" offset="14"><i class="el-icon-setting"></i></el-col>
        <el-col span="3"><i class="el-icon-close"></i></el-col>
      </el-row>
    </div>
    <div class="body">
      <div class="we-chat-img" style="text-align: center;margin-top: 35px">
        <img src="../assets/logo.png" style="width: 80px; height: 80px" alt="">
      </div>
      <div class="usernameAndPassword">
        <el-input v-model="username" placeholder="用户名" style="margin-bottom: 20px"></el-input>
        <el-input v-model="password" type="password" placeholder="密码" style="margin-bottom: 20px"></el-input>
        <el-button type="success" style="width: 100%" @click="login">登录</el-button>
      </div>
    </div>

  </div>
</template>

<script>
const { remote } = require('electron')

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    changeSize () {
      remote.getCurrentWindow().setSize(275, 400)
      remote.getCurrentWindow().setResizable(false)
    },
    login () {
      this.$router.push('home')
    }
  },
  created () {
    this.changeSize()
  }
}
</script>

<style scoped>

#login-wrapper {
  border-radius: 4px;
  background-color: #ecf1fa;
  height: 400px;
  width: 275px;
}
#login-wrapper .header,.header-draw {
  /*background-color: #6a6a6a*/

}

#login-wrapper .header-draw {
  height: 5px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-app-region: drag;
}

#login-wrapper .header {
  height: 25px;
  color: #969799;
  text-align: center;

}

#login-wrapper .body .usernameAndPassword {
  width: 200px;
  margin: 30px auto 0;
}

#login-wrapper .body .usernameAndPassword .el-input{
  height: 35px;
  line-height: 35px;
  background-color: #ecf1fa;
}

</style>
