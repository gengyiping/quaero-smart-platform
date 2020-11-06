<template>
	<view class="container">
		<view class="machine-name">
			<text class="nameTips">账 户:</text>
			<input type="name" focus="true" placeholder="请输入你的账户" />
		</view><br>
		<view class="machine-name">
			<text class="nameTips">密 码:</text>
			<input type="pwd" focus="true" placeholder="请输入你的密码" />
		</view><br>
		<view class="machine-name-3">
			<text class="nameTips">界面号:</text>
			<input type="ui" focus="true" @input="onKeyInput" placeholder="请输入你的界面号" />
		</view><br>


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
				console.log("输出的是：",event.target.value)
				this.inputValue = event.target.value
			},
			login: function() {
				if (this.inputValue =="7-1" ) {
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
