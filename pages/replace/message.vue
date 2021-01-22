<template>

	<view class="uni-form-item uni-column">
		<view class="title" style="margin-left: 50rpx;margin-top: 50rpx;font-size: 32rpx;">收料确认方式（至少勾选一种方式）：</view><br>
		<checkbox-group class="uni-list" @change="checkboxChange" style="margin-left: 50rpx;">

			<view class="machine-name" style="margin-top: 10rpx;">
				<text class="nameTips">物理位置:</text>
				<input @input="hInput" v-model="mname" focus="true" placeholder="扫码输入(必填)" value="mname" />
				<view class="avater">
					<image @click="logine" class="img" src="../../static/scan.png" mode="widthFix"></image>
				</view>
			</view><br>


			<view class="uni-list-cell uni-list-cell-pd">
				<checkbox value="1" :checked="isChecked1" class="checkbox-3" style="font-size: 30rpx;">采购单位点数确认</checkbox>
			</view>

			<view class="machine-name" style="margin-top: 10rpx;">
				<text class="nameTips">采购单位:</text>
				<input @input="oInput" v-model="oname" placeholder="请输入采购单位" value="oname" />
			</view><br>

			<view class="uni-list-cell uni-list-cell-pd">
				<checkbox value="2" :checked="isChecked2" class="checkbox-3" style="font-size: 30rpx;">称重确认</checkbox>
			</view>

			<view class="machine-name" style="margin-top: 10rpx;">
				<text class="nameTips">重量填写:</text>
				<input @input="Input" v-model="nname" placeholder="请输入物料重量" value="nname" />
				<view class="avater">
					<image @click="weight" class="img" src="../../static/weight.png" mode="widthFix"></image>
				</view>
			</view>
			<br>

			<view class="uni-list-cell uni-list-cell-pd">
				<checkbox value="3" :checked="isChecked3" class="checkbox-3" style="font-size: 30rpx;">包装点数确认</checkbox>
			</view>

			<view class="machine-name" style="margin-top: 10rpx;">
				<text class="nameTips">点数填写:</text>
				<input @input="eInput" v-model="ename" placeholder="请输入包装点数" value="ename" />
			</view><br>


			<view class="uni-list-cell uni-list-cell-pd">
				<checkbox value="4" :checked="isChecked4" class="checkbox-3" style="font-size: 30rpx;">拍照确认</checkbox>
			</view>
			<view style="margin-left: -10rpx;">
				<u-upload :action="action" :file-list="fileList" max-count="3" ref="uupload"></u-upload>
			</view><br>


			</u-form-item>
			<u-form-item>
				<u-button @click="qingk" type="primary">清空</u-button>
				<u-button type="primary">打印标签</u-button>
				<u-button type="primary">确定</u-button>
			</u-form-item>
		</checkbox-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: '',
				fileList: [],
				oname: '',
				nname: '',
				ename: '',
				mname: '',
				isChecked1: false,
				isChecked2: false,
				isChecked3: false,
				isChecked4: false,

				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				value: 'orange',
			};
		},
		methods: {
			checkboxChange: function(e) {
				console.log("22---->", e)
				console.log("22---->", e.detail.value)
				// console.log("22---->",e.detail.value.length)
				// console.log("22---->",e.detail.value[e.detail.value.length-1])
				// let boxVal = e.detail.value[0];
				// if("checkBox1" == boxVal){
				// 	// this.isChecked1 = !this.isChecked1;
				// 	this.isChecked1 = true;
				// } else if("checkBox2" == boxVal){
				// 	// this.isChecked2 = !this.isChecked2;
				// 	this.isChecked2 = true;
				// }else if("checkBox3" == boxVal){
				// 	// this.isChecked2 = !this.isChecked2;
				// 	this.isChecked3 = true;
				// }else if("checkBox4" == boxVal){
				// 	// this.isChecked2 = !this.isChecked2;
				// 	this.isChecked4 = true;
				// }
				var values = e.detail.value;

				if (values.includes("1")) {
					this.isChecked1 = true;
					console.log(this.isChecked1)
				} else {
					this.isChecked1 = false;
				}

				if (values.includes("2")) {
					this.isChecked2 = true;
				} else {
					this.isChecked2 = false;
				}
				if (values.includes("3")) {
					this.isChecked3 = true;
				} else {
					this.isChecked3 = false;
				}

				if (values.includes("4")) {
					this.isChecked4 = true;
				} else {
					this.isChecked4 = false;
				}
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
				console.log("eInput输出的是：", event.target.value)
				this.ename = event.target.value
			},
			hInput: function(event) {
				console.log("hInput输出的是：", event.target.value)
				this.mname = event.target.value
			},
			logine: function() {
				let that = this
				uni.scanCode({
					success: function(res) {
						//console.log('条码类型：' + res.scanType);
						// console.log('条码内容：' + res.result);
						that.mname = res.result
					},
				})
			},
			weight: function() {
				console.log("11111____>", e)
			},
			qingk: function() {
				console.log("11111777")
				this.isChecked1 = false;
				this.isChecked2 = false;
				this.isChecked3 = false;
				this.isChecked4 = false;
				this.$refs.uupload.clear()
				this.nname = ''
				this.ename = ''
				this.oname = ''
				this.mname = ''
			}

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
