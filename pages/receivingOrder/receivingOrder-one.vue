<template>
	<u-form :model="form" ref="uForm" style="margin-left: 50rpx;" label-width="190">
		
		 <uni-view class="name">按订单确认收料</uni-view> 
		<u-form-item label="料号:">
			<u-input v-model="form.number" />
		</u-form-item>
		<u-form-item label="供应商代号:">
			<u-input v-model="form.staff" />
		</u-form-item>
		<u-form-item label="计划到料日期:">
			<u-calendar v-model="show" :mode="mode" @change="change" max-date="2022-12-30"></u-calendar>
			<u-button style="margin-left: 3rpx;" @click="show = true">{{datebtn}}</u-button>
		</u-form-item>
		<u-form-item label="业务员:">
			<u-input v-model="form.name" />
		</u-form-item>
		<br>
		<radio-group name="depicttype"  @change="radioChange">
			<label class="radio">
				<radio value="0" checked="0" />采购订单未交
			</label>
			<label style="font-size: 15px;">
				<radio value="1" />生产订单未交
			</label>
		</radio-group>
		<br>
		<u-form-item style="margin-left: -30rpx;">
			<u-button @click="qingk" type="primary">清空</u-button>
			<u-button @click="withoutquery " type="primary">在途未交查询</u-button>
			<u-button @click="yesquery" type="primary">计划到料查询</u-button>
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
			};
		},
		methods: {
			change: function(e) {
				//console.log(e, e.result);
				this.datebtn = e.startDate + '-' + e.endDate;
				this.DateAfter = e.startDate;
				this.DateBefore = e.endDate;
			},
			qingk: function() {
				this.datebtn = "请输入日期范围"
				this.form.name = ''
				this.form.number = ''
				this.form.staff = ''
			},
			radioChange: function(e) {
				console.log("11111111", e.detail.value)
				this.ind = e.detail.value
			},
			
			yesquery: function() {
				var that = this
				that.$request.request('/api/materialReceipt/planListByOrder', {
					arrivalDateAfter: that.DateAfter ,
					arrivalDateBefore: that.DateBefore ,
					cardCode: that.form.staff,
					itemCode: that.form.number,
					//orderType: options.orderType,
					salesmanName: that.form.salesmanName,
				}, 'POST', 'application/json').then(res => {
					console.log('one跳转界面确定成功', res.data.data);
					if (res.data.data.flag == false) {
						if (that.form.number == '' && that.form.staff == '' && that.datebtn != '请输入日期范围') {
							uni.navigateTo({
								url: '../receivingOrder/queryOrderone?DateAfter=' + that.DateAfter + '&DateBefore=' + that.DateBefore
							})

						} else if (this.form.number != '' && this.form.staff == ''  && this.datebtn == '请输入日期范围')  {
							console.log('料号')
							uni.navigateTo({
								//料号
								url: '../receivingOrder/queryOrdertwo?DateAfter=' + that.DateAfter + '&DateBefore=' + that.DateBefore+ '&itemCode=' + that.form.number
							})
						}else if (that.form.number == '' && that.form.staff != '' && that.datebtn != '请输入日期范围') {
							console.log('供应商+时间')
							uni.navigateTo({
								//供应商+时间
								url: '../receivingOrder/queryOrderthree?DateAfter=' + that.DateAfter + '&DateBefore=' + that.DateBefore+ '&cardCode=' + that.form.staff
							})
						}
					/* 	else if (this.form.number != '' && this.form.staff != ''  && this.datebtn == '请输入日期范围') {
							console.log('供应商+料号')
							uni.navigateTo({
								//供应商+料号
								url: '../receivingOrder/queryOrderfour?DateAfter=' + that.DateAfter + '&DateBefore=' + that.DateBefore+ '&cardCode=' + that.form.staff+ '&itemCode=' + that.form.number
							})
						} */
					 else if (that.form.number != '' && that.form.staff != '' && that.datebtn != '请输入日期范围') {
							console.log('供应商+料号+时间') 
							uni.navigateTo({
								//供应商+料号+时间
								url: '../receivingOrder/queryOrderfive?DateAfter=' + that.DateAfter + '&DateBefore=' + that.DateBefore+ '&cardCode=' + that.form.staff+ '&itemCode=' + that.form.number
							})
						}
					 }else if (res.data.data.flag == true) {
						uni.showModal({
							icon: 'none',
							title: "请按在途未交查询",
						})
					}
				})
			},
			withoutquery: function() {
				var that = this
				that.$request.request('/api/materialReceipt/unPlanListByOrder', {
					cardCode: that.form.staff,
					itemCode: that.form.number,
					orderType: true,
					salesmanName: that.form.salesmanName,
				}, 'POST', 'application/json').then(res => {
					console.log('withoutquery跳转界面确定成功', res.data.data);
				if (that.form.number != '' && that.form.staff == ''  && that.datebtn == '请输入日期范围') {
					uni.navigateTo({
						//按料号
						url: '../receivingOrder/queryOrderfour?DateAfter=' + that.DateAfter + '&DateBefore=' + that.DateBefore+ '&itemCode=' + that.form.number
					})
				} else if (that.form.number != '' && that.form.staff != ''  && that.datebtn == '请输入日期范围') {
					uni.navigateTo({
						//按料号+供应商
						url: '../receivingOrder/queryOrdersix?cardCode=' + that.form.staff+ '&itemCode=' + that.form.number
					})
				}
				})
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
	.radio {
		font-size: 15px;
		margin-right: 70px;
	
	}
</style>
