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
			</view>
			
			</view>
			<button class="button" @click="login">登录</button>
			
	</view>
</template>

<script>
</script>


<style>
	
	
	
	
	.button {
		color: #fff;
		width: 500rpx;
		height: 80rpx;
		background-color: #77B3D7;
		border-radius: 10rpx;
		margin-top: 35rpx;
	
	
	}
	.content{
		background: #377EB8;
		width: 100vw;
		height: 100vh;
		
	}
	.form {
		padding: 0 100rpx;
		margin-top: 380rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction:column;
	}
	
	.inputWrapper {
		width: 600rpx;
		height: 80rpx;
		background: white;
		border-radius: 20rpx;
		box-sizing: border-box;
		
		margin-top: 36rpx;
		
	}
	
	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 30rpx;
		
	
	}
</style>
