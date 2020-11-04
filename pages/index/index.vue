<template>
	<view class="container">
		<view class="machine-name">
			<text class="nameTips">账 户:</text>
			<input name="name" focus="true" placeholder="请输入你的账户" />
		</view><br>
		<view class="machine-name">
			<text class="nameTips">密 码:</text>
			<input name="pwd" focus="true" placeholder="请输入你的密码" />
		</view><br>
		<view class="machine-name-3">
			<text class="nameTips">界面号:</text>
			<input name="ui" focus="true" placeholder="请输入你的界面号" />
		</view><br>
		<navigator url="/pages/scan/scan">
		<button class="button" @click="login">登录</button>
        </navigator>
	</view>

</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		 methods: {
		    login() {
		      const { name, pwd, ui,$router } = this;
		      this.$router.push({
		        name: "Main",
		        params: {
		          username: this.name,
		        }
		      })
		    }
		  }
	}
</script>

<style>
	.nameTips {
		font-size: 15px;
	}

	.machine-name input {
		border-bottom: 1px solid rgb(2, 2, 2);
		width: 140px;
		margin-left: 50px;
		margin-top: -25px;
	}

	.machine-name-3 input {
		border-bottom: 1px solid rgb(2, 2, 2);
		width: 140px;
		margin-left: 50px;
		margin-top: -25px;
	}

	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		margin-top: 240px;
		margin-left: 45%;

	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 180px;
		height: 2%;
		margin-left: 5px;
		background-color: #00a0e9;
		color: #fff;
	}
</style>
