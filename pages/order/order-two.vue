<template>
	<u-form :model="form" ref="uForm" style="margin-left: 50rpx;" label-width="190">
		<uni-view class="name">到料信息输入-按料号</uni-view>
		<view v-if="isShow">
			<view class="oone" style="font-size: 15px;color: #007AFF;">已选择信息显示：</view>
			<view class="oone" style="margin-top: 10rpx;">料号：{{options.lmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">名称规格：{{options.mmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">交付模式：{{options.jfmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">缺料日期：{{options.qlmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">订单号：{{options.wmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">订单行号：{{options.jmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">预交日期：{{options.qmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">订单数量：{{options.qmessage}}</view>
			<view class="oone" style="margin-top: 10rpx;">未交数量：{{options.ymessage}}</view><br>
		</view>

		<u-form-item label="计划到料数量:">
			<u-input v-model="form.number" />
		</u-form-item>
		<u-form-item label="计划到料日期:">
			<u-calendar v-model="show" :mode="mode" @change="change" max-date="2022-12-30"></u-calendar>
			<u-button style="margin-left: 3rpx;" @click="show = true">{{date}}</u-button>
		</u-form-item>
		<u-form-item label="到料方式">
			<u-radio-group v-model="value">
				<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
					{{item.name}}
				</u-radio>
			</u-radio-group>

		</u-form-item>
		<u-form-item label="物流信息:">
			<u-input v-model="form.message" />
		</u-form-item>
		</u-form-item>
		<u-form-item>
			<u-button @click="qingk" type="primary">清空</u-button>
			<u-button @click="buttonq" type="primary">确定</u-button>
		</u-form-item>

	</u-form>

</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				changeid: "",
				hang: '',
				dingdan: '',
				show: false,
				mode: 'date',
				form: {
					number: '',
					methods: '',
					message: ''
				},
				list: [{
						name: '快递',
						disabled: false
					},
					{
						name: '物流',
						disabled: false
					},
					{
						name: '专车',
						disabled: false
					},
					{
						name: '其他',
						disabled: false
					}
				],
				value: '快递',
				date: new Date().toISOString().slice(0, 10),
				/* radioList: [{
						name: '采购订单未交',
						disabled: false
					},
					{
						name: '生产订单未交',
						disabled: false
					}
				], */
				radio: '',
				switchVal: false,

				index: 0
			};
		},

		methods: {
			onLoad: function(options) {
				console.log('==options==', options)
				console.log('==options336666==', options.cardCode)
				this.changeid = options.index
				this.hang = options.wmessage
				this.dingdan = options.jmessage
				this.arrivalDateAfter=options.arrivalDateAfter
				this.arrivalDateBefore=options.arrivalDateBefore
				this.cardCode=options.cardCode
				this.itemCode=options.itemCode
				this.orderType=options.orderType
				this.salesmanName=options.salesmanName
			},
			change: function(e) {
				console.log(e, e.result);
				this.date = e.result;
			},
			qingk: function(e) {
				this.form.number = ''
				this.form.methods = ''
				this.form.message = ''
				this.date = new Date().toISOString().slice(0, 10)
			},
			/* 	radioGroupChange: function(e) {
					console.log("用户选择", e)

				}, */
			radioChange(e) {
				this.value = e
				console.log(this.value);
			},
			buttonq: function(e) {
				 var that = this
				that.$request.request('/api/materialPlan/unpaidEditByOrder', {
					dlfs: that.value,
					docEntry: that.hang,
					dueDate: that.date,
					lineNum: that.dingdan,
					plannedQty: that.form.number,
					wlxx: that.form.message,
				}, 'POST', 'application/json').then(res => {
					console.log('到料信息输入数据显示：', res.data);
				}) 
			
				uni.navigateTo({
					url: '../order/order-one?arrivalDateAfter='+this.arrivalDateAfter+'&arrivalDateBefore='+this.arrivalDateBefore+"&cardCode="+this.cardCode+'&itemCode='+this.itemCode+"&orderType="+this.orderType+"&salesmanName="+this.salesmanName
				}) 
			
				/* if(this.date!=''&& this.form.number!=''){
						console.log('计划到料数量',this.date,this.form.number)
						uni.navigateTo({
							url: '../order/order-one'
							 url: '../order/order-one?numid='+this.form.number+'&dateid='+this.date+"&enchangeid="+this.changeid 
						})
					
					} */

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
