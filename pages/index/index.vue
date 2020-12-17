<template>
	<view>
	<view class="choose"style="color: #3F536E;">用户界面选择</view>
	<view class="choo">
	<navigator url='../singly-move/singly-move' hover-class='none'>
		<text>非库存转移界面----------7-1</text>
		</navigator>
	</view>
	<view class="choo"><navigator url='../singly-movee/singly-movee' hover-class='none'>
		<text>库存转移界面------------7-2</text>
		</navigator></view>		
	<view class="choo"><navigator url='../scan/scan' hover-class='none'>
		<text>非库存批量转移界面-----7-3</text>
		</navigator></view>
	<view class="choo"><navigator url='../scan-more/scan-more' hover-class='none'>
		<text>库存批量转移界面-------7-4</text>
		</navigator></view>
	</view>
</template>

<script>
	export default {
		}

</script>

<style>
	.choo{
		margin-top: 50rpx;
	    display: flex;
	   justify-content: center;
	   align-items: center; 
	    text-align: left;

		/* display: inline-block;
		text-align: left; */
		color: #3F536E;
	}
	.choose{
		margin-top: 70rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 60rpx;
	}
</style>
