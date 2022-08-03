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
      <div class="language_box">

 
 
<b-dropdown size="sm"   variant="link" toggle-class="text-decoration-none" dropleft  no-caret>
    <template #button-content> 
     <img src="/img/earth.svg">
    </template>
       <nuxt-link to="/Services-In-Hong-Kong">繁體中文</nuxt-link>
        <nuxt-link to="/Services-In-Hong-Kong_cn">简体中文</nuxt-link>
    <nuxt-link to="/Services-In-Hong-Kong_en">English</nuxt-link>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>


      <div class="banner_about banner_about_about">
          <div class="banner_text"><p>香港醫療服務</p></div>


      </div>
      <div class="part_content_bg relative">
        
        

         <b-container fluid="md" class="content  mb-20">
           
          <div class="service_map service_map_hk">
 
  


           <div class="text-center relative"> <b-img class="mx-auto" src="/img/service_hk_bg.jpg"></b-img> 
           <div class="point_eye_area"> 
                <div class="point point_eye"  ></div>
                <div class="point point_eye"></div>
                <div class="point point_eye"></div>
                <div class="point point_eye"></div>
                <div class="point point_eye"></div>
                <div class="point point_eye"></div>
                <div class="point point_eye"></div>
                <div class="point point_eye" id="map-1"></div>
                <div class="point point_eye"></div>
            </div>
            <div class="point_tooth_area">
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
            </div>
            <div class="point_poly_area">
                   <div class="point point_poly"  id="map-2"></div>
            </div>

            <div class="point_html">
 <b-tooltip variant="primary" class="text-center" id="map-12" target="map-1" placement="top">  <img src="/pic/map_zh.jpg" alt="" srcset=""> <p class=" text-lg mt-3 text-center "> 希瑪眼科中心 - 中環店</p>  </b-tooltip>
 <b-tooltip variant="primary" class="text-center map-2" id="map-22" target="map-2"   placement="top">  <img src="/pic/map_k11.jpg" alt="" srcset=""> <p class=" text-lg mt-3 text-center "> 愛瑪醫美 - K11店</p>  </b-tooltip>



            </div>




            </div>
        </div>

<!-- <p class="text-center text-g text-gray-500  leading-loose  mb-5">希瑪在香港邁進全方位專科服務領域，由核心的眼科中心擴展至矯視中心、視光中心、牙科、腫瘤專科、<br class="md"> 醫學美容及檢測中心等，為客戶提供一站式的專科醫療服務。 </p> -->

 <div class="app_info" v-html="AboutData.content.rendered"></div>
          </b-container>
          </div>
     <Footer/> 


  </div>
</template>
<style>

@media screen and (min-width:992px){

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width: 768px) {
.point{width: 7vw !important;height: 7vw !important;}  
.point::before{width: 3.3vw !important;height: 3.3vw !important;}
.point.point_poly::before{top: -3px !important;}
.point:hover{transform: scale(1.5) translateY(-8px) !important;z-index: 999 !important;}
.service_map_hk .point_eye_area .point_eye:nth-child(1){top: 20.7% !important ; left: 29.8% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(2){top: 23.4% !important ;left: 34.7% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(3){top: 30.6% !important ; left: 45.3% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(4){top: 24.3% !important ; left: 57% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(5){top: 37.8% !important ; left: 61.5% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(6){top: 43.2% !important ; left: 59.7% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(7){top: 62% !important ; left: 56.7% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(8){top: 62.5% !important ; left: 53.1% !important ;}
.service_map_hk .point_eye_area .point_eye:nth-child(9){top: 62% !important ; left: 50.5% !important ;}

.service_map_hk .point_tooth_area .point_tooth:nth-child(1){top: 27% !important ; left: 55% !important ;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(2){top: 45% !important ; left: 56.7% !important ;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(3){top: 64.6% !important ; left: 60.3% !important ;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(4){top: 65.5% !important ; left: 61.2% !important ;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(5){top: 43.2% !important ; left: 67.5% !important ;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(6){top: 46.8% !important ; left: 70.2% !important ;}

.service_map_hk .point_poly_area .point_poly:nth-child(1){top: 46.8% !important ; left: 60% !important ;}

}

.tooltip{ opacity: 1 !important; }
.tooltip-inner{max-width: 500px !important;background: linear-gradient(110.25deg, #85CEFA 5.86%, #51A8DD 100%);padding:0 0 15px;}

.tooltip-inner .flex{display: flex;justify-content: flex-start;align-items: center;font-size: 16px;}
.tooltip-inner .flex i{padding-right: 10px;}
.tooltip .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow::before{border-bottom-color: #85CEFA !important;border-top-color: #85CEFA !important;}
#map-22 .tooltip-inner{background: linear-gradient(110.25deg, #D6BD7D 5.86%, #846232 100%);}
#map-22 .arrow::before{border-top-color: #846232 !important;border-bottom-color: #846232 !important;}

.map_video iframe{max-width: 100% !important ;}
.map_box{background: rgba(81, 168, 221,0.8);  position: absolute;width: 100% !important ;top: 150px;left: 0;right: 0;bottom: 0;margin: 0 auto; z-index: 999;display: none;}


.point{position: absolute;content: '';z-index: 10; background: url(/img/map_point.svg);background-size: auto 100% !important ;background-repeat: no-repeat;background-position: center; width: 50px;height: 50px;filter: drop-shadow(0px 0px 4.77472px rgba(0, 92, 175, 0.6));transition: all .3s ease;}
.point::before{background: url(/img/map_point_eye.svg);position: absolute;content: '';width: 23px;height: 23px;background-size: 100% auto;left: 0;right: 0;bottom: 0;top: 0;margin: auto;background-repeat: no-repeat;transition: all .3s ease;}
.point.point_tooth::before{background: url(/img/map_point_tooth.svg);background-position: center;background-size: auto 100% !important ;background-repeat: no-repeat;top: -6px;left: -1px;}
.point.point_poly{background: url(/img/map_gold_point.svg);background-position: center;background-size: auto 100% !important ;background-repeat: no-repeat;top: -10px;}
.point.point_poly::before{background: url(/img/map_point_woman.svg);background-position: center;background-size: auto 100% !important ;background-repeat: no-repeat;top: -10px;}
.point:hover{transform: scale(2.2) translateY(-20px); cursor: pointer;z-index: 99;background: url(/img/map_dark_point.svg);background-size: auto 100% !important ;background-repeat: no-repeat;background-position: center;}
.service_map_hk .point_eye_area .point_eye:nth-child(1){top: 230px; left: 331px;}
.service_map_hk .point_eye_area .point_eye:nth-child(2){top: 260px;left: 385px;}
.service_map_hk .point_eye_area .point_eye:nth-child(3){top: 340px; left: 503px;}
.service_map_hk .point_eye_area .point_eye:nth-child(4){top: 270px; left: 633px;}
.service_map_hk .point_eye_area .point_eye:nth-child(5){top: 420px; left: 683px;}
.service_map_hk .point_eye_area .point_eye:nth-child(6){top: 480px; left: 663px;}
.service_map_hk .point_eye_area .point_eye:nth-child(7){top: 610px; left: 630px;}
.service_map_hk .point_eye_area .point_eye:nth-child(8){top: 605px; left: 590px;}
.service_map_hk .point_eye_area .point_eye:nth-child(9){top: 600px; left: 560px;}

.service_map_hk .point_tooth_area .point_tooth:nth-child(1){top: 300px; left: 610px;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(2){top: 500px; left: 630px;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(3){top: 640px; left: 670px;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(4){top: 650px; left: 680px;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(5){top: 480px; left: 750px;}
.service_map_hk .point_tooth_area .point_tooth:nth-child(6){top: 520px; left: 780px;}

.service_map_hk .point_poly_area .point_poly:nth-child(1){top: 520px; left: 665px;}

.banner_about_about{background-image:url(/pic/banner_pc_Services-In-Hong-Kong.jpg) ;}
.service_map_hk_table thead{background: #51A8DD;color: #fff;} 
.service_map_hk_table thead th:nth-child(1){width: 100px;}
.service_map_hk_table thead th:nth-child(3){width: 100px;}
.service_map_hk_table td{color: #707070;}




</style>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://www.cmereye.com/wp-json/wp/v2/pages/29`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	}, 
  name: 'Services-In-Hong-Kong',
  head: {
    title: '希瑪 香港業務 | 希瑪業務',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '希瑪在香港邁進全方位專科服務領域，由核心的眼科中心擴展至矯視中心、視光中心、牙科、腫瘤專科、醫學美容及檢測中心等，為客戶提供一站式的專科醫療服務。' },
      {hid:'keywords',name:'keywords',content:'希瑪 眼科中心 矯視中心 視光中心 牙科 腫瘤專科醫學美容檢測中心'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  data() {
      return {
        items: [
          { 專科: '眼科 ', 中心名稱: '希瑪眼科中心 ', 中心數目: '10 ' , 服務特色: '基本檢查、診症、特殊檢查、治療及門診手術、藥物處方、驗光配鏡及手術治療'},
          { 專科: '眼科 ', 中心名稱: '希瑪微笑矯視中心 ', 中心數目: '2 ' , 服務特色: 'SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡 (ICL) 及人工晶體置換術 (IOL)'},
          { 專科: '眼科 ', 中心名稱: '希瑪眼科視光中心 ', 中心數目: '5 ' , 服務特色: '一站式安全、可靠及針對性的眼科檢查服務及改善視力方案，兒童近視控制方案'},
          { 專科: '眼科 ', 中心名稱: '嘉賓眼科及激光矯視手術中心 (希瑪全資附屬公司) ', 中心數目: '2 ' , 服務特色: '眼科及激光矯視手術'},
          { 專科: '牙科 ', 中心名稱: '希瑪牙科中心 ', 中心數目: '7 ' , 服務特色: '基本牙科服務，同時為客人提供美容牙科及高階牙科服務'},
          { 專科: '腫瘤專科 ', 中心名稱: '希瑪中西腫瘤專科中心 ', 中心數目: '1 ' , 服務特色: '高質素的醫療服務包括篩查及診斷、癌症治療、視像會診及HPV疫苗注射'},
          { 專科: '醫學美容 ', 中心名稱: '愛瑪醫美 ', 中心數目: '2 ' , 服務特色: '專業、安全、優質的全方位身體、面部治療方案'},
          { 專科: '其他 ', 中心名稱: '希華檢測 (國際) 有限公司 ', 中心數目: '1 ' , 服務特色: '香港政府認可的本地COVID-19 RT-PCR 檢測機構，提供安全、方便及價錢合適的檢測服務'},
        ], 
         AboutData:[]
      }
    } ,

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
      
}
</script>





