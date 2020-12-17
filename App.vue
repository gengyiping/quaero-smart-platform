<script>
export default {
	onlaunch:function(){
		console.log("APP Launch");
		plus.screen.lockOrientation("portrait-primary")
	},
	onShow: function() {
		console.log("此时的打印信息显示：")
		uni.onNetworkStatusChange(function(res){
		console.log("网络类型:" + res.networkType + ",网络连接:" + res.isConnected);
		if(!res.isConnected){
		uni.showToast({
		title:"网络未连接"
		});
		return; 
		}
		})
	console.log('App Hide');  
	},
	onHide: function() {
		console.log('App Hide');  
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
