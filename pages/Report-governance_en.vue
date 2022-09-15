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
       <nuxt-link to="/Report-governance">繁體中文</nuxt-link>
   <nuxt-link to="/Report-governance_cn">简体中文</nuxt-link>
  <nuxt-link to="/Report-governance_en">English</nuxt-link>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

      <div class="banner_about banner_governance tanslate_yin">
          <div class="banner_text xs_banner_en_text"><p>Reporting and Governance</p></div>
      </div>
     
 

      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_report">

            <b-row>
              <b-col md="6"><div class="part_governance flex justify-between  ">
              <a target="_blank" href="https://admin.cmereye.com/wp-content/uploads/2022/06/20220601cn.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book19.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2021</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/wp-content/uploads/2022/06/20220601cn.pdf">VIEW NOW</a> 
              </div>
           </div></b-col>
              <b-col md="6"><div class="part_governance flex justify-between  ">
             <a target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309%20ESG20.pdf">
              <div class="book">
                
                <div class="back"></div>
              <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
                <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
                <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
                <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
                <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
                <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
                <div class="front"><img src="/pic/book18.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2020</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309%20ESG20.pdf">VIEW NOW</a> 
              </div>
           </div></b-col>
           </b-row>

           <b-row class="mt-40">
              <b-col md="6"><div class="part_governance flex justify-between  ">
              <a target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020062300660_c.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book19.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2019</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020062300660_c.pdf">VIEW NOW</a> 
              </div>
           </div></b-col>
              <b-col md="6"><div class="part_governance flex justify-between  ">
             <a target="_blank" href="http://us.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/ltn20190723548.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book18.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2018</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190723549_c.pdf">VIEW NOW</a> 
              </div>
           </div></b-col>
           </b-row>
             



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

<script>
import Header from '../components/Header_en.vue';
import Footer from '../components/Footer_en.vue';
import axios from 'axios';
export default {
 /*  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/2`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	},  */
  name: 'Report-governance',
  data(){
            return {
                AboutData:[]

            }
        },
   head: {
    title: 'C-MER Reporting and Governance',
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
      { hid: 'description', name: 'description', content: 'C-MER Environmental, Social and Governance Report' },
      { hid: 'keywords', name: 'keywords', content: 'C-MER| C-MER Environmental, Social and Governance Report' }
      
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

<style>

.banner_governance{background-image:url(/pic/banner_pc_governance.jpg) ;}
.part_content_report p{color: #005CAF;line-height: 2;letter-spacing: .1em;margin-bottom: 60px;}
.desc{width: 65%;padding-left: 10%;}
.desc h2{font-size:30px;font-weight: bold; line-height: 36px; letter-spacing: 0.2em; text-transform: uppercase; /* 群青 */ color: #51A8DD; }
.desc .more{color: #005CAF;letter-spacing: .5em;font-weight: 300;font-size: 24px;padding-top: 20px; padding-bottom: 20px;padding-right: 30px;align-self: flex-end;border-bottom: 2px solid;position: relative;}
.desc .more::after{position: absolute;content: '';right: 0;top: 0;bottom: 0;margin: auto;width: 9px;height: 24px;background-repeat: no-repeat; background: url(/img/click_right.jpg);}


.book {
  transform-style: preserve-3d;
  position: relative;
  height: auto;width: auto;max-width: 400px;max-height: 540px;
  cursor: pointer;
  backface-visibility: visible;z-index: 999;
}
.book::after{position: absolute;content: '';width: 100%;height: 100%;background: #51A8DD;z-index: -1;right: -10px;bottom: -10px;}
.book .front{position: relative;}
.book .front img{display: block;}
.row .book{width:auto;height: auto;}
.row .book .front{position: relative;}

.front, .back, .page1, .page2, .page3, .page4, .page5, .page6 { transform-style: preserve-3d; position: absolute; width: 100%; height: 100%; top: 0; left: 0; transform-origin: left center; transition: transform .5s ease-in-out, box-shadow .35s ease-in-out;z-index: 999; } .front, .back { background: rgb(90, 185, 234); overflow: hidden; } .front img, .back img{object-fit: cover;} .page1 { background: #efefef; } .page2 { background: #efefef; } .page3 { background: #f5f5f5; } .page4 { background: #f5f5f5; } .page5 { background: #fafafa; } .page6 { background: #fdfdfd; } .book:hover .front { transform: rotateY(-160deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page1 { transform: rotateY(-150deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page2 { transform: rotateY(-30deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page3 { transform: rotateY(-140deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page4 { transform: rotateY(-40deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page5 { transform: rotateY(-130deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page6 { transform: rotateY(-50deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .back { transform: rotateY(-20deg) scale(1.1); }

@media screen and (min-width:992px){

  .banner_text p{font-size:40px}

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width: 768px) {
  .part_governance>a{max-width: 46%;}
  .part_governance .desc .more{font-size: 12px;}
  .part_content_report .row.mt-40{margin-top: 40px !important;}
  .part_content_report .row>div{margin-bottom: 40px;}
  .part_content_report .desc h2{font-size: 24px;}

}

</style>
