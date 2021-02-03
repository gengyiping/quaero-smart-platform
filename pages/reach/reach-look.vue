<template>
	<view class="container">
		<view class="cont">显示查询结果如下：</view><br>
		<!-- <scroll-view class="scroll-view" scroll-y="true" > -->
		<!-- 每项选择 -->
		<checkbox-group name="check" @change="changeCheck" class="check">
			<!-- 注意v-for不要设在checkbox-group上 -->
			<view class="checkview" v-for="(item, index) in content" :key="item.id">
				<checkbox :value="item.value" :checked="item.checked" /><br>
				<view class="one" @click="chview(item.id)">
					<view class="oone">料号：{{item.name1}}</view>
					<view class="oone">名称规格：{{item.name1}}</view>
					<view class="oone">未交数量总和：{{item.name1}}</view>
					<view class="oone">缺料数：{{item.name1}}</view>
					<view class="oone">要求到料日期：{{item.name1}}</view>
					<view v-if="item.isShow" style="color: #007AFF;">
						<view class="oone">计划到料数：{{item.name2}}</view>
						<view class="oone">计划到料日期：{{item.name}}</view>
					</view>
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
		<button class="button-c " @click="loginsure">提交计划到料</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				allCheck: {
					name: '全选',
					value: 'all',
					checked: false
				},
				content: [{
						name2: '未交数量总和:',
						name1: '1XXXXXX',
						name: '1111111111',
						value: '0',
						id: 1,
						whether: true,
						isShow: false
					},
					{
						name2: '未交数量总和:',
						name1: '2XXXXXX',
						name: '料号:',
						value: '1',
						id: 2,
						whether: true,
						isShow: false
					},
					{
						name2: '未交数量总和:',
						name1: '3XXXXXX',
						name: '料号:',
						value: '2',
						id: 3,
						whether: true,
						isShow: false
					}
				]
			}
		},
		methods: {
			// 全选
			changeAll: function(e) {
				console.log("全选打印的长度：", e.detail.value.length)
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
			chview: function(id) {
				console.log('66666', id)
				uni.navigateTo({
					url: '../reach/reach-num?id=' + id + '&lmessage=' + this.content[id - 1].name1 + "&mmessage=" + this.content[id -
							1].name1 + '&wmessage=' + this.content[id - 1].name1 + "&jmessage=" + this.content[id - 1].name1 +
						'&qmessage=' + this.content[id - 1].name1 + "&ymessage=" + this.content[id - 1].name1
				})
			},
			onLoad: function(options) {
				console.log("123456", uni.getStorageSync("datenum"))
				var dateNumArr = new Array()
				var storageDatenum = uni.getStorageSync("datenum")

				if (storageDatenum == "") {
					dateNumArr.push(options)
					uni.setStorageSync("datenum", dateNumArr)
				} else {
					dateNumArr = uni.getStorageSync("datenum")
					dateNumArr.push(options)
					uni.setStorageSync("datenum", dateNumArr)
				}
				for (var i = 0; i < this.content.length; i++) {
					for (var j = 0; j < dateNumArr.length; j++) {
						if (this.content[i].id == dateNumArr[j].enchangeid) {
							this.content[i].isShow = true;
							this.content[i].name2 = dateNumArr[j].numid;
							this.content[i].name = dateNumArr[j].dateid;
						}
					}
				}

			},
			loginsure: function() {
				//uni.setStorageSync("datenum", "")
				uni.removeStorageSync('datenum');
				console.log("123", uni.getStorageSync("datenum"))
				uni.navigateTo({
					url: "../reach/reach-number"
				})
			},
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
		word-break: break-all;
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
