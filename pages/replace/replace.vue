<template>
	<u-form :model="form" ref="uForm" style="margin-left: 50rpx;" label-width="190">
		<uni-view class="name">按料号确认收料</uni-view>
		<u-form-item label="料号:">
			<u-input v-model="form.number" />
		</u-form-item>
		<u-form-item label="供应商:">
			<u-input v-model="form.staff" />
		</u-form-item>

		<u-form-item label="计划到料日期:">
			<u-calendar v-model="show" :mode="mode" @change="change" max-date="2022-12-30"></u-calendar>
			<u-button style="margin-left: 3rpx;" @click="show = true">{{datebtn}}</u-button>

		</u-form-item>

		<u-form-item label="业务员:">
			<u-input v-model="form.name" />
		</u-form-item>




		</u-form-item>
		<u-form-item>
			<u-button @click="qingk" type="primary">清空</u-button>
			<u-button @click="nolook" type="primary">在途未交查询</u-button>
			<u-button @click="yeslook" type="primary">计划到料查询</u-button>
		</u-form-item>
	</u-form>

</template>

<script>
	export default {
		data() {

			return {
				datebtn: "请输入日期范围",
				show: false,
				mode: 'range',
				form: {
					name: '',
					number: '',
					staff: ''
				},

				radioList: [{
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
		},
		methods: {
			change: function(e) {
				//console.log(e, e.result);
				this.datebtn = e.startDate + '-' + e.endDate;
			},
			qingk: function() {
				this.datebtn = "请输入日期范围"
				this.form.name = ''
				this.form.number = ''
				this.form.staff = ''
			},
			yeslook: function() {
				if (this.form.number == '' && this.form.staff == ''  && this.datebtn != '请输入日期范围') {
					uni.navigateTo({
						//按时间
						url: '../replace/replace-one'
					})
				} else if (this.form.number != '' && this.form.staff == ''  && this.datebtn == '请输入日期范围') {
					uni.navigateTo({
						//按料号
						url: '../replace/replace-two'
					})
				} else if (this.form.number == '' && this.form.staff != ''  && this.datebtn != '请输入日期范围') {
					uni.navigateTo({
						//供应商+时间
						url: '../replace/replace-three'
					})
				}else if (this.form.number != '' && this.form.staff != ''  && this.datebtn == '请输入日期范围') {
					uni.navigateTo({
						//供应商+料号
						url: '../replace/replace-four'
					})
				}else if (this.form.number != '' && this.form.staff != ''  && this.datebtn != '请输入日期范围') {
					uni.navigateTo({
						//供应商+时间+料号
						url: '../replace/replace-five'
					})
				}

			},
			nolook:function(){
				if (this.form.number != '' && this.form.staff == '') {
					uni.navigateTo({
						//按料号
						url: '../replace/replace-six'
					})
				} else if (this.form.number != '' && this.form.staff != '') {
					uni.navigateTo({
						//按料号+供应商
						url: '../replace/replace-seven'
					})
				} 
			}
		}
	};
</script>


<style>
	.name {
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 50rpx;
		font-size: 16px;
	}
</style>
