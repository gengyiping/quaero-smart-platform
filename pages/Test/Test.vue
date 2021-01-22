<template>
	<u-form :model="form" ref="uForm"style="margin-left: 50rpx;">
		<uni-view  class="name">按料号计划到料</uni-view>
			<u-form-item  label="代号" >
				<u-input v-model="form.name" />
				</u-form-item>
			<u-form-item label="料号"><u-input v-model="form.intro" /></u-form-item>
			<u-form-item label="业员"><u-input v-model="form.sex"  /></u-form-item>
			<u-form-item label="时间">
				<u-calendar v-model="show" :mode="mode"></u-calendar>
		        <u-button @click="show = true">请选择日期</u-button>
				 <uni-view>-</uni-view>
				<u-calendar v-model="show" :mode="mode"></u-calendar>
				<u-button @click="show = true">请选择日期</u-button> 
				</u-form-item>
		
			
			<u-form-item >
				<u-radio-group v-model="radio">
					<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			
			
			
		</u-form-item>
			<u-form-item><u-button type="primary">清空</u-button>
			<u-button type="primary">返回</u-button>
			<u-button type="primary">查询</u-button></u-form-item>
			
		</u-form>
		
</template>

<script>
export default {
	data() {
		return {
			show: false,
			mode:'date',
			form: {
				name: '',
				intro: '',
				sex: ''
			},
			
			radioList: [
				{
					name: '采购订单未交',
					disabled: false
				},
				{
					name: '生产订单未交',
					disabled: false
				}
			],
			radio: '',
			switchVal: false
		};
	}
};
</script>


<style>
.name{
	margin-top: 50rpx;
    display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50rpx;
	font-size: 16px;
}
</style>
