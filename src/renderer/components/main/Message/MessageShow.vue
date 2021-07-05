<!-- 聊天输入展示界面 -->
<template>
  <div>
    <div class="frame">
      <div class="triangle"></div>
      <span class="rotationtiao">这是一段聊天内容</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageShow'
}
</script>

<style scoped>
.frame{
		width: 100%;
		float: left;
		position: relative;
		padding: 0 0 0 5px;
	}
	.triangle{
		width:0;
		height:0;
		border-top:5px solid transparent;
		border-bottom:5px solid transparent;
		border-right:5px solid #98E165;
		position: absolute;
		left: 0;
		top: 6px;
	}
	.rotationtiao{
		float: left;
		padding: 5px 10px;
		background-color: #98E165;
		font-size: 14px;
		border-radius: 2px;
	}
</style>