import qs from "qs"; //使用qs将请求从参数转化位字符串
// console.log('axios.js');
/* axios api 后台认证 */
var appid     = 'jH2EckHACj';    /* //后台WebAPI中设置的AppID */
var appsecret = '125bbb3c5ef85cb3f1fe3454a1ff76d6d23456';    /* //后台WebAPI中设置的API认证密钥 */
var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;  /* 获取当前时间戳 */

export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    config.data = qs.stringify(config.data, {
      allowDots: true //Option allowDots can be used to enable dot notation
    });
    return config;
  });

  $axios.onResponse(response => {
    return Promise.resolve(response.data);
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      //错误代码
        case 401:
            sessionStorage.clear();
            redirect('/login')
            break;
        case 403:
            sessionStorage.clear();
            redirect('/login')
            break;
        case 404:
            sessionStorage.clear();
            break;
        case 500:
            Message.error("Server exception");
            break;
        case 502:
            Message.error("Bad Gateway");
            break;
        case 503:
            Message.error(error.message);
            break;
        case 504:
            Message.error(error.message);
            break;
        default:
            break;
    };
    return Promise.reject(error);
  });
}