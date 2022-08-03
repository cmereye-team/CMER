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
   <nuxt-link to="/Awards">繁體中文</nuxt-link>
    <nuxt-link to="/Awards_cn">简体中文</nuxt-link>
   <nuxt-link to="/Awards_en">English</nuxt-link>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>


      <div class="banner_about banner_Awards">
        <div class="banner_fixed">專業至上 屢獲殊榮</div>
          <div class="banner_text"><p>獎項殊榮</p></div>


      </div>
      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_Awards">
 

<div class="app_info" v-html="AboutData.content.rendered"></div>

          </b-container>
          </div>
     <Footer/> 


  </div>
   
</template>

<style>
.dark_blue,.part_content_Awards .font-normal{color: #005CAF;}
.light_blue{color: #51A8DD;}

.part_content_Awards table thead{background: #51A8DD;}
.part_content_Awards table thead th{padding: 1.5rem .8rem;color: #ffffff;font-size: 20.4188px; line-height: 30px;}
.part_content_Awards table tr th h2{font-size: 20px;color: #51A8DD;letter-spacing: 3px;line-height: 1.5;}
.part_content_Awards table ul li{color: #005CAF;line-height: 2; letter-spacing: .1em; font-weight: normal;    list-style: inside;}
.part_content_Awards table ul li::marker{display: inline;}
.part_content_Awards table ul li p{display: inline;}
.banner_Awards{background-image:url(/pic/banner_pc_Awards.jpg) ;}
.banner_Awards .banner_fixed{ letter-spacing: 0.2em;color: #005CAF;font-size: 26px;text-shadow:2px 2px 5px #ffffff; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; z-index: 999; display: flex; justify-content: center; align-items: center; }

.part_content_Awards p{line-height: 2;letter-spacing: .1em; }
.nav-tabs,.nav-tabs .nav-link{border: none;color: #005CAF;padding-left: 0;padding-right: 0;margin-left: 2rem;margin-right: 2rem;letter-spacing: .5em;text-align: center;text-indent: .5em;}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{color: #85CEFA;position: relative;}
.nav-tabs .nav-link.active::before{position: absolute;content: '';width:80%;height: 2px; background-color: #51A8DD;bottom: 0px;left: 0;right: 0;margin:  auto;}
.Awards_head{font-size: 1.4rem;font-weight: normal;color: #005CAF;}
.Awards_year{font-size: 1.6rem;font-weight: bold;color: #51A8DD;letter-spacing: 0.2em;margin: 20px 0;}
.Awards ul li{font-size: 1.2rem;color: #005CAF;line-height: 2;letter-spacing: 0.1em;}
.Awards .Awards_r ul li{color: #51A8DD;  }

.part_content_Awards p.tracking-w150{letter-spacing: 2em;}

@media screen and (min-width:992px){

  .banner_text p{font-size:40px}

  .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

.min-h64x{min-height: 64px} 
.mt-5w{margin-top:5vw !important}
.mt-96x{margin-top:96px !important}

}

@media screen and (max-width: 768px) {
  .part_content_Awards .table p,.part_content_Awards .table li{font-size: 15px;}
  .part_content_Awards table tr th h2{font-size: 24px;}
  .banner_Awards .banner_fixed{letter-spacing: .2em;font-size: 22px;}
}
</style>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://www.cmereye.com/wp-json/wp/v2/pages/32`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	}, 
  name: 'Awards',
   data() {
      return {
          AboutData:[],
      }
    },
     head: {
    title: '投資者聯繫',
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
      { hid: 'description', name: 'description', content: '希瑪憑藉專業至上精神及優質服務，多年來贏得眾多獎項，印證了我們的醫療名牌備受社會各界的認同。' },
      { hid: 'keywords', name: 'keywords', content: '醫療名牌 僱主文化獎 香港星級品牌企業獎 商界展關懷 上市醫療服務企業80強 社會辦醫•醫院集團100強 深圳女商傑出貢獻獎 2021深圳500強企業榜單 患者满意度评分 深圳創新社會辦醫潮頭獎 2021年度中國品牌醫生團隊 全國醫療品牌運營創新優秀案例 最具價值醫藥及醫療公司 亞洲最佳價值服務大獎 香港旅遊業十優推介 香港最優秀企業大獎 香港服務名牌 民營醫院50強 中國醫療機構品牌傳播百強 最佳非公醫療創新企業 企業社會責任典範獎 行業影響力人物 領軍企業獎 跨國公司突出貢獻企業領袖人物 優秀管理者 全國優秀外商投資企業雙優企業 和諧勞動關係促進獎 深圳外商投資企業協會優秀會員 10大醫生創業家 第三屆深圳新生代創業風雲人物 醫療服務金獎 公益榮譽獎' }
      
    ],
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
  
}
</script>
