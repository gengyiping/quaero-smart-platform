//按日期查询
<template>
	<view class="container">
		<view class="cont" style="font-size: 15px;">显示查询条件：{{showdate}}</view><br>
		
		<view class="kon" style="font-size: 15px;">显示查询结果如下：</view>
		<view class="kon">送货的供应商名称有：{{num}}个</view>
		<view class="kon">代号：{{number}}</view>
		<view class="kon">供应商名称：{{name}}</view>
		<view class="kon">送货的物料有：{{material}}种</view>
		<view class="kon">料号：{{manum}}</view>
		<view class="kon">名称：{{manumber}}</view>
		<view class="kon">计划到料日期：{{planmaterial}}</view>
		<view class="kon">缺料数：{{nomaterialnum}}</view>
		<view class="kon">缺料日期：{{materialdate}}</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showdate: '2020-01-21-2-20-01-22',
				num: '5',
				number: '0123456789',
				name: '易格斯',
				material: '6',
				manum:'123456',
				manumber:'kaishi',
				planmaterial:'2020-01-21',
				nomaterialnum:'9',
				materialdate:'2020-01-22',
				
			}
		},
		methods: {

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
	.kon{
		margin-top: 20rpx;
	}
	
</style>
