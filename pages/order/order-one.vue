//按订单-未交查询结果
<template>
	<view class="container">
		<view class="cont" style="color:#007AFF;">查询条件如下：</view>
		<view class="cont">时间：{{options.arrivalDateAfter}}-{{options.arrivalDateBefore}}</view>
		<view class="cont">供应商代号：{{options.cardCode}}</view>
		<view class="cont">料号：{{options.itemCode}}</view>
		<view class="cont">订单类型：
			<view v-if="options.orderType==0">
				<view class="flex"> 采购订单未交</view>
			</view>
			<view v-else="options.orderType==1">
				<view class="flex"> 生产订单未交</view>
			</view>
		</view>
		<view class="cont">业务员：{{options.salesmanName}}</view><br>
		<view class="cont" style="color: #007AFF;">显示结果如下：</view>
		<!-- <scroll-view class="scroll-view" scroll-y="true" > -->
		<!-- 每项选择 -->


		<checkbox-group @change="changeCheck" class="check">

			<view class="checkview" v-for="(item, index) in content" :key="item.value">
				<view class="oone" v-show="item.showflag">
					<view class="oone">料号：{{item.itemCode}}</view>
					<view class="oone">名称规格：{{item.dscription}}</view>
					<view class="oone">缺料信息：</view>
					<view class="oone">缺料日期：{{item.zzql}}</view>
					<view class="oone">交付模式：{{item.pmcZD}}</view>
					<view class="oone">缺料数量：{{item.jyjfQTY}}</view>
				</view>
				<checkbox :value="String(index)" :checked="checkedArr.includes(String(item.value))" :class="{'checked':checkedArr.includes(String(item.value))}"></checkbox><br>
				<view class="one" @click="chview(index)">

					<view class="oone">订单号：{{item.docEntry}}</view>
					<view class="oone">订单行号：{{item.lineNum}}</view>
					<view class="oone">预交日期：{{item.shipDate}}</view>
					<view class="oone">未交数量：{{item.unpaidQuantity}}</view>
					<view class="oone">缺料数：{{item.unpaidQuantity}}</view>
					<view class="oone">要求到料日期：{{item.unpaidQuantity}}</view>
					<view v-if='item.plannedQty == undefined'>
					</view>
					<view v-else='item.plannedQty == !undefined'>
						<view>
							<view class="oone" style="color: #007AFF;">计划到料数：{{item.plannedQty}}</view>
							<view class="oone" style="color: #007AFF;">计划到料日期：{{item.dueDate}}</view>
						</view>
					</view>
				</view>
			</view>


		</checkbox-group>
		<!-- </scroll-view> -->

		<!-- 全选 -->
		<!-- <checkbox-group name="allCheck" @change="changeAll">
			<label>
				<checkbox :value="allCheck.value" :checked="allCheck.checked" /><text>{{allCheck.name}}</text>
			</label>
		</checkbox-group> -->


		<view class="nav">
			<checkbox-group @change="changeAll">
				<label style="position:fixed ;
		bottom: 20px;margin-left: 50rpx;">
					<checkbox value="all" :class="{'checked':allChecked}" :checked="allChecked?true:false"></checkbox> 全选
				</label>
			</checkbox-group>
			<button class="button-c " @click="loginsure">提交计划到料</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				submitData: [],
				arr: [],
				array: [],
				isShow: false,
				index: 0,
				miy: '',
				conflag: true,
				checkedArr: [], //复选框选中的值
				allChecked: false, //是否全选
				/* allCheck: {
					name: '全选',
					value: 'all',
					checked: false
				}, */
				content: [{}],
				itemVal: '',
				itemValarr: [],

			}
		},
		methods: {
			// 全选
			changeAll: function(e) {
				console.log(e)
				let chooseItem = e.detail.value;


				
				 this.checkedArr=chooseItem
				 console.log("checkedArr=====", this.checkedArr)
				 this.checkedArr.push("all");
				 if (chooseItem[0] == 'all') {
					 this.allChecked = true; 
					for (let item of this.content) {
						let itemVal = String(item.value);
						
						if (!this.checkedArr.includes(itemVal)) {
							this.checkedArr.push(itemVal);
							console.log("quanxuan=====", this.checkedArr)
							
						}
					}
				} 
			/* 	if (chooseItem[0] == 'all') {
					this.allChecked = true;
					console.log("content=====", this.content)
					for (var i = 0; i < this.content.length; i++) {

						if (this.content[i].plannedQty != undefined) {
							console.log("content=====", this.content[i], i)
							this.itemVal = String(i);
							console.log("itemVal=====", this.itemVal)
							this.checkedArr.push(this.itemVal)

						}
					}

					console.log("checkedArr=====", this.checkedArr)
				} else {

					this.allChecked = false;
					this.checkedArr = [];
					console.log("取消全选=====", this.checkedArr)
				} */
			},
			// 多选
			changeCheck: function(e) {
				console.log("选中的是", e.detail.value)
				this.checkedArr = e.detail.value;
				// 如果选择的数组中有值，并且长度等于列表的长度，就是全选
				if (this.checkedArr.length > 0 && this.checkedArr.length == this.content.length) {

					this.allChecked = true;
				} else {
					this.allChecked = false;
				}
			},
			chview: function(index) {
				console.log('66666', index)
				uni.navigateTo({
					url: '../order/order-two?index=' + index + '&lmessage=' + this.content[index].itemCode + "&mmessage=" + this.content[
							index].dscription + "&jfmessage=" + this.content[index].pmcZD + "&qlmessage=" + this.content[index].zzql +
						'&wmessage=' + this.content[index].docEntry + "&jmessage=" + this.content[index].lineNum +
						'&qmessage=' + this.content[index].shipDate + "&ymessage=" + this.content[index].unpaidQuantity +
						'&arrivalDateAfter=' + this.arrivalDateAfter + '&arrivalDateBefore=' + this.arrivalDateBefore + "&cardCode=" +
						this.cardCode + '&itemCode=' + this.itemCode + "&orderType=" + this.orderType + "&salesmanName=" + this.salesmanName
				})
			},
			loginsure: function(e) {
				console.log("确定：：", this.checkedArr)
				for (let i = 0; i < this.checkedArr.length; i++) {
					let submitObj = {};
					submitObj.docEntry = this.content[this.checkedArr[i]].docEntry;
					submitObj.lineNum = this.content[this.checkedArr[i]].lineNum;
					console.info("==submitObj==", submitObj)
					this.submitData.push(submitObj);
				}
				console.info("==submitData==", this.submitData)
				var that = this
				that.$request.request('/api/materialPlan/unpaidByOrder', that.submitData, 'PUT', 'application/json').then(res => {
					console.log('提交成功');
					uni.showToast({
						icon: 'none',
						title: '提交成功',
					});
					//数据暂时没有删除，这边先清空处理
					that.submitData = []
				})
			},
			onLoad: function(options) {
				console.log("1234561111")
				console.log("进入此界面的options", options)
				this.arrivalDateAfter = options.arrivalDateAfter
				this.arrivalDateBefore = options.arrivalDateBefore
				this.cardCode = options.cardCode
				this.itemCode = options.itemCode
				this.orderType = options.orderType
				this.salesmanName = options.salesmanName
				/* console.log("新的数组1:", this.array)
				this.array = this.array.concat(options)
				console.log("新的数组2:", this.array)
				if (this.array[0].enchangeid == undefined) {
					console.log("=options=", options)
				} else {
					this.content[this.array[0].enchangeid - 1].isShow = true
					this.content[this.array[0].enchangeid - 1].name2 = options.numid
					this.content[this.array[0].enchangeid - 1].name = options.dateid
				} */
				var that = this
				that.$request.request('/api/materialPlan/unpaidListByOrder', {
					arrivalDateAfter: options.arrivalDateAfter,
					arrivalDateBefore: options.arrivalDateBefore,
					cardCode: options.cardCode,
					itemCode: options.itemCode,
					orderType: options.orderType,
					salesmanName: options.salesmanName,
				}, 'POST', 'application/json').then(res => {
					console.log('跳转界面确定成功', res.data.data);
					that.content = res.data.data
					console.log('初次赋值后的数据显示', that.content)
					var conitem = that.content
					var orde = ''
					for (var i = 0; i < conitem.length; i++) {
						if (conitem[i].itemCode == orde && orde != '') {
							let key = "showflag";
							let value = false
							conitem[i][key] = value;
						} else {
							let key = "showflag";
							let value = true
							conitem[i][key] = value;
						}
						orde = conitem[i].itemCode
					}
					that.content = conitem
					console.log('赋值后的数据显示', that.content)
					console.log("123456", that.content.length)
				})
			}
		},
	}
</script>
<style>
	.nav {
		width: 100%;
		height: 60px;
		background: #FFFFFF;
		margin-left: -50rpx;
		position: fixed;
		bottom: 0px;
	}

	.container {
		margin-top: 60rpx;
		margin-left: 50rpx;


	}

	.cont {
		margin-bottom: 10rpx;
		font-size: 15px;
	}

	.one {
		margin-top: -46rpx;
		margin-left: 60rpx;
	}

	.button-c {
		margin-top: -95rPX;
		width: 260rpx;
		height: 65rpx;
		background-color: #00a0e9;
		color: #fff;
		display: inline-block;
		margin-left: 350rpx;
		font-size: 15px;
		text-align: center;
		position: fixed;
		bottom: 10px;


	}

	.oone {
		margin-bottom: 10rpx;
		word-break: break-all;
	}

	.check {
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
	}

	.checkview {
		border-bottom: 1px solid rgb(211, 213, 222);
		width: 92%;
		margin-bottom: 25rpx;
		margin-top: -10rpx;
	}

	.flex {
		margin-top: -35rpx;
		margin-left: 150rpx;
	}

	/* page {
		background-color: #e6dcf4;
	} */
</style>
