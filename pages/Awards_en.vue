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
</template>

      <div class="banner_about banner_Awards tanslate_yin banner_xs_en_Awards">
        <div class="banner_fixed">Our achievement of excellence in professionalism</div>
          <div class="banner_text xs_banner_en_text"><p>Awards and Recognitions</p></div>


      </div>
      <div class="part_content_bg tanslate_yin">
         <b-container fluid="md" class="content part_content part_content_Awards part_content_Awards_en">

<div class="app_info xs_en_part_line1-6" v-html="AboutData.content.rendered"></div>

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
.dark_blue,.part_content_Awards .font-normal{color: #005CAF;}
.light_blue{color: #51A8DD;}

.part_content_Awards table thead{background: #51A8DD;}
.part_content_Awards table thead th{padding: 1.5rem .8rem;color: #ffffff;font-size: 20.4188px; line-height: 30px;}
.part_content_Awards table tr th h2{font-size: 20px;color: #51A8DD;letter-spacing: 3px;line-height: 1.5;}
.part_content_Awards table ul{padding-left: initial}
.part_content_Awards table ul li{color: #005CAF;line-height: 2; letter-spacing: .1em;font-weight: normal;}
.part_content_Awards_en table ul li{list-style: disc;max-width: 75%;}
.part_content_Awards table ul li p{display: inline;}
.banner_Awards{background-image:url(/pic/banner_pc_Awards.jpg) ;}
.banner_Awards .banner_fixed{ letter-spacing: 0.2em;color: #005CAF;font-size: 26px;text-shadow:2px 2px 5px #ffffff; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; z-index: 999; display: flex; justify-content: center; align-items: center; }

.part_content_Awards p{line-height: 2;letter-spacing: .1em;}
.nav-tabs,.nav-tabs .nav-link{border: none;color: #005CAF;padding-left: 0;padding-right: 0;margin-left: 2rem;margin-right: 2rem;letter-spacing: .5em;text-align: center;text-indent: .5em;}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{color: #85CEFA;position: relative;}
.nav-tabs .nav-link.active::before{position: absolute;content: '';width:80%;height: 2px; background-color: #51A8DD;bottom: 0px;left: 0;right: 0;margin:  auto;}
.Awards_head{font-size: 1.4rem;font-weight: normal;color: #005CAF;}
.Awards_year{font-size: 1.6rem;font-weight: bold;color: #51A8DD;letter-spacing: 0.2em;margin: 20px 0;}
.Awards ul li{font-size: 1.2rem;color: #005CAF;line-height: 2;letter-spacing: 0.1em;}
.Awards .Awards_r ul li{color: #51A8DD;  }

.part_content_Awards p.tracking-w150{letter-spacing: 2em;}

@media screen and (min-width:992px){

  .mt-5w{margin-top:5vw !important}
  .banner_text p{font-size:40px}
  .part_content_Awards .font-en-normal{max-width: 440px}
  .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width: 768px) {
  .part_content_Awards .table p,.part_content_Awards .table li{font-size: 15px;}
  .part_content_Awards table tr th h2{font-size: 24px;}
  .banner_Awards .banner_fixed{letter-spacing: 0.2em;font-size: 22px;}
}
</style>

<script>
import Header from '../components/Header_en.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/237`);
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
    title: 'C-MER Awards and Recognitions',
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
      { hid: 'description', name: 'description', content: 'At C-MER , we have always placed a strong emphasis on professionalism and customer service excellence. It is with this focus that our strong brand is proud to have gained widespread recognition and won numerous industry accolades.' },
      { hid: 'keywords', name: 'keywords', content: ' professionalism| customer service excellence| Employer Culture Award| Hong Kong Star Brands Award -Enterprise Award| The Caring Company| Top 80 Listed Medical Service Enterprises| Top 100 Private Hospital Groups| Outstanding Contribution Award of Shenzhen Women Entrepreneurs| Shenzhen Top 500 Enterprises| patient satisfaction rating and ranking among all non-public Grade II, Grade I and unrated hospitals in Shenzhen| Grand Award of Shenzhen Innovative Private Hospitals| China Branded Doctor Team| Excellent Case Study of National Medical Brand Operational Innovation| Most Valuable Pharmaceutical and Medical Company Award| Asia Most Valuable Service Providers Awards| Hong Kong Tourism Top 10| Hong Kong Most Outstanding Business Awards| Hong Kong Top Service Brand Awards| Top 50 Private Hospitals| Top 100 Brand Communications of Chinese Medical Institutions| The Best Non-public Medical Innovative Institution| Corporate Social Responsibility Model Award| Industry Influencer| Leading Enterprise Award| Outstanding Contribution Corporate Leaders of Multinational Companies| Excellent Leadership Award| Double Distinction Award for Enterprises with Foreign Investment in China| Harmonious Labor Relationship Promotion Award| Excellent Member of Shenzhen Association of Enterprises with Foreign Investment| Top 10 Doctor Entrepreneurs| Shenzhen New Generation Entrepreneur| Gold Award in Medical Services| President Award' }
      
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
