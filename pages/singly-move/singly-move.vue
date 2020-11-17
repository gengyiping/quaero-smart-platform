<template>
	<view class="container">
		<text class="name">7-1:转移界面</text><br><br>
		<view class="machine-name">
			<text class="nameTips">物料条码:</text>
			<input @input="oInput" v-model="oname" focus="true" placeholder="扫码:料号+批号+单据条码" value="oname"/>
		</view><br>
		<view class="machine-name">
			<text class="nameTips">原 位 置:</text>
			<input @input="nInput" name="nname" focus="true" placeholder="扫码带入" value='nname' />
		</view><br>

		<view class="machine-name-3">
			<text class="nameTips">目 标 位:</text>
			<input @input="eInput" name="ename" focus="true" placeholder="扫码带入" value='ename' />
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
			inputValue: '',
				 current: 0,
				 oname:''
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
	.name{
		font-size:22px;
	}
	.nameTips{
		font-size: 15px;
	}
	.machine-name input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 70%;
	  margin-left: 70px;
	  margin-top: -25px;
	}
	.machine-name-3 input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 70%;
	  margin-left:70px;
	  margin-top:-25px;
	}
	.machine-name-5 input {
	  border-bottom: 1px solid rgb(2, 2, 2);
	  width: 70%;
	  margin-left:70px;
	  margin-top:-25px;
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		margin-top: 10px;
		
		
	}
	.button{
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  width: 100%;
		  height: 46px;
		  margin-left: 0px;
		  background-color: #00a0e9;
		  color: #fff;	
		  margin-top: 30px;
	}
	.butt{
		margin-top: -220px;
	margin-left:230px;
	
	}
	.button-clear{
		margin-top: 80PX;
		width: 100px;
		height: 46px;
		background-color: #00a0e9;
		color: #fff;	
	}
	.button-confirm{
		margin-top: 20PX;
		width: 100px;
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
	 width: 70%;
	/*  padding-left: 20px; */
	  margin-top: 10px	
	}

</style>
