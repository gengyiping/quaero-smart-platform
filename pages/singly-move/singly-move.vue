<template>
	<view class="container">
		<text class="name">7-1:转移界面</text><br><br>
		<view class="machine-name">
			<text class="nameTips">物料条码:</text>
			<input @input="oInput" v-model="oname" focus="true" placeholder="扫码:料号+批号+单据条码" value="oname" />
			<view class="avater">
				<image @click="login" class="img " src="../../static/scan.png" mode="widthFix"></image>
			</view>
		</view><br>
		<view class="machine-name">
			<text class="nameTips">原 位 置:</text>
			<input @input="nInput" v-model="nname" focus="true" placeholder="扫码带入" value='nname' />
			<view class="avater">
				<image @click="loginn" class="img " src="../../static/scan.png" mode="widthFix"></image>
			</view>
		</view><br>

		<view class="machine-name-3">
			<text class="nameTips">目 标 位:</text>
			<input @input="eInput" v-model="ename" focus="true" placeholder="扫码带入" value='ename' />
			<view class="avater">
				<image @click="logine" class="img " src="../../static/scan.png" mode="widthFix"></image>
			</view>
		</view><br>

		<view>
			<radio-group class="depict" @change="radioChange">
				<label class="radio">
					<radio value="0" checked="true" />部分
				</label>
				<label>
					<radio value="1" />全部
				</label>
			</radio-group>
		</view>
		<br>
		<view class="machine-name-5">
			<text class="num">移动数量:</text>
			<input name="name" focus="true" placeholder="" />
		</view>
		<!-- <view class="but">
		<button class="button-l " @click="login">确认转移</button>
		<button class="button-l " @click="login">异常呼叫</button>
		</view> -->
		<view class="uni-textarea">
			<textarea placeholder-style="color:#fff" placeholder="占位符字体是红色的" />
			</view><br>
		<view class="but">
			<button class="button-c"  @click="login">清空</button>
			<button class="button-c "  @click="login">复制</button>
			 <button class="button-c "  @click="login">异常</button>
			<button class="button-c "  @click="login">确认</button> 
		</view> 
									
		<!-- <button class="button"  @click="login">扫码</button> -->
	</view>
	
</template> 
<script>
	export default {
		data() {
			return {
			inputValue: '',
				 current: 0,
				 oname:'',
				 nname:'',
				 ename:''
			}
			
		},
		methods: {
			login:function(){
				let that=this
				uni.scanCode({
				    success:function(res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.oname=res.result 
					this.$request('/api/materialTransfer/nonStockInquire',{
						baseEntry: that.oname,
						baseline: '',
						disNum: '',
						doctype: '',
						itemCode:''	 
						},'post','application/x-www-form-urlencoded').then(res => {

                            console.log("查询成功", res)
                         })
						/* uni.request({
							url: 'http://192.168.122.200:8890/api/materialTransfer/nonStockInquire',
							method: 'POST',
							data: {
								baseEntry: that.oname,
								baseline: '',
								disNum: '',
								doctype: '',
								itemCode:''
							},
							header: {
								"Content-Type": 'application/x-www-form-urlencoded',
							},
							success: res => {
								console.log("查询成功", res)
							},
						}) */
				    },
				
				})
			},
			loginn:function(){
				let that=this
				uni.scanCode({
				    success:function(res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.nname=res.result
				    },
				
				})
			},
			logine:function(){
				let that=this
				uni.scanCode({
				    success:function(res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.ename=res.result
				    },
				
				})
			},
		radioChange:function(e){
			console.log('携带值为', e.target.value)
			this.index=e.target.value
		},
		oInput: function(event) {
			console.log("oInput输出的是：", event.target.value)
			this.oname = event.target.value
			
		},
		nInput: function(event) {
			console.log("nInput输出的是：", event.target.value)
			this.inputValue = event.target.value
		},
		eInput: function(event) {
			console.log("eInput输出的是：", event.target.value)
			this.inputValue = event.target.value
		}
		}
	}
</script>

<style>
	/* .but{
	  margin-top: -260px;
	    margin-right: 360px;
	
	
	} */
	.button-c{
		margin-top: 15rPX;
		width: 160rpx;
		height: 80rpx;
		background-color: #00a0e9;
		color: #fff;	
		display:inline-block;
		margin-left: 5rpx;
		margin-right: 0rpx;
		font-size:15px;
		text-align: center;
	}
	.button-l{
		margin-right: 60rpx;
		margin-left:20rpx;
		margin-top:23rPX;
		width: 200rpx;
		height: 80rpx;
		background-color: #00a0e9;
		color: #fff;
		display:inline-block;
		text-align: center;
		font-size:15px;
	}
	.avater {
		margin-top: -56rpx;
		margin-left: 550rpx;
	}
	
	.avater .img {
		width: 50rpx;
		margin-top:0rpx;
	
	}
	
	.name{
		font-size:22px;
	}
	.nameTips{
		font-size: 15px;
	}
	.machine-name{
		margin-top: -30rpx;
	}
	.machine-name input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 500rpx;
	  margin-left: 70px;
	  margin-top: -25px;
	}
	.machine-name-3 input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 500rpx;
	  margin-left:70px;
	  margin-top:-25px;
	}
	.machine-name-5{
		margin-left: -300rpx;
	}
	.machine-name-5 input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 200rpx;
	  margin-left:70px;
	  margin-top:-25px;
	  
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
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
	 width: 700rpx;
	/*  padding-left: 20px; */
	  margin-top: 10px	
	}

</style>
