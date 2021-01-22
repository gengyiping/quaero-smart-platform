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
	    <uni-collapse-item title="01---计划到料-按料号">
	        <view style="padding: 30rpx;">
				<navigator url='../reach/reach-number' hover-class='none'>
	            未交查询输入
				</navigator>
	        </view>
			<!-- <view style="padding: 30rpx;">
				<navigator url='../reach/reach-num' hover-class='none'>
			    到料信息输入-按料号
				</navigator>
			</view> -->
	    </uni-collapse-item>
	    <uni-collapse-item title="02---收料确认-按料号">
	        <view style="padding: 30rpx;">
				<navigator url='../replace/replace' hover-class='none'>
	            计划到料查询输入
				</navigator>
	        </view>
			<!-- <view style="padding: 30rpx;">
				<navigator url='../replace/replace-one' hover-class='none'>
			    计划到料查询结果-按日期
				</navigator>
			</view>
			<view style="padding: 30rpx;">
				<navigator url='../replace/replace-two' hover-class='none'>
			   计划到料查询结果-按料号
			   </navigator>
			</view>
			<view style="padding: 30rpx;">
				<navigator url='../replace/replace-three' hover-class='none'>
			    计划到料查询结果-按供应商代号+日期
				</navigator>
			</view> -->
			<!-- <view style="padding: 30rpx;">
			    计划到料查询结果-按供应商代号+料号
			</view>
			<view style="padding: 30rpx;">
			    计划到料查询结果-按供应商代号+料号+日期
			</view>
			<view style="padding: 30rpx;">
			    无计划到料未交查询结果-按料号
			</view>
			<view style="padding: 30rpx;">
			    无计划到料未交查询结果-按料号+供应商
			</view> -->
			<view style="padding: 30rpx;">
				<navigator url='../replace/message' hover-class='none'>
			    到料确认信息输入
				</navigator>
			</view>
			<view style="padding: 30rpx;">
			    到料标签模板
			</view>
	    </uni-collapse-item>
	<uni-collapse-item title="03---送检">
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