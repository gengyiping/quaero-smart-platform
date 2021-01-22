<template>

        <view class="uni-form-item uni-column">
                       <view class="title"style="margin-left: 50rpx;margin-top: 50rpx;">收料确认方式（至少勾选一种方式）：</view><br>
                       <checkbox-group class="uni-list" @change="checkboxChange"style="margin-left: 50rpx;">
                           
						   
                               <view class="uni-list-cell uni-list-cell-pd">
                                   <checkbox class="checkbox-3">采购单位点数确认</checkbox>
                               </view>
							   
							  <view class="machine-name"style="margin-top: 10rpx;">
							  	<text class="nameTips">采购单位:</text>
							  	<input @input="oInput" v-model="oname"  placeholder="请输入采购单位" value="oname" />				
							  </view><br>
							 
							   <view class="uni-list-cell uni-list-cell-pd">
                                   <checkbox class="checkbox-3">称重确认</checkbox>
                               </view>
							   
							 <view class="machine-name"style="margin-top: 10rpx;">
							 	<text class="nameTips">重量填写:</text>
							 	<input @input="Input" v-model="nname"  placeholder="请输入物料重量" value="nname" />		
										<!-- <view style="margin-top: -80rpx;margin-left: 30rpx;">
											<u-form-item><u-button type="primary">获取重量</u-button>
											</u-form-item></view> -->
							 </view>  
							 <br>
                               
							   <view class="uni-list-cell uni-list-cell-pd">
							       <checkbox class="checkbox-3">包装点数确认</checkbox>
							   </view>
							 
							 <view class="machine-name"style="margin-top: 10rpx;">
							 	<text class="nameTips">点数填写:</text>
							 	<input @input="eInput" v-model="ename"  placeholder="请输入包装点数" value="ename" />				
							 </view><br>
							 
							 
							   <view class="uni-list-cell uni-list-cell-pd">
							       <checkbox class="checkbox-3">拍照确认</checkbox>
							   </view>
							   <view style="margin-left: -10rpx;">
							  <u-upload :action="action" :file-list="fileList" max-count="3"></u-upload>
							  </view>
                         
						 <view class="machine-name"style="margin-top: 10rpx;">
						 	<text class="nameTips">物理位置:</text>
						 	<input @input="hInput" v-model="mname" focus="true" placeholder="扫码输入" value="mname" />		
									<view class="avater">
										<image @click="logine" class="img" src="../../static/scan.png" mode="widthFix"></image>
									</view>
						 </view><br>
						 </u-form-item>
						 	<u-form-item><u-button type="primary">清空</u-button>
						 	<u-button type="primary">打印标签</u-button>
						 	<u-button type="primary">确定</u-button></u-form-item>
                       </checkbox-group>
                   </view>
</template>

<script>
export default {
	data() {
		return {
			action: '',
			fileList: [],
			oname:'',
			nname:'',
			ename:'', 
			mname:'',
			list: [
				{
					name: '采购单位点数确认',
					disabled: false
				},
				{
					name: '称重确认',
					disabled: false
				},
				{
					name: '包装点数确认',
					disabled: false
				},
				{
					name: '拍照确认',
					disabled: false 
				}
			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			value: 'orange',
		};
	},
	methods: {
		 checkboxChange: function(e) {
		            console.log(e.target.value)
		        },
				oInput: function(event) {
					console.log("oInput输出的是：", event.target.value)
					this.oname = event.target.value
					
				},
				Input: function(event) {
					console.log("Input输出的是：", event.target.value)
					this.nname = event.target.value
					
				},
				eInput: function(event) {
					console.log("oInput输出的是：", event.target.value)
					this.ename = event.target.value		
				},
				hInput:function(event) {
					console.log("oInput输出的是：", event.target.value)
					this.mname = event.target.value		
				},
				logine:function(){
					let that=this 
					uni.scanCode({
					    success:function(res) {
					        //console.log('条码类型：' + res.scanType);
					       // console.log('条码内容：' + res.result);
							that.ename=res.result
					    },
					})
				},
				
	}
};
</script>
<style>
	.nameTips {
		font-size: 15px;
	}
	
	
	
	.machine-name input {
		/* border-bottom: 1px solid rgb(2, 2, 2); */
		width: 500rpx;
		margin-left: 70px;
		margin-top: -22px;
	}
	.avater {
		margin-top: -50rpx;
		margin-left: 560rpx;
	}
	.avater .img {
		width: 50rpx;
		margin-top: 0rpx;
	
	}
</style>