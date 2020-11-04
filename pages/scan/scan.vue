<template>
	<view class="container">
		<text class="name">7-2:批量转移界面</text><br><br>
		<view class="machine-name">
			<text class="nameTips">原 位 置:</text>
			<input name="name" focus="true" placeholder="扫码带入" />
		</view><br>
		<view class="machine-name-3">
			<text class="nameTips">目 标 位:</text>
			<input name="name" focus="true" placeholder="扫码带入" />
		</view><br>
		<view class="uni-textarea">
			<textarea placeholder-style="color:#fff" placeholder="占位符字体是红色的" />
			<view class="butt">
			            <button class="button-clear"  @click="login">清空</button>
			            <button class="button-confirm "  @click="login">复制标签</button>
			            <button class="button-confirm "  @click="login">异常呼叫</button>
			            <button class="button-confirm "  @click="login">确认转移</button>
			            </view>
						</view>
			  
		<button class="button"  @click="login">扫码</button>
		
	</view>
	
	
</template> 
<script>
	export default {
		data() {
			return {
				href: 'pages/scan/scan'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.name{
		font-size:22px;
	}
	.nameTips{
		font-size: 15px;
	}
	.machine-name input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 200px;
	  margin-left: 70px;
	  margin-top: -25px;
	}
	.machine-name-3 input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 200px;
	  margin-left:70px;
	  margin-top:-25px;
	}
	.machine-name-5 input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 200px;
	  margin-left:70px;
	  margin-top:-25px;
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		margin-top: 10px;
		margin-left:40% ;
		
	}
	.button{
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  width: 320px;
		  height: 46px;
		  margin-left: 0px;
		  background-color: #00a0e9;
		  color: #fff;	
		  margin-top: 30px;
	}
	.butt{
		margin-top: -220px;
		margin-right: -442px;
	
	}
	.button-clear{
		margin-top: 80PX;
		width: 120px;
		height: 46px;
		background-color: #00a0e9;
		color: #fff;	
	}
	.button-confirm{
		margin-top: 20PX;
		width: 120px;
		height: 46px;
		background-color: #00a0e9;
		color: #fff;
		
	}
	.radio{
		font-size: 15px;
		margin-right: 90px;
	}
	.num{
		font-size: 15px;
		margin-top: 120px;
	}
	.uni-textarea{
	 border: lightgrey;
	  border-style: dashed;
	  border-width: 1px;
	  font-size: 10px;
	  border-radius: 20px;
	  height: 260px;
	 width: 300px;
	  padding-left: 20px;
	  margin-top: 10px	
	}

</style>
