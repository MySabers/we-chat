<!-- 聊天输入展示界面 -->
<template>
  <div id="messageShow">
    <el-row v-for="item in record" :key="item.id" style="margin-top: 8px">
      <template v-if="item.type === 'receive'">
        <el-col span="2" style="width: 40px">
          <img :src="item.header"
               draggable="false"
               style="height: 30px; width: 30px"
               alt="">
        </el-col>
        <el-col span="16">
          <div class="frame">
            <div class="triangle"></div>
            <span class="message-content">{{item.message}}</span>
          </div>
        </el-col>
        <el-col span="6"></el-col>
      </template>
      <template v-else>
        <!-- 占位作用  -->
        <el-col style="width: 25%; user-select:none;">&nbsp;</el-col>
        <el-col style="width: calc(100% - 25% - 40px)">
          <div class="right-frame">
            <div class="right-triangle"></div>
            <span class="right-message-content">{{item.message}}</span>
          </div>
        </el-col>
        <el-col style="width: 35px; float: right">
          <img :src="item.header"
               draggable="false"
               style="height: 30px; width: 30px; float: right"
               alt="">
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'messageShow',
  data () {
    return {
      record: [
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
  }
}
</script>

<style scoped>
#messageShow {
  padding-left: 20px;
  padding-right: 20px;
}
.frame {
		width: 99%;
		float: left;
		position: relative;
		padding: 0 0 0 5px;
    height: 20px;
    line-height: 20px;
	}
	.triangle{
		width:0;
		height:0;
		border-top:4px solid transparent;
		border-bottom:4px solid transparent;
		border-right:4px solid #fff;
		position: absolute;
		left: 2px;
		top: 6px;
	}
	.message-content{
		float: left;
		padding: 5px 10px;
		background-color: #fff;
		font-size: 12px;
    color: #323232;
		border-radius: 2px;
	}

.right-frame{
  width: 100%;
  float: left;
  position: relative;
  padding: 0 5px 0 0;
  height: 20px;
  line-height: 20px;
}
.right-triangle{
  width:0;
  height:0;
  border-top:4px solid transparent;
  border-bottom:4px solid transparent;
  border-left:4px solid #98E165;
  position: absolute;
  right: 2px;
  top: 6px;
}
.right-message-content{
  float: right;
  padding: 5px 10px;
  background-color: #98E165;
  font-size: 12px;
  color: #323232;
  border-radius: 2px;
}
</style>
