<template>
	<view class="container">
		<text class="name">7-2:库存转移界面</text><br><br>
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
			<radio-group name="depicttype" class="depict1" @change="radioChange">
				<label class="radio">
					<radio value="true" checked="true" />全部移动
				</label>
				<label>
					<radio value="false" />部分移动
				</label>
			</radio-group>
		</view>
		<br>
		<view class="machine-name-5">
			<text class="num">移动数量: {{array[index].qty}}</text>
			<input name="name" focus="true" placeholder="" />
		</view>
		<view class="uni-textarea">
			<view class="depict">
				<view v-if="isShow">
					<view>名称规格：{{array[index].itemName}}</view><br>
					<view>单据数量：{{array[index].docNum}}</view><br>
					<view>操作员：{{array[index].creator}}</view><br>
					<view>操作时间：{{array[index].docDate}}</view>
				</view>
			</view>
			<textarea focus="true" placeholder-style="color:#868686" placeholder="" value='' />

			</view><br>
		<view class="but"> 
			<button class="button-c"  @click="ClearButton">清空</button>
			<button class="button-c "  @click="ClearButton">复制</button>
			 <button class="button-c "  @click="ClearButton">异常</button>
			<button class="button-c "  @click="ConfirmButton">确认</button>  
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
				 xname:'',
				 array:[''],
				 index: 0,
				 arr:[''],
				 arrol:[''],
			     ind:true,
				
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
						console.log("分割后的数据:",that.oname.substring(0,8))
						console.log("分割后的数据:",that.oname.substring(8,12))
						console.log("分割后的数据:",that.oname.substring(12,14))
						console.log("分割后的数据:",that.oname.substring(14,20))
						console.log("分割后的数据:",that.oname.substring(20,23)) */
						/* var listname=that.oname.split('-')   
						console.log("分割出来的数据:",listname)
						console.log('1111',that.$request.baseurl)  
						console.log("分割出来的数据:",listname[0]) */
					  	that.$request.request('/api/materialTransfer/stockInquire',{
						/* baseEntry: that.oname.substring(14,20),
						baseline: that.oname.substring(20,23),
						disNum: that.oname.substring(8,12),
						doctype: that.oname.substring(12,14),   
						itemCode:that.oname.substring(0,8) */
						baseEntry: '',
						baseline: '',
						disNum: '0B02',
						doctype: '',    
						itemCode:'51608001'  
						},'post','application/json').then(res => {
                            console.log('查询成功',res.data);  
							that.isShow = true;
							
							that.array=res.data.data; 						
                         }) 
				 /*   },
				 }) */
			},
			loginn:function(){
				console.log("123456:",this.oname)
				if(this.oname==''){
					uni.showToast({
						icon: 'none',
						title: '请先扫码-物料条码',
					});
				} else{
					var that=this
					uni.scanCode({ 
					    success:function(res) {  
					        console.log('条码类型：' + res.scanType);
					        console.log('条码内容：' + res.result);
							that.arr=res.result 		
					        /* console.log('1111',that.$request.baseurl)
							console.log("55556",that.array.length) */
					    for(var i=0;i<that.array.length;i++){
							console.log("55556",that.array[0].ol)  
							console.log("555566",that.arr)
						   if( that.arr == that.array[i].ol){
							   that.index=i 
						} else {
							console.log("不相等");
						} 
					} 
				     }
				   })
				  }
				  
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
			
			ConfirmButton:function(){
				var that=this	
				/* console.log("baseEntry1",that.oname) 
				console.log("baseEntry1",that.array[that.index].ol)  
				console.log("baseEntry2",that.ename) */
				console.log("baseEntry3",that.ind) 
				/* var listname=that.oname.split('-')
				console.log("分割出来的数据:",listname)  
				console.log('1111',that.$request.baseurl)  
				console.log("分割出来的数据:",listname[0]) */
				that.$request.request('/api/materialTransfer/stock',{
						baseEntry: that.oname.substring(14,20),
						baseline: that.oname.substring(20,23),
						disNum: that.oname.substring(8,12),
						doctype: that.oname.substring(12,14),    
						itemCode:that.oname.substring(0,8),	   
						olocation:that.array[that.index].ol,
						qty:that.array[that.index].qty,
						tlocation:that.ename, 
						uids:that.array[that.index].uid,
						wzbs:that.ind,	
						},'post','application/json').then(res => {
                            console.log('查询成功',res.data);
							uni.showToast({
								icon: 'none',
								title: '确定成功', 
							});
                         })
			},
		radioChange:function(e){
			console.log('携带值为', e.target.value)
			this.ind=e.target.value
			console.log('携带值为1', this.ind)
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
		 bindPickerChange: function (e) {
		    console.log('picker发送选择改变，携带值为', e.detail.value)
		   this.index=e.detail.value 
		 
		  },
		}
	}
</script>

<style>
	/* .but{
	  margin-top: -260px;
	    margin-right: 360px;
	
	
	} */
	.depict{
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
		margin-left: 590rpx;
	}
	.avater2 {
		margin-top: -56rpx;
		margin-left: 580rpx;
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
		margin-left:-10rpx;
		
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
		margin-right: 70px;
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

