<template>
  <div class="theme-blue tanslate_yin">
   

   <template>

  <Header/>
</template>


  
      <div class="banner_about banner_about_culture tanslate_yin">
          <div class="banner_text xs_banner_en_text"><p>Vision and Mission</p></div>
      </div>

      <div class="part_content_bg tanslate_yin Corporate_en_left">
         <b-container fluid="md" class="content part_content part_content_about_culture text-justify part_con_en_culture  xs_en_part_line1-6">
 <div class="app_info" v-html="AboutData.content.rendered"></div>



          </b-container>
          </div>
   

   <template>
  <Footer/>
</template>


  </div>
   
</template>
<style>
.part_content_about_culture .text-blue-culture{color: #005CAF;}
.part_con_en_culture h2{color: #005CAF;font-style: normal; font-weight: 700; font-size: 24px; line-height: 30px; display: flex; align-items: center; letter-spacing: .1em;display: inline-block;border-bottom: 1px solid #005CAF;padding-bottom: 10px;}
.part_content_about_culture p{color: gray;line-height: 2.5;}

.banner_about_culture{background-image:url(/pic/banner_pc_culture2.jpg) ;}

@media screen and (min-width:992px){

  .banner_text p{font-size:40px}

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width:991px){

 .Corporate_en_left .part_content_about_culture p{text-align:left}
}


</style>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
  components:{Header,Footer},
  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/213`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	}, 
  name: 'Corporate-culture',
  modules: ['@nuxtjs/axios'],
  data(){
            return {
                AboutData:[]

            }
        },
        head: {
    title: 'C-MER Vision and Mission',
    meta: [
      { charset: 'utf-8' },
      { name:'mobile-web-app-capable' , content:'yes'},
      { name:'revisit-after', content:'10 days'},
      { name:'viewport', content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      { name:'theme-color', content:'#ffffff'},
      { name:'msapplication-navbutton-color', content:'#ffffff'},
      { name:'apple-mobile-web-app-status-bar-style', content:'#ffffff'},
      { name:'apple-mobile-web-app-capable', content:'yes'},
      { name:'apple-mobile-web-app-title', content:'CMER'},
      { name:'format-detection', content:'telephone=no'},
      { name:'msapplication-tap-highlight', content:'no'},
      { name:'author', content:'CMER'},
      { name:'robots', content:'index,follow'},
      { hid: 'description', name: 'description', content: 'Developing C-MER into a national brand of quality Hong Kong-style medical services.' },
      { hid: 'keywords', name: 'keywords', content: 'Hong Kong-style medical services| quality specialty medical services| multi-specialties' }
      
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
                    {url:'Services-In-Hong-Kong_en',name:'Business Milestones'},
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

