<template>
  <div class="theme-blue">
   
   <div class="header">
    <link href="/css/tailwind.min.css" rel="stylesheet">
  
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" id="header_bar">
    <b-navbar-brand to="/" class="flex items-center">
    
    <img src="/img/logo.svg" alt="" srcset=""> 
    <p><span class="brand_gs">希瑪眼科醫療控股有限公司</span>
     <span class="brand_gp">(股份代號：3309) </span></p>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 
   <b-nav-item-dropdown text="Color" active right  id="chose_color" hidden>
          <b-dropdown-item href="#">黃色</b-dropdown-item>
          <b-dropdown-item href="#">藍色</b-dropdown-item>
    </b-nav-item-dropdown>

        <b-nav-item-dropdown v-for="(item, idx)  in menuList" :key="idx" :text='item.name' right   >
          <b-dropdown-item v-for="(subitem, idx) in item.submenu" :key="idx" :to="subitem.url" keep-alive >{{subitem.name}}</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <nuxt-link class="btn btn-primary nav-contact" role="button" to="/Contact">聯絡我們</nuxt-link>

         <div class="language">
      <div class="language_box lang_news">

 
 
<b-dropdown size="sm"   variant="link" toggle-class="text-decoration-none" dropleft  no-caret>
    <template #button-content> 
     <img src="/img/earth.svg">
    </template>
   <b-dropdown-item><nuxt-link to="/News">繁體中文</nuxt-link></b-dropdown-item>
     <b-dropdown-item ><nuxt-link to="/News/index_cn">简体中文</nuxt-link></b-dropdown-item>
   <b-dropdown-item  >  <nuxt-link to="/News/index_en">English</nuxt-link></b-dropdown-item>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>

      <div class="banner_about banner_Release">
          <div class="banner_text"><p>新聞稿</p></div>
      </div> 

      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_Release">
          
<div class="part_Release part_news_en">
<div class="flex justify-between items-center">
  <div class="year_text tracking-widest"><p class="text-2xl underline pl-4 ">2022</p> </div>
<div class="year_chose flex items-center">
   

   <b-dropdown text="年份" variant="outline-primary" class="m-2">
    <b-dropdown-item href="#">2022</b-dropdown-item>
    <b-dropdown-item href="#">2021</b-dropdown-item>
    <b-dropdown-item href="#">2020</b-dropdown-item>
    <b-dropdown-item href="#">2019</b-dropdown-item>
  </b-dropdown> 

<b-button class="newslist_close"  variant="primary">清除</b-button>
  
  </div>
</div>

 

 
<table class="w-full mt-10 newslist">
  <tbody> 
    

  <tr> <td>2022-03-29</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20220329_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪2021年收益創新高逾11億港元   同比增長59%</p></a></td> </tr>

  <tr> <td>2022-02-22</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20220222_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪醫療與深圳亞輝龍聯手加大抗疫力度 捐贈基層市民新冠病毒快速檢測包倍增至60萬套</p></a></td> </tr>
    
  <tr> <td>2022-02-16</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20220216_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>港深攜手同心抗疫 希瑪醫療夥同深圳亞輝龍向香港基層市民 捐贈30萬套新冠病毒快速測試包</p></a></td> </tr>
  
  <tr> <td>2021-12-13</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20211213_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>香港理工大學與希瑪眼科合作於粵港澳大灣區培育香港年輕視光專才</p></a></td> </tr>

  <tr> <td>2021-09-03</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210903_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科聯盟愛康健齒科，共同打造灣區醫療大健康合作新標杆</p></a></td> </tr>
    
  <tr> <td>2021-08-26</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210826_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科成立合資公司 啟動OK鏡研發及內地註冊</p></a></td> </tr>
  
  <tr> <td>2021-08-23</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210823_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>「希瑪香港中西腫瘤中心」正式成立並將於2021年9月開始提供服務</p></a></td> </tr>

  <tr> <td>2021-08-18</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210818_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科落實進入佛山、東莞、福州和揭陽 在短期內爲居民提供優質的眼科醫療服務 目標在6至9個月內陸續開業</p></a></td> </tr>
    
  <tr> <td>2021-03-31</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210331_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科2020年業績較去年增長21.4%， 公司發展迅速。香港業務擴展至其他專科， 內地今年將於大灣區新開兩間眼科醫院。</p></a></td> </tr>
    
  <tr> <td>2020-08-28</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200828_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科2020第二季總收入V型反彈，七、八月保持良好恢復勢頭。</p></a></td> </tr>
    
  <tr> <td>2020-03-31</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200331_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科2019年按計劃穩步發展，總平均收益較去年增長。增長34.2% (香港: 30.7%；內地: 37.8%) 因有多間醫院仍在投資期，故利潤較去年微降8.1%</p></a></td> </tr>
    
  <tr> <td>2020-01-21</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200121_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科，北京、上海、廣州、深圳以至大灣區布局 在今年內基本完成</p></a></td> </tr>
    
    
  <tr> <td>2020-01-08</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200108_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科和主席林順潮 上海、深圳連奪多個奬項</p></a></td> </tr>
    
  <tr> <td>2019-08-27</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20190827_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科半年營收及純利持續高速增長 未來將加快深圳及大灣區發展</p></a></td> </tr>
    
  <tr> <td>2018-06-26</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20180626_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希瑪眼科獲公益金頒發「公益榮譽獎」</p></a></td> </tr>
              
          
    </tbody>
          
</table>



</div>
          </b-container>
          </div>

  <Footer/>         
   




  </div>
   
</template>

<script>
 
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import axios from 'axios';

         
export default {
  async asyncData({ app, req, query, params,store}){
		  const  newlistData = await axios.get('https://admin.cmereye.com/wp-json/wp/v2/posts?categories=4&page=1');
       const  whitesData = await axios.get('https://admin.cmereye.com/wp-json/wp/v2/posts?categories=4&page=2');
      console.log(newlistData);
		  return {
		   newlist: newlistData.data,
        whites: whitesData.data,
		  };
     
	}, 

	
head: {
    title: '新聞稿',
    meta: [
      { charset: 'utf-8' },
      { name:'mobile-web-app-capable' , content:'yes'},
      { name:'revisit-after', content:'10 days'},
      { name:'viewport', content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      { name:'theme-color', content:'#ffffff'},
      { name:'msapplication-navbutton-color', content:'#ffffff'},
      { name:'apple-mobile-web-app-status-bar-style', content:'#ffffff'},
      { name:'apple-mobile-web-app-capable', content:'yes'},
      { name:'apple-mobile-web-app-title', content:'希瑪'},
      { name:'format-detection', content:'telephone=no'},
      { name:'msapplication-tap-highlight', content:'no'},
      { name:'author', content:'希瑪'},
      { name:'robots', content:'index,follow'},
      { hid: 'description', name: 'description', content: '請閱讀希瑪眼科醫療控股有限公司的新聞稿，了解我們的最新發展。' },
      { hid: 'keywords', name: 'keywords', content: '新聞稿' }
      
    ],
  },
  name: 'News-Release',
  data(){
            return {
                newlist:[]

            }
        },

   data(){
            return {
                menuList:[
                    {id:'about',name:'關於希瑪',
                       submenu:[{url:"/About-cmer",name:"集團介紹"},{url:"/Corporate-culture",name:"願景及使命"},{url:"/Business-milestones",name:"業務里程碑"},           {url:"/Board-of-directors",name:"董事會"}]
                    },
                    {id:'service',name:'業務概覽',
                       submenu:[{url:"/Services-In-Hong-Kong",name:"香港醫療服務"},{url:"/Services-In-China",name:"內地醫療服務"}]},
                    {id:'link',name:'社會責任',
                       submenu:[{url:"/Report-governance",name:"報告及管治"},{url:"/Awards",name:"獎項殊榮"},{url:"/Caring-about-staff",name:"重視員工"},{url:"/Social-Responsibilities",name:"社會責任"}]},
                    {id:'dangjian',name:'新聞中心',
                       submenu:[{url:"/News",name:"新聞稿"}
                       /* ,{url:"/Graphic",name:"圖片故事"} */
                       ]},
                    {id:'news',name:'投資者關係',
                        submenu:[{url:"/Investor-Relationship",name:"投資者關係"},{url:"/Enterprise-information",name:"企業資料"},{url:"/Investor-Contact",name:"投資者聯繫"},{url:"/Announcements-and-circulars",name:"公告及通函"},{url:"/Annual-Report",name:"財務報告"},           {url:"/Corporate-Governance",name:"企業管治"}]},   
                    


                ]


            }
        },      
        
 


  mounted(){
  $('.dropdown-menu li .dropdown-item').click(function() {
    $('.newslist').addClass('ff');
     
      var datey = $(this).html();
      $('.year_text p').html(datey);
      /* console.log(datey); */
      
      $('.newslist tbody tr').each(function(index, value) {
         if($(this).attr('data-date') == datey){
           $(this).addClass("f-show")
         } else{
            $(this).addClass("f-hide").removeClass("f-show")
         }
      })
       
  });
  $('.newslist_close').click(function (e) { 
    $('.newslist').removeClass("ff");
     $('.year_text p').html((new Date).getFullYear());
    e.preventDefault();
    
  })


  },
  filters:{
    dateFormat: function(date, fmt) {
        if (!date) return date;
        date = new Date(date);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            S: date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1 ?
                    o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length)
                );
        return fmt;
    },
     ellipsis (value) {
      if (!value) return ''
      if (value.length > 40) {
        return value.slice(0,40) + '...'
      }
      return value
    },



}, 




}
</script>

<style>

.banner_Release{background-image:url(/pic/banner_pc_Release.jpg) ;}
.banner_text{display: flex;align-items: flex-start;flex-flow: column;justify-content: center; position: absolute;content:"";bottom: 0;left: 0;right: 0;width: 100%;height: 145px; background: linear-gradient(110.25deg, #85CEFA 5.86%, #51A8DD 100%); opacity: 0.9;color: #ffffff;padding-left: 10%;font-size: 24px; line-height: 36px; letter-spacing: 0.5em; text-transform: uppercase;}
.banner_text h1{font-weight: bold;margin-bottom: 10px;}
.banner_text p{letter-spacing: 1em;font-weight: lighter;font-family: 'Noto Sans CJK TC', serif;}

.part_content{padding: 100px 0;position: relative;}

.part_content_Release p{color: #707070;line-height: 2;letter-spacing: .1em;font-family: 'Noto Sans CJK TC', serif;margin-bottom: 0;}
.part_content .dropdown-item{color: #707070;}
.part_content .dropdown-toggle{padding-left: 1em;letter-spacing: .5em;border-color: #C4C4C4;border-radius: 0;}
.part_content .dropdown-toggle::after{margin-left: 5em;}

.year_text p{color: #51A8DD;}

.part_Release table tr{border: 1px solid #C4C4C4;width: 100%;padding: 15px 0;display:flex;align-items: center;margin-bottom: 15px;position: relative;}
.part_Release table tr::after{position: absolute;content: "";right: 25px;top: 0;bottom: 0;margin: auto; width: 20px;height: 20px;transform: rotate(-45deg);border-bottom: 3px solid #51A8DD;border-right: 3px solid #51A8DD;}
.part_Release table tr td{padding: 10px;display: block;}
.part_Release table tr td:nth-child(1){padding-left: 1.5rem;color: #51A8DD;font-weight: bold;padding-right: 2rem;border-right: 2px solid #C4C4C4;}
.part_Release table tr td:nth-child(2){padding-left: 2rem;}
.part_Release table tr td:nth-child(2) p,.part_Release table tr td:nth-child(2) a{color:#005CAF;font-weight: 300;font-family: 'Noto Sans CJK TC', serif;}

.ff tbody tr,.ff tbody tr.f-hide{display: none;}
.ff tbody tr.f-show{display: flex;}

@media screen and (min-width: 992px){

  .part_Release table tr td:nth-child(1){min-width: 160px}
  .part_Release table tr td:nth-child(2) p{padding-right: 6vw;font-size: 18px}
  .part_news_en table tr td{font-size: 18px !important}
}

@media screen and (max-width:768px) {
  .part_Release table tr td:nth-child(1){padding: 10px .5rem !important;min-width: 110px;}
  .part_Release table tr td:nth-child(2){padding-left: .5rem !important;padding-right: 1rem;}
  .part_Release table tr::after{width: 10px;height: 10px;right: 10px;border-width: 2px;}

  .lang_news .dropdown-menu{display: flex;}
  .lang_news .dropdown-menu .dropdown-item{padding: 0.25em}

  .navbar-nav .language .lang_news{top:-45px !important}
}
</style>
