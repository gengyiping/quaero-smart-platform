<template>
	<view class="container">
		<text class="name">7-1:转移界面</text><br><br>
		<view class="machine-name">
			<text class="nameTips">物料条码:</text>
			<input name="name" focus="true" placeholder="扫码:料号+批号+单据条码" />
		</view><br>
		<view class="machine-name">
			<text class="nameTips">原 位 置:</text>
			<input name="name" focus="true" placeholder="扫码带入" />
		</view><br>

		<view class="machine-name-3">
			<text class="nameTips">目 标 位:</text>
			<input name="name" focus="true" placeholder="扫码带入" />
		</view><br>


		<view>
			<radio-group class="depict" @change="radioChange">
				
				<label class="radio" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
				
			</radio-group>
		</view><br>




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
				items:[
					{
					value:'CHN',
					name:'中国',
					checked:'true'
				},
				{
					value:'USA',
					name:'美国',
				},
				],
				 current: 0
			}
			
		},
		methods: {
            radioChange: function(evt) {
              for (let i = 0; i < this.items.length; i++) {
				  console.log("用户输入的是:",this.items[i].value)
                if (this.items[i].value === evt.target.value) {
                    this.current = i;
					console.log("用户输入的是id号是:",this.current)
                    break;
                }
            }
<<<<<<< HEAD
        },
		login:function(e){
			uni.scanCode({
			    scanType: ['barCode'],
			    success: function (res) {
			        console.log('条码类型：' + res.scanType);
			        console.log('条码内容：' + res.result);
			    }
			});
		}
=======
        }
>>>>>>> d40310b839152528d9ba4f54c6f15a5e6b1171c7
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
