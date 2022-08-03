<template>
  <div class="theme-blue tanslate_yin">
    
    <template>

  <div class="header">
    <link href="/css/tailwind.min.css" rel="stylesheet">
  
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" id="header_bar">
    <b-navbar-brand to="/index_en" class="flex items-center">
    
    <img src="/img/logo.svg" alt="" srcset=""> 
   <p><span class="brand_gs">C-MER Eye Care Holdings Limited</span>
     <br class="xs-dis-none">
     <span class="brand_gp">(Stock Code: 3309)</span></p>
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
        
        <nuxt-link class="btn btn-primary nav-contact" role="button" to="/Contact_en">Contact Us</nuxt-link>

         <div class="language">
      <div class="language_box">

 
 
<b-dropdown size="sm"   variant="link" toggle-class="text-decoration-none" dropleft  no-caret>
    <template #button-content> 
     <img src="/img/earth.svg">
    </template>
    <nuxt-link to="/Business-milestones">繁體中文</nuxt-link>
    <nuxt-link to="/Business-milestones_cn">简体中文</nuxt-link>
   <nuxt-link to="/Business-milestones_en">English</nuxt-link>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>



      <div class="banner_about banner_History tanslate_yin">
          <div class="banner_text xs_banner_en_text"><p>Business milestones</p></div>
      </div>
      <div class="part_content_bg part_History_bg tanslate_yin business_en_meli">
         <b-container fluid="md" class="content part_content part_History_content">
       
<div class="app_info" v-html="AboutData.content.rendered"></div>


          </b-container>
          </div>
   

   <template>
  <div class="footer part tanslate_yin">
    <div class="container">
    <div class="footer_nav flex items-center justify-between  ">
      <div class="footer_logo">
        <img src="/img/Logo_foot_en.svg" alt="" srcset="">
      </div>
      <div class="footer_nav_link">
         <ul class="flex">
           
           <li  v-for="item in foot_menuList" ><b-link :href="item.url">{{item.name}}</b-link></li>
          
         </ul>
      </div>
    </div>

    <div class="footer_address mt-12 text-base "><p>Address:Suite 1535, Central Building, 1-3 Pedder Street, Central</p></div>

    <div class="footer_social mt-12 flex items-center justify-between">
      <ul class="flex items-center">
        <li v-for="item in foot_soical" class="mr-10"><a :href="item.url" target="_blank"><i><img :src="item.src" alt=""></i></a></li>
    
  
      </ul>
      <div class="footer_copyright">
        <div class="footer_privacy text-right"> <span v-for="item in foot_state" style="margin-right: 1em;"><b-link :href="item.url">{{item.name}}</b-link></span></div>
        <div class="footer_cptext">© 2022 C-MER Eye Care Holdings Limited. All rights reserved.</div>
      </div>
    </div>
</div>

  </div>
</template>


  </div>
   
</template>
<style>
.banner_History{ background-image: url(/pic/banner_pc_milestones.jpg);}

.part_History_content{border-left: 1px solid #51A8DD;;}
.part_History .part_History_item .histroy_line {position: relative;}
.part_History .part_History_item .histroy_line::before {position: absolute;content: '';width: 16px;height: 16px;left: -18.5px;top: 0;bottom: 0;margin: auto;border: 10px solid #ffffff;background: #005CAF;box-sizing: content-box;border-radius: 50%;}
.part_History .part_History_item .histroy_line::after{position: absolute;content: '';width: 100%;height: 1px;background: #005CAF;top: 18px;z-index: -1;}
.part_History .part_History_item p{margin-left: 5rem;margin-bottom: 20px;font-size: 16px}
.part_History .part_History_item p:last-child{margin-bottom: 60px;}
.part_History .part_History_item .histroy_line p{color: #51A8DD;font-size: 20px;font-weight: bold;display: table;position: relative;z-index: 999;background: #ffffff;padding: 0 10px;}
.part_History .part_History_item>p strong{padding-left: 10px;padding-right: 40px;font-weight: bold;letter-spacing: normal;min-width: 85px;text-align: right;}
.part_History .part_History_item>p{letter-spacing: initial !important;   color: #707070;display: flex;font-weight: 300;}


@media screen and (min-width:992px){

  .banner_text p{font-size:40px}
  .bussiness-history-en .part_History_item>p strong{min-width:130px !important;text-align: left !important}

  .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}


@media screen and (max-width: 768px){
.part_History_bg{padding: 0 0 0 15px;}  
.part_History_content {padding-right: 0 !important;}
.part_History_content .part_History_item p{padding-right: 15px !important;}
.part_History .part_History_item p{margin-left: 1rem;letter-spacing: 0;font-size: 14px;}
.part_History .part_History_item p strong{font-size: 16px;font-weight: bold;min-width: 90px;padding-left:initial}
.part_History .part_History_item .histroy_line::after{top: 18px;}
.part_History .part_History_item .histroy_line::before {left: -33.5px;}
.part_History .part_History_item .histroy_line p{font-size: 1.3rem;}
.part_History .part_History_item p:last-child{margin-bottom: 50px;}

.business_en_meli .part_History .part_History_item p strong{min-width:120px;text-align:right}

}
</style>

<script>
import Header from '../components/Header_en.vue';
import Footer from '../components/Footer_en.vue';
import axios from 'axios';
export default {
  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://www.cmereye.com/wp-json/wp/v2/pages/218`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	}, 
  name: 'Business-milestones',
  data(){
            return {
                AboutData:[]

            }
        },
        head: {
    title: 'C-MER Business Milestones',
    meta: [
      { charset: 'utf-8' },
      { name:'mobile-web-app-capable' , content:'yes'},
      { name:'revisit-after', content:'10 days'},
      { name:'viewport', content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      { name:'theme-color', content:'#ffffff'},
      { name:'msapplication-navbutton-color', content:'#ffffff'},
      { name:'apple-mobile-web-app-status-bar-style', content:'#ffffff'},
      { name:'apple-mobile-web-app-capable', content:'yes'},
      { name:'apple-mobile-web-app-title', content:'C-MER'},
      { name:'format-detection', content:'telephone=no'},
      { name:'msapplication-tap-highlight', content:'no'},
      { name:'author', content:'C-MER'},
      { name:'robots', content:'index,follow'},
      { hid: 'description', name: 'description', content: 'C-MER Business Milestones' },
      { hid: 'keywords', name: 'keywords', content: 'C-MER| business milestones| C-MER Dennis Lam Eye Hospital| C-MER Eye Center| C-MER Eye Clinic | C-MER Multi-specialty Medical Center| C-MER Oncology| C-MER Smile Laser Center| Shenzhen CKJ|  Hong Kong Champion Eye' }
      
    ],
  },

    data(){
            return {
                 menuList:[
                    {id:'about',name:'About C-MER',
                       submenu:[{url:"/About-cmer_en",name:"About Us"},{url:"/Corporate-culture_en",name:"Vision and Mission"},{url:"/Business-milestones_en",name:"Business Milestones"},           {url:"/Board-of-directors_en",name:"Board of Directors"}]
                    },
                    {id:'service',name:'Our Business',
                       submenu:[{url:"/Services-In-Hong-Kong_en",name:"Hong Kong Medical Services"},{url:"/Services-In-China_en",name:"Mainland China Medical Network"}]},
                    {id:'link',name:'Social Responsibility',
                       submenu:[{url:"/Report-governance_en",name:"Reporting and Governance"},{url:"/Awards_en",name:"Awards and Recognitions"},{url:"/Caring-about-staff_en",name:"Our People "},{url:"/Social-Responsibilities_en",name:"Social Responsibility"}]},
                    {id:'dangjian',name:'Media Center',
                       submenu:[{url:"/News/index_en",name:"Press Releases"}
                       ]},
                    {id:'news',name:'Investor Relations',
                        submenu:[{url:"/Investor-Relationship_en",name:"Investor Relations"},{url:"/Enterprise-information_en",name:"Corporate Information"},{url:"/Investor-Contact_en",name:"IR Contact"},{url:"/Announcements-and-circulars_en",name:"Announcements and Circulars"},{url:"/Annual-Report_en",name:"Financial Reports"},{url:"/Corporate-Governance_en",name:"Corporate Governance"}]},  
                    

                ],

      foot_menuList:[
                    {url:'/About-cmer_en',name:'About C-MER'},
                    {url:'/Business-milestones_en',name:'Business Milestones'},
                    {url:'/Social-Responsibilities_en',name:'Social Responsibility'},
                    {url:'/News/index_en',name:'Media Center'},
                    {url:'/Investor-Relationship_en',name:'Investor Relations'},
                    {url:'/Contact_en',name:'Contact Us'},

                ],
                foot_soical:[
                    {url:'https://www.facebook.com/cmereyecenter/',src:'/img/foot_fb.png'},
                    {url:'https://www.instagram.com/cmer_smile/',src:'/img/foot_ins.png'},
                    {url:'https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg',src:'/img/foot_youtube.png'},
                    // {url:'',src:'/img/foot_whatsapp.png'},

                ],

              foot_state:[
                 {url:'/disclamer_en',name:'Disclaimer'},
                 {url:'/statement_en',name:'Statement'},
              ],  

            }
        },
  

   
}

</script>


