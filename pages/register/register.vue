<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avater">
				<image class="img " src="../../static/log.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="form">
			<view class="inputWrapper">
				<input class="input" type="text" value="" placeholder="请输入用户名">
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" value="" placeholder="请输入密码">
			</view>
			<view class="inputWrapper">
				<input class="input" type="jiemian" @input="onKeyInput" value="" placeholder="请输入界面号">
			</view>
			<button class="button" @click="login">登录</button>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
			}
		},
		methods: {
			onKeyInput: function(event) {
				console.log("输出的是：", event.target.value)
				this.inputValue = event.target.value
			},
			login: function() {
				if (this.inputValue == "7-1") {
					uni.navigateTo({
						url: '../singly-move/singly-move'
					})
				} else {
					uni.navigateTo({
						url: '../scan/scan'
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		background: #377EB8;
		width: 100vw;
		height: 100vh;

	}

	.avatarWrapper {
		height: 30vh;
		width: 100vx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.avater {
		width: 200upx;
		height: 200upx;
		overflow: hidden;
	}

	.avater .img {
		width: 100%;

	}

	.form {
		padding: 0 100upx;
		margin-top: 68px;
		margin-left: 39%;
	}

	.inputWrapper {
		width: 30%;
		height: 80upx;
		background: #FFFFFF;
		border-radius: 10px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 10px;
	}

	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30%;
		height: 3%;
		margin-left: 0px;
		background-color: #77B3D7;
		color: #fff;
		margin-top: 23px;
		border-radius: 10px;

	}
</style>
