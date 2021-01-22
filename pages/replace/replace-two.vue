//按料号
<template>
	<view class="container">
		<view class="cont">显示查询结果如下（按料号）：</view><br>
		<!-- <scroll-view class="scroll-view" scroll-y="true" > -->
		<!-- 每项选择 -->
		<checkbox-group name="check" @change="changeCheck" class="check">
			<!-- 注意v-for不要设在checkbox-group上 -->
			<view class="checkview" v-for="(item, index) in content" :key="item.id">
				<checkbox :value="item.value" :checked="item.checked" /><br>
				<view class="one" @click="chview" value="chview">
					<view class="oone">供应商代号：{{item.name}}</view>
					<view class="oone">供应商名称：{{item.name1}}</view>
					<view class="oone">未交数量总和：{{item.name2}}</view>
					<view class="oone">计划到料数：{{item.name}}</view><br>
					
				</view>
			</view>
		</checkbox-group>
		<!-- </scroll-view> -->

		<!-- 全选 -->
		<checkbox-group name="allCheck" @change="changeAll">
			<label>
				<checkbox :value="allCheck.value" :checked="allCheck.checked" /><text>{{allCheck.name}}</text>
			</label>
		</checkbox-group>
		<button class="button-c " >提交计划到料</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allCheck: {
					name: '全选',
					value: 'all',
					checked: false
				},
				content: [{
						name2: '计划到料数:',
						name1: '名称规格:',
						name: '料号:',
						value: '0',
						id: 1,
						whether: true
					},
					{
						name2: '计划到料数:',
						name1: '名称规格:',
						name: '料号:',
						value: '1',
						id: 2,
						whether: true
					},
					{
						name2: '计划到料数:',
						name1: '名称规格:',
						name: '料号:',
						value: '2',
						id: 3,
						whether: true
					}
				]
			}
		},
		methods: {
			// 全选
			changeAll: function(e) {
				if (e.detail.value.length == 0) {
					this.content.map(item => this.$set(item, 'checked', false));
					this.$set(this.allCheck, 'checked', false);
				} else {
					this.content.map(item => this.$set(item, 'checked', true));
					this.$set(this.allCheck, 'checked', true);
				}
			},
			// 多选
			changeCheck: function(e) {
				console.log(e)
				var items = this.content;
				var len = this.content.length;
				var values = e.detail.value;
				// console.log(values)
				for (var i = 0; i < len; i++) {
					var item = items[i];
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true);
					} else {
						this.$set(item, 'checked', false);
					}
				}
				// 判断选中状态
				var arr = [];
				this.content.forEach(item => item.whether == true ? arr.push(item) : '');
				var isAll = arr.every(item => item.checked == true);
				isAll ? this.$set(this.allCheck, 'checked', true) : this.$set(this.allCheck, 'checked', false)
			},
		chview: function(e) {
			console.log('66666', e)
			uni.navigateTo({
				url: '../replace/message'
			})
		}
		}
	}
</script>

<style>
	.container {
		margin-top: 50rpx;
		margin-left: 50rpx;

	}

	.cont {
		margin-bottom: 10rpx;
		font-size: 15px;


	}

	.one {
		margin-top: -46rpx;
		margin-left: 60rpx;

	}

	.button-c {
		margin-top: -95rPX;
		width: 260rpx;
		height: 75rpx;
		background-color: #00a0e9;
		color: #fff;
		display: inline-block;

		margin-left: 350rpx;
		font-size: 15px;
		text-align: center;
	}

	.oone {
		margin-bottom: 10rpx;
	}

	.check {
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
	}

	.checkview {
		border-bottom: 1px solid rgb(207, 201, 222);
		width: 92%;
		margin-bottom: 25rpx;
	}

	/* page {
		background-color: #e6dcf4;
	} */
</style>
