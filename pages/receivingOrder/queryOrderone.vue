//按日期查询
<template>
	<view class="container">
		<view class="cont" style="font-size: 15px;">显示查询条件：</view>
		<view>计划到料日期：{{options.DateAfter}}-{{options.DateBefore}}</view><br>
		<view class="kon" style="font-size: 15px;">显示查询结果如下：</view>
		<view class="kon">送货的供应商名称有：{{arrayOrder.cardCount}}个</view>
		
		
		<view v-for='(item,index) in Orderlist'>
			<view class="kon">代号：{{Orderlist[index].cardCode}}</view>
			<view class="kon">供应商名称：{{Orderlist[index].cardName}}</view>
			<view class="kon">送货的物料有：{{Orderlist[index].itemCount}}种</view>
			<view style="color: #007AFF;">--------------------------------------------------------</view>
		</view>
		<view v-for='(item,index) in Orderarray'>
			<view class="kon">料号：{{Orderarray[index].itemCode}}</view>
			<view class="kon">名称：{{Orderarray[index].itemName}}</view>
			<view class="kon">计划到料日期：{{Orderarray[index].dueDate}}</view>
			<view class="kon">缺料数：{{Orderarray[index].pmcQty}}</view>
			<view class="kon">缺料日期：{{Orderarray[index].shipDate}}</view>
			<view style="color: #007AFF;">--------------------------------------------------------</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrayOrder: '',
				Orderlist: '',
				Orderarray: '',
			}
		},
		methods: {
			onLoad: function(options) {
				//console.log('OPTIONS',options)
				var that = this
				that.$request.request('/api/materialReceipt/planListByOrder', {
					arrivalDateAfter: options.DateAfter + 'T00:00:00.000',
					arrivalDateBefore: options.DateBefore + 'T00:00:00.000',
					cardCode: '',
					itemCode: '',
					//orderType: options.orderType,
					salesmanName: '',
				}, 'POST', 'application/json').then(res => {
					//console.log("queryOrderone数据显示", res.data.data.dateVos[this.index].list)
					that.arrayOrder = res.data.data
					that.Orderlist = that.arrayOrder.dateVos
					for (var i = 0; i < that.Orderlist.length; i++) {
						console.log("===Orderlist===", that.Orderlist)
						that.Orderarray = that.Orderlist[i].list
						console.log("===Orderarray===", that.Orderarray)
					}

				})
			},
		}
	}
</script>

<style>
	.container {
		margin-top: 50rpx;
		margin-left: 50rpx;

	}

	.cont {
		margin-bottom: 10rpx;
		font-size: 15px;


	}

	.kon {
		margin-top: 20rpx;
	}
</style>
