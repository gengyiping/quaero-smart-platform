<template>
	<u-form :model="form" ref="uForm" style="margin-left: 50rpx;" label-width="190">
		<uni-view class="name">到料信息输入-按料号</uni-view>
		<u-form-item label="计划到料数量:">
			<u-input v-model="form.number" />
		</u-form-item>
		<u-form-item label="计划到料日期:">
			<u-calendar v-model="show" :mode="mode" @change="change" max-date="2022-12-30"></u-calendar>
			<u-button style="margin-left: 3rpx;" @click="show = true">{{date}}</u-button>
		</u-form-item>
		<u-form-item label="到料方式:">
			<u-input v-model="form.methods " />
		</u-form-item>
		<u-form-item label="物流信息:">
			<u-input v-model="form.message" />
		</u-form-item>
		</u-form-item>
		<u-form-item>
			<u-button @click="qingk" type="primary">清空</u-button>
			<u-button @click="buttonq"  type="primary">确定</u-button>
		</u-form-item>

	</u-form>

</template>

<script>
	export default {
		data() {
			return {
				changeid:"",
				show: false,
				mode: 'date',
				form: {
					number: '',
					methods: '',
					message: ''
				},
				date: new Date().toISOString().slice(0, 10),
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
			onLoad: function (options) {
			console.log('==options==',options.id)
			this.changeid = options.id;
			},
			change: function(e) {
				console.log(e, e.result);
				this.date = e.result;
			},
			qingk: function(e) {
				this.form.number = ''
				this.form.methods = ''
				this.form.message = ''
				this.date=new Date().toISOString().slice(0, 10)
			},
			buttonq:function(e){
				if(this.date!=''&& this.form.number!=''){
					console.log('计划到料数量',this.date,this.form.number)
					uni.navigateTo({
						url: '../reach/reach-look?numid='+this.form.number+'&dateid='+this.date+"&enchangeid="+this.changeid
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
