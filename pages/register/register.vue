<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avater">
				<image class="img " src="../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="form">
			<view class="inputWrapper">
				<input class="input" type="text" value="" placeholder="请输入用户名">
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" value="" placeholder="请输入密码">
			</view>
			<view class="uni-list-cell-left" style="color:#F1F1F1">
				选择界面号:
			</view>
			<view class="uni-list-cell-db" style="color:#F1F1F1">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<!-- <view class="inputWrapper">
				<input class="input" type="jiemian" @input="onKeyInput" value="" placeholder="请输入界面号">
			</view> -->
			<button class="button" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
				array: ['7-1', '7-2', '7-3', '7-4', '7-5'],
				index: 0,
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			onKeyInput: function(event) {
				console.log("输出的是：", event.target.value)
				this.inputValue = event.target.value
			},
			login: function() {
				console.log('用户选择的界面号是:',this.index)
				if (this.index == "0") {
					uni.navigateTo({
						url: '../singly-move/singly-move'
					})
				} else if (this.index == "1") {
					uni.navigateTo({
						url: '../scan/scan'
					})
				} else if (this.index == "2") {
					uni.showToast({
						icon: 'none',
						title: '请选择正确的界面号',
					});
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
		width: 300upx;
		height: 300upx;
		overflow: hidden;
	}

	.avater .img {
		width: 100%;
		margin-top: 60px;

	}

	.form {
		padding: 0 100upx;
		margin-top: 0px;
		margin-left: 38.5%;
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
	.uni-list-cell-left{
		margin-top: 20px;
	}
	.uni-input{
		margin-top: -20px;
		margin-left: 100px;
	}
</style>
