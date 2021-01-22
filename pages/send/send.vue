<template>
	<u-form :model="form" ref="uForm" style="margin-left: 50rpx;" label-width=170>
		<uni-view class="name">收料确认查询输入</uni-view>
		<u-form-item label="料号">
			<u-input v-model="form.name" />
		</u-form-item>
		<u-form-item label="供应商">
			<u-input v-model="form.staff" />
		</u-form-item>

		<u-form-item label="收料日期">
			<u-calendar v-model="show" :mode="mode" @change="change" max-date="2022-12-30"></u-calendar>
			<!-- <u-button ref = "button2" style="margin-left: 3rpx;" @click="show = true">请选择日期范围</u-button>-->
			<u-button style="margin-left: 3rpx;" @click="show = true">{{dateBtnText}}</u-button>
		</u-form-item>
		<u-form-item>
			<u-button type="primary" @click="qingk">清空</u-button>
			<u-button type="primary">在途未交查询</u-button>
			<u-button type="primary">收料确认查询</u-button>
		</u-form-item>

	</u-form>

</template>

<script>
	export default {
		data() {
			return {
				dateBtnText: "请选择日期范围",
				show: false,
				mode: 'range',
				form: {
					name: '',
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
				console.log(e, e.startDate, e.endDate);
				// this.$refs.button2.$el.innerText=e.startDate+'-'+e.endDate; 
				this.dateBtnText = e.startDate + '-' + e.endDate;
				// console.log(11111,this.$refs.button2.$el.innerText);

			},
			qingk:function(){
				this.form.staff=''
				this.form.name=''
				this.dateBtnText='请选择日期范围'
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
