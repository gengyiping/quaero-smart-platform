<template>
	<view class="container">
		<text class="name">7-1:转移界面</text><br><br>
		<view class="machine-name">
			<text class="nameTips">物料条码:</text>
			<input @input="oInput" v-model="oname" focus="true" placeholder="扫码:料号+批号+单据条码" value="oname" />
			<view class="avater">
				<image @click="login" class="img " src="../../static/scan.png" mode="widthFix"></image>
			</view>
		</view><br><br>
		<view class="machine-name2">
			<!-- <text class="nameTips2">原 位 置:</text> -->
			<!-- <input @input="nInput" v-model="nname" focus="true" placeholder="扫码带入" value='nname' />
			<view class="avater">
				<image @click="loginn" class="img " src="../../static/scan.png" mode="widthFix"></image>
			</view> -->
			<picker @change="bindPickerChange" :value="index" :range="array" :range-key="'ol'">
				<view class="uni-input">原 位 置 : {{array[index].ol}}</view>
			</picker>

			<view class="avater2">
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
					<radio value="0" checked="true" />全部移动
				</label>
				<label>
					<radio value="1" />部分移动
				</label>
			</radio-group>
		</view>
		<br>
		<view class="machine-name-5">
			<text class="num">移动数量: {{array[ind].qty}}</text>
			<input name="name" focus="true" placeholder="" />
		</view>
		<view class="uni-textarea">
			<textarea @input="etextarea" v-model="xname" focus="true" placeholder-style="color:#000000" placeholder="显示" value='xname' />
			</view><br>
		<view class="but">
			<button class="button-c"  @click="ClearButton">清空</button>
			<button class="button-c "  @click="CopyButton">复制</button>
			 <button class="button-c "  @click=" AbnormityButton">异常</button>
			<button class="button-c "  @click="ConfirmButton">确认</button> 
		</view> 
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
				 ename:'',
				 xname:'',
				 array:[''],
				 index: 0,
				 arr:[''],
				 arrol:[''],
			     ind:0,
				
			}
		},
		methods: {
			login:function(){
				console.log('1111',this.$request.baseurl)
				let that=this 
				/* uni.scanCode({
				    success:function(res) { 
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.oname=res.result 
						console.log('1111',that.$request.baseurl) */
					 	that.$request.request('/api/materialTransfer/nonStockInquire',{
						baseEntry: '47130',
						baseline: '',
						disNum: '0B01',
						doctype: '40', 
						itemCode:'10629160'	  
						},'post','application/json').then(res => {
                            console.log('查询成功',res.data);
							that.array=res.data.data;
							that.xname=that.array[0].itemCode
							console.log('查询成功that.array[0]',that.array[0].ol);
							console.log('查询成功that.array[1]',that.array[1].ol);
							
                         }) 
				 /*   },
				
				 }) */
			},
			loginn:function(){
				let that=this
				uni.scanCode({
				    success:function(res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						that.arr=res.result 		
				        console.log('1111',that.$request.baseurl)
						that.$request.request('/api/materialTransfer/nonStockInquire',{
						baseEntry: '47130',
						baseline: '',
						disNum: '0B01',
						doctype: '40', 
						itemCode:'10629160'	  
						},'post','application/json').then(res => {
				            console.log('查询成功',res.data);  
							that.arrol=res.data.data 
							//扫码的结果与后台的数据对比
							var j=0
							for(var i=0;i<res.data.data.length;i++){
								if( that.arr == that.arrol[i].ol){
									that.array= that.arrol
									console.log("相等2",that.array); 
									j=j+1  
								} else {
									console.log("不相等");
								} 
							}  
							console.log('是否有相等的次数:',j) 
							if(j=0){
								console.log('是否有相等的次数:',j)
								uni.showToast({
									icon: 'none',
									title: '无次对应数据',
								});
							}
							
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
			ClearButton:function(){
			
			},
			ConfirmButton:function(){
				let that=this	
				that.$request.request('/api/materialTransfer/nonStock',{
						baseEntry: '47130',
						baseline: '',
						disNum: '0B01',
						doctype: '40', 
						itemCode:'10629160',
						olocation:'',
						qty:'',
						tlocation:'',
						uids:'',
						wzbs:'',						   
						},'post','application/json').then(res => {
                            console.log('查询成功',res.data);
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
		},
		/* etextarea:: function(event) {
			console.log("eInput输出的是：", event.target.value)
			this.inputValue = event.target.value
		}, */
		 bindPickerChange: function (e) {
		    console.log('picker发送选择改变，携带值为', e.detail.value)
		   this.ind=e.detail.value
		 
		  },
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
	.avater2 {
		margin-top: -56rpx;
		margin-left: 510rpx;
	}
	.avater2 .img {
		width: 50rpx;
		margin-top:0rpx;
	
	}
	.avater .img {
		width: 50rpx;
		margin-top:0rpx;
	
	}
	
	.name{
		font-size:22px;
	}
	.nameTips2{
		margin-right: 525rpx;
		font-size: 15px;
	}
	.uni-input {
		margin-top: -40rpx;
		margin-left:-40rpx;
		
		font-size: 15px;
	
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
		margin-top: 30rpx;
		margin-left: 50rpx;
	}

</style>
