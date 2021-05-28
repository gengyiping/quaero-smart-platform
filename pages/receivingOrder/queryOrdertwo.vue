//按料号
<template>
	<view class="container">
		<view class="cont" style="color:#007AFF;">（料号）查询条件如下：</view>
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

		<view>
		<checkbox-group @change="changeCheck" class="check">
			<view class="checkview" v-for="(item, index) in listitem" :key="item.value">
					<view class="oone" v-show="item.showflag">
					<view class="oone">供应商名称：{{item.cardName}}</view>
					<view class="oone">未交数量总和：{{item.unpaidQuantity}}</view>
					</view>
				<checkbox :value="String(index)" :checked="checkedArr.includes(String(item.value))" :class="{'checked':checkedArr.includes(String(item.value))}"></checkbox><br>
				<view class="one" @click="chview(index)">
					<view class="oone">订单号：{{item.baseEntry}}</view>
					<view class="oone">订单行号：{{item.baseLine}}</view>
					<view class="oone">版本：{{item.cardCode}}</view>
					<view class="oone">预交日期：{{item.shipDate}}</view>
					<view class="oone">未交数量：{{item.unpaidQuantity}}</view>
					<view class="oone">计划到料数：{{item.plannedQty}}</view>
					<view class="oone">计划到料日期：{{item.shipDate}}</view>
					 <view v-if='item.uwlwz == undefined'>
					</view>
					<view v-else='item.uwlwz == !undefined'>
						<view>
							<view class="oone" style="color: #007AFF;">物理位置：{{item.uwlwz}}</view>
							<view class="oone" style="color: #007AFF;">称重信息：{{item.ucz}}</view>
							<view class="oone" style="color: #007AFF;">点数信息：{{item.uds}}</view>
							<view class="oone" style="color: #007AFF;">外包信息：{{item.uwb}}</view>
							<view class="oone" style="color: #007AFF;">图片路径：{{item.ulj}}</view>
						</view>
					</view> 
					
					
					</view>

				
			</view>
		</checkbox-group>
		</view>
		<view class="background">
		   <checkbox-group @change="changeAll" >
			<label >
				<checkbox  value="all" :class="{'checked':allChecked}" :checked="allChecked?true:false"></checkbox> 全选
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
				checkedArr: [], //复选框选中的值
				allChecked: false, //是否全选
				/* allCheck: {
					name: '全选',
					value: 'all',
					checked: false
				}, */
				arraycontent:'',
				content: '',
				listcontent:'',

				listitem:[],

			}
		},
		methods: {
			// 全选
			changeAll: function(e) {
				console.log(e)
				/* for(var int=0;i<this.content.length;i++)
				if(this.content[i].dueDate!=''){
					
				} */
				let chooseItem = e.detail.value;
				console.info("==chooseItem==", chooseItem[0])
				// 全选
				if (chooseItem[0] == 'all') {
					this.allChecked = true;
					for (let item of this.content) {
						let itemVal = String(item.value);
						
						if (!this.checkedArr.includes(itemVal)) {
							this.checkedArr.push(itemVal);
							console.log("quanxuan=====", this.checkedArr)
							
						}
					}
				} else {
					// 取消全选
					this.allChecked = false;
					this.checkedArr = [];
				}
			},
			// 多选
			changeCheck: function(e) {
				console.log(e.detail.value)
				this.checkedArr = e.detail.value;
				// 如果选择的数组中有值，并且长度等于列表的长度，就是全选
				if (this.checkedArr.length > 0 && this.checkedArr.length == this.content.length) {
					/* for(let i=0;i<this.checkedArr;i++){
						if(this.checkedArr[i]==undefined)
					} */
					this.allChecked = true;
				} else {
					this.allChecked = false;
				}
			},
			chview: function(index) {
				console.log('66666', index)
				uni.navigateTo({

					url: '../receivingOrder/queryMessage?index=' + index + '&uid=' + this.listitem[index].uid +'&itemCode=' + this.arraycontent.itemCode
				})
			},
			loginsure:function(index){
				console.log("计划所勾选的数值：：", this.checkedArr)
				for (let i = 0; i < this.checkedArr.length; i++) {
					let submitObj = {};
					submitObj.uid = this.listitem[this.checkedArr[i]].uid;
					
					console.info("==submitObj==", submitObj)
					this.submitData.push(submitObj.uid);
				}
				console.info("==submitData==", this.submitData)
				var that = this
				that.$request.request('/api/materialReceipt/planConfirmedByOrder', that.submitData, 'PUT', 'application/json').then(res => {
					console.log('提交成功');
					uni.showToast({
						icon: 'none',
						title: '提交成功',
					}); 
					//数据暂时没有删除，这边先清空处理
					that.submitData = []
				})
			},
		

		 	/* onShow:function(){
				console.log("11234455666")
				var that = this
				that.listitem=[]
				that.$request.request('/api/materialReceipt/planListByOrder', {
					arrivalDateAfter: '' ,
					arrivalDateBefore: '' ,
					cardCode: '',
					itemCode:that.itemCode,
					salesmanName: '',
				}, 'POST', 'application/json').then(res => {
					console.log('界面刷新确定成功', res.data);
					that.arraycontent = res.data.data
						that.content=that.arraycontent.itemCodeVos
						console.log('content=======数据', that.content)
						for (var k = 0; k < that.content.length; k++) {
							for(var h=0;h<that.content[k].list.length;h++){
							that.listcontent = that.content[k].list[h]
							console.log('listcontent========数据', that.listcontent)
							that.listitem.push(that.listcontent)
							
							}
						}
					
					console.log('listitem========数据', that.listitem)
						})
			}, */

			onLoad: function(options) {
				console.log("==queryOrdertwo==",options)
				this.itemCode=options.itemCode
					 var that = this
					that.$request.request('/api/materialReceipt/planListByOrder', {
						arrivalDateAfter: '' ,
						arrivalDateBefore: '' ,
						cardCode: '',
						itemCode:options.itemCode,
						salesmanName: '',
					}, 'POST', 'application/json').then(res => {

						console.log('onLoad======数据', res.data);
						that.arraycontent = res.data.data
						that.content=that.arraycontent.itemCodeVos
						console.log('content=======数据', that.content)
						for (var k = 0; k < that.content.length; k++) {
							for(var h=0;h<that.content[k].list.length;h++){
							that.listcontent = that.content[k].list[h]
							console.log('listcontent========数据', that.listcontent)
							that.listitem.push(that.listcontent)
							
							}
						}

					console.log('listitem========数据', that.listitem)
					var conitem=that.listitem
					var orde=''
					 for(var i=0;i<conitem.length;i++){
						 if(conitem[i].itemCode==orde&&orde!=''){
							 let key = "showflag";
							 let value = false
						 	conitem[i][key] = value;7
						 }else{
							 let key = "showflag";
							 let value = true
							conitem[i][key] = value;
						 }
						 orde=conitem[i].itemCode
					 } 
					 that.listitem=conitem
					console.log('赋值后的数据显示', that.listitem)
					})
			},
		

			}

		}
	
</script>

<style>

/* 	.background{
		width: 100%;
		height: 60px;
		background:#000000;
		
	} */

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
		height: 75rpx;
		background-color: #00a0e9;
		color: #fff;
		display: inline-block;
		margin-left: 350rpx;
		font-size: 15px;
		text-align: center;
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
		border-bottom: 1px solid rgb(207, 201, 222);
		width: 92%;
		margin-bottom: 25rpx;
	}
	.flex {
		margin-top: -30rpx;
		margin-left: 120rpx;
	}
	/* page {
		background-color: #e6dcf4;
	} */
</style>