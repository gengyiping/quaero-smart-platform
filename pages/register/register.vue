<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avater">
				<image class="img " src="../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>

		<view class="form">
			<view class="inputWrapper">
				<input name="Username" class="input" type="text" @input="nameInput" value="" placeholder="请输入用户名">
			</view>
			<view class="inputWrapper">
				<input name="Password" class="input" type="password" @input="wordInput" value="" placeholder="请输入密码">
			</view><br>
			<view class="number">
				<view class="uni-list-cell-left" style="color:#F1F1F1">
					<!-- 选择界面号: -->
					<view class="uni-list-cell-db" style="color:#F1F1F1">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">选择界面号 : {{array[index]}}</view>
						</picker>
					</view>
				</view>
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
				array: ['7-1', '7-2', '7-3', '7-4', '7-5'],
				index: 0,
				username: '',
				password: ''
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			nameInput: function(event) {
				console.log("账号输出的是：", event.target.value)
				this.Username = event.target.value
			},
			wordInput: function(event) {
				console.log("密码输出的是：", event.target.value)
				this.Password = event.target.value
			},
			login: function() {
				console.log("账号输出的是1：", this.Username)
				console.log("密码输出的是2：", this.Password)

				uni.request({
					url: 'http://192.168.122.200:8890/api/login',
					method: 'POST',
					data: {
						username: this.Username,
						password: this.Password
					},
					header: {
						"Content-Type": 'application/x-www-form-urlencoded',
					},
					success: res => {
						console.log("1111", res)
						if (res.statusCode == 200) {
							uni.showToast({
								icon: 'none',
								title: '登录成功',
							});
							uni.setStorage({
								key: 'Authorization',
								data: res.data.msg,
								success: function() {
									console.log("存储用户名到本地成功！", res.data.msg);
									uni.getStorage({
										key: 'Authorization',
										success: function(res) {
											console.log("获取缓存中的Authorization是:",res.data);
										}
									});
								}
							})
							console.log('用户选择的界面号是:', this.index)
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
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
							});
						}
						/* uni.showToast({
							icon: 'none',
							title: '密码或用户名错误',
						}); */


					},
				})


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
		width: 300rpx;
		height: 300rpx;
		overflow: hidden;
	}

	.avater .img {
		width: 100%;
		margin-top: 100rpx;

	}

	.form {
		padding: 0 100rpx;
		margin-top: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.inputWrapper {
		width: 500rpx;
		height: 80rpx;
		background: white;
		border-radius: 15rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		margin-top: 36rpx;
	}

	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 30rpx;

	}

	.button {
		color: #fff;
		width: 500rpx;
		height: 80rpx;
		background-color: #77B3D7;
		border-radius: 15rpx;
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.number {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.uni-list-cell-left {
		margin-top: 40rpx;
		margin-left: -460rpx;
	}

	.uni-input {
		margin-top: -40rpx;
		margin-left: 200rpx;
		font-size: 30rpx;

	}
</style>
