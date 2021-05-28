<template>
	<uni-collapse accordion="true">
	    <uni-collapse-item title="00---物理位置转移">
	        <view style="padding: 30rpx;">
				<navigator url='../singly-move/singly-move' hover-class='none'>
	            物理位置转移-非库存物料
				</navigator>
	        </view>
			<view style="padding: 30rpx;">
				<navigator url='../singly-movee/singly-movee' hover-class='none'>
			    物理位置转移-库存物料
				</navigator>
			</view>
			<view style="padding: 30rpx;">
				<navigator url='../scan/scan' hover-class='none'>
			    物理位置转移-非库存批量物料
				</navigator>
			</view>
			<view style="padding: 30rpx;">
				<navigator url='../scan-more/scan-more' hover-class='none'>
			    物理位置转移-库存批量物料
				</navigator> 
			</view>
	    </uni-collapse-item>
       
		 <uni-collapse-item title="01---计划到料通知">
		    <view style="padding: 30rpx;">
				<navigator url='../order/order' hover-class='none'>
		        未交查询输入
				</navigator>
		    </view>
		</uni-collapse-item>
	   
		<uni-collapse-item title="02---到料收料确认">
		    <view style="padding: 30rpx;">
				<navigator url='../receivingOrder/receivingOrder-one' hover-class='none'>
		        计划到料查询输入
				</navigator>
		    </view>
<<<<<<< HEAD
			<!-- <view style="padding: 30rpx;">
=======
			<view style="padding: 30rpx;">
>>>>>>> 4c26531c34287eda4d32a20ecdb3e15fa3885748
				<navigator url='../receivingOrder/queryMessage' hover-class='none'>
			    到料确认信息输入
				</navigator>
			</view>
			<view style="padding: 30rpx;">
			    到料标签模板
<<<<<<< HEAD
			</view> -->
=======
			</view> 
>>>>>>> 4c26531c34287eda4d32a20ecdb3e15fa3885748
		</uni-collapse-item>
	<uni-collapse-item title="05---送检">
	    <view style="padding: 30rpx;">
			<navigator url='../send/send' hover-class='none'>
	        送检-收料确认查询输入
			</navigator>
	    </view>
		<view style="padding: 30rpx;">
		    送检-收料确认按日期
		</view>
		<view style="padding: 30rpx;">
		    送检-收料确认查询结果-按供应商代号+料号
		</view>
		<view style="padding: 30rpx;">
		    送检-订单信息输入
		</view>
		<view style="padding: 30rpx;">
		    送检-料号信息输入
		</view>
		<view style="padding: 30rpx;">
		    送检-单据形成信息确认
		</view>
	</uni-collapse-item> 
	</uni-collapse>
 </template>
 
 <script>
 	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
 	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
 	import uniListitem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
 	    components: {
			uniCollapse,
		    uniCollapseItem,
			uniListitem
		}, 
		
		methods:{
			change(arr){
				console.log(arr)
			}
		}
		
		
 	}
    
 </script>