import {msg} from './util.js'
// 基础url
// h5端在浏览器有跨域问题，在manifest.json或vue.config.js配置代理转发
let BASE_URL = '/api'

// #ifndef H5
// 非h5端没有跨域问题
BASE_URL = 'https://mock.mengxuegu.com/mock/6361598cffa946598c7426eb/xlin-edu-app'
// #endif

//  'development'
// console.log('process.env.NODE_ENV', process.env.NODE_ENV )

// 参考：https://uniapp.dcloud.io/api/request/request?id=request
const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout: 8000, // 8秒超时时间，单位 ms	
			success: (res) => { // 注意箭头函数
				const code = res.data.code
				// console.log( options.url, "响应数据", res.data)
				// if(code !== 20000) {
				// 	msg('请求接口失败');
				// 	return;
				// }
				resolve(res.data)
			},
			fail: (err) => {
				// console.log('err', err)
				// msg('请求接口失败');
				reject(err)
			}
		})
	})
}

export default request