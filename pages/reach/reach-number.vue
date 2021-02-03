<template>
	<u-form :model="form" ref="uForm" style="margin-left: 50rpx;" label-width=180>
		<uni-view class="name">按料号计划到料</uni-view>
		<u-form-item label="供应商代号:">
			<u-input v-model="form.code" @input="codeclick" />
		</u-form-item>
		<u-form-item>

			<picker @change="cardchange" :value="index" :range="list" :range-key="'cardName'">
				<view class="uni-input">供应商名称：
					{{list[index].cardName}}</view>
			</picker>

			<!-- <u-select v-model="cardshow" :list="list"></u-select>
			<u-button @confirm="confirm" style="margin-left: 2rpx;" @click="cardshow = true">{{list[index].cardName}}</u-button> 
			-->
			<!-- <picker name="pickerhx" value="{{list[ind].id }}" bindchange="bindPickerChange" range="{{list}}"
			               range-key="{{'cardName'}}">
			               <text class="project" space="nbsp">供应商名称: </text>
			               <text>{{list[index].cardName}}
			               </text>
			            </picker> -->
		</u-form-item>

		<u-form-item label="料号">
			<u-input v-model="form.number" />
		</u-form-item>
		<u-form-item label="业务员">
			<u-input v-model="form.staff" />
		</u-form-item>
		<u-form-item label="要求到料日期">
			<u-calendar v-model="show" :mode="mode" @change="change" max-date="2022-12-30"></u-calendar>
			<u-button style="margin-left: 3rpx;" @click="show = true">{{datebtn}}</u-button>

		</u-form-item>
		<view>
			<br>
			<radio-group name="depicttype" class="depict1" @change="radioChange">
				<label class="radio">
					<radio value="true" checked="true" />采购订单未交
				</label>
				<label>
					<radio value="false" />生产订单未交
				</label>
			</radio-group>
		</view>
		</u-form-item>
		<u-form-item>
			<u-button @click="loginq" type="primary">清空</u-button>
			<u-button type="primary" @click="chaxun">查询</u-button>
		</u-form-item>
	</u-form>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				ind: true,
				cardcode: '请选择供应商的名称',
				datebtn: '请选择日期范围',
				show: false,
				mode: 'range',
				form: {
					name: '',
					number: '',
					staff: '',
					code: '',
				},
				cardshow: false,
				list: [{}],
				switchVal: false
			};
		},
		methods: {
			change: function(e) {
				console.log(e)
				this.datebtn = e.startDate + '-' + e.endDate;
			},
			radioChange: function(e) {
				console.log("11111111", e.detail.value)
				this.ind = e.detail.value
			},
			loginq: function(e) {
				console.log("2222222", e)
				this.datebtn = '请选择日期范围'
				this.form.number = ''
				this.form.code = ''
				this.form.name = ''
				this.form.staff = ''
			},
			chaxun: function(e) {
				uni.navigateTo({
					url: '../reach/reach-look' //用户选择界面
				})
			},
			codeclick: function(e) {
				console.log("用户输入的code", e)
				var that = this
				that.$request.request('/api/materialPlan/supplierList', {
					cardCode: e
				}, 'GET', 'application/json').then(res => {
					console.log('确定成功', res.data.data);
					that.list = res.data.data
					console.log("供应商名称", that.list)
				})
			},
			cardchange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value 
			}


		},


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
		font-size: 14px;
		margin-right: 70px;

	}
</style>
