<template>
	<view class="container">
		<text class="name">7-3:非库存批量转移界面</text><br><br>
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
		</view>

		<view class="uni-textarea">
			<view class="depict">
				<view v-if="isShow">
					<view>名称规格：{{1}}</view><br>
					<view>单据数量：{{2}}</view><br>
					<view>操作员：{{3}}</view><br>
					<view>操作时间：{{array.list[0].docDate}}</view>
				</view>
			</view>
			<textarea placeholder-style="color:#fff" placeholder="" />
			</view><br>
		<view class="but">
			<button class="button-c"  @click="loginq">清空</button>
			<button class="button-c "  @click="loginf">复制</button>
			 <button class="button-c "  @click="loginy">异常</button>
			<button class="button-c "  @click="loginsure">确认</button> 
		</view> 
	</view>
	
</template> 
<script>
	export default {
		data() {
			return {
				 isShow:false,
			     inputValue: '',
				 current: 0,
				 oname:'',
				 nname:'',
				 ename:'',
				 array:['']
			}
			
		},
		methods: {
			loginn:function(){
				let that=this
				/* uni.scanCode({
				    success:function(res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.nname=res.result */
						that.$request.request('/api/materialTransfer/nonStockBatchInquire',{
						/* baseEntry: that.oname.substring(14,20),
						baseline: that.oname.substring(20,23),
						disNum: that.oname.substring(8,12),
						doctype: that.oname.substring(12,14),   
						itemCode:that.oname.substring(0,8) */
						location:"KWYD-123"
						},'post','application/json').then(res => {
							that.isShow=true
						    console.log('查询成功',res.data);  
							that.array=res.data.data
						 })
				/*    },
				
				}) */
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
			loginsure:function(){
				var that=this
				that.$request.request('/api/materialTransfer/nonStockBatch',{
						 "location": "KW-YD-123", 
						  "targetLocation": that.ename
						},'post','application/json').then(res => {
				            console.log('查询成功',res.data);
							uni.showToast({
								icon: 'none',
								title: '确定成功', 
							});
				         })
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
	.depict{
		font-size: 13px;
	    margin-left: 50rpx;
	    margin-top: 60rpx;
	}
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
