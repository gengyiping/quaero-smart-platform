import Vue from 'vue'

const baseurl = 'http://192.168.122.200:8890';

function request(url, data, method, contentType) {
	console.log("url=", url)
	let header = {
		/* 'content-type': contentType === 1 ? 'application/json' : 'application/x-www-form-urlencoded', */ 
		Authorization: uni.getStorageSync('Authorization') != '' ? uni.getStorageSync('Authorization') : null
	}  
	/* console.log("header=", header) */
	 return new Promise((resolve, reject) => {
	        uni.request({
	            url: baseurl + url,
	            data,
	            method,
	            header,
	            success: (res) => {
	                if (res.statusCode == 200) {
	                    resolve(res)
	                } else if (res.statusCode == 405) {
	                    uni.showToast({
	                        icon: 'none',
	                        title: '请求方法错误',
	                        duration: 1500
	                    });
	                } else { 
	                    uni.showToast({
	                        icon: 'none',
	                        title: '请求错误:' + res.statusCode,
	                        duration: 1500
	                    });
	                }
	            },
	            fail: (err) => {
	                console.log('request fail', err)
	                uni.showToast({
	                    icon: 'none',
	                    title: err.errMsg,
	                    duration: 2000
	                });
	                reject(err)
	            }
	        })
	    })
	/* return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: date,
			header: header,
		}).then((response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	}); */
}
export default {
	request,
	baseurl,
}
