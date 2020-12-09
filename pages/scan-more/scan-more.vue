<template>
	<view class="container">
		<text class="name">7-4:库存批量转移界面</text><br><br>
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
			<textarea maxlength="-1" v-if="isShow" v-model="textareaVal"  placeholder-style="color:#ffffff" placeholder="你好你好" value='textareaVal' >
			 <!-- <textarea v-if="isShow" v-model="textareaVal"> -->
			<!-- <view class="depict">
			<view v-if="isShow">
				<view>名称规格：{{1}}</view><br>
				<view>单据数量：{{2}}</view><br>
				<view>操作员：{{3}}</view><br>
				<view>操作时间：{{array.list}}</view>
			</view>
			</view> -->
			</textarea>
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
				mcgg:'',
				djsl:'',
				czy : '',
				czsj: '',
				 isShow:false,
			     inputValue: '',
				 current: 0,
				 oname:'',
				 nname:'',
				 ename:'',
				 array:[''],
				 textareaVal:'批次数量: {0}\r\n单据总数: {1}\r\n物料总数: {2}\r\n '
			}
			
		},
		methods: {
			loginn:function(){
				let that=this
				 uni.scanCode({
				    success:function(res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.nname=res.result 
						that.$request.request('/api/materialTransfer/stockBatchInquire',{					
						location:that.nname 
						},'post','application/json').then(res => {
							that.isShow=true
						    console.log('查询成功',res.data);  
							that.textareaVal='批次数量: {0}'+'\r\n'+'单据总数: {1}'+'\r\n'+'物料总数: {2}'+'\r\n '
							that.array=res.data.data
							// todo  这里赋值
						   that.mcgg = that.array.disTotal;
						   that.djsl = that.array.docTotal;
						   that.czy = that.array.itemTotal;
						   for(var i=0;i<that.array.list.length;i++){
							   var obj = that.array.list[i];
							   console.log("数组显示",obj)
							  /* that.czsj = obj.docDate; */
							   that.textareaVal = that.textareaVal.replace("{0}",that.mcgg).replace("{1}",that.djsl).replace("{2}",that.czy);
							   for(var fieldName in obj){
								   console.info('22222',fieldName);
								   console.info('33333',obj[fieldName]);
								  if(fieldName!=('uid')){
									  that.textareaVal = that.textareaVal +'\r\n'+(i+1)+'-'+fieldName+': '+obj[fieldName]
									   
									    console.info('textareaVal',that.textareaVal)
								  }
								 
							   }
							   that.textareaVal = that.textareaVal.replace("creator","操作员").replace('disNum','批号').replace('docDate','操作时间').replace("itemCode","料号").replace('itemName','名称规格').replace('qty','数量')
							    
						   }
						  
						   console.log("11111",that.array.list.length)
						   /* for(var i=0;i<that.array.list.length;i++){
							   that.textareaVal = that.textareaVal +that.czsj
						   } */
						 })
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
			loginsure:function(){
				var that=this
				that.$request.request('/api/materialTransfer/stockBatch',{
						 location:that.nname , 
						  targetLocation: that.ename
						},'post','application/json').then(res => {
				            console.log('确定成功',res.data);
							uni.showToast({
								icon: 'none',
								title: '确定成功', 
							});
				         })
			},
			loginq:function(){
				this.textareaVal=''
				this.nname=''
				this.ename=''
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
   .uni-textarea textarea{
		padding:60rpx 0rpx -36rpx 0rpx;
		margin-top: 20rpx;
		margin-right: -10rpx;
		width: 670rpx;
		height: 240px;
		margin-left: 20rpx;
		font-size: 13px;
	}
</style>
