import qs from "qs"; //使用qs将请求从参数转化位字符串
// console.log('axios.js');
var apiurl = 'https://www.cmereye.com/wp-json/wp/v2';
// console.log(apiurl);

export default function ({ $axios, redirect }) {
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