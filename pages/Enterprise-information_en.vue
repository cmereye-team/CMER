<template>
  <div class="theme-blue tanslate_yin">
   
   <template>

  <Header/>
</template>


    <div class="banner_about banner_about_Enterprise tanslate_yin">
      <div class="banner_text xs_banner_en_text">
        <p>Corporate Information</p>

      </div>
    </div>
    <div class="part_content_bg relative">
      <b-container fluid="md" class="content part_content part_content_about_template mb-20" > 
<div class="text-center">
   <h4 class="font-bold mt-10 tracking-widest">Company name</h4>
 <p class="mt-2 tracking-widest">C-MER EYE CARE HOLDINGS LIMITED</p>

  <h4 class="font-bold mt-10 tracking-widest">Registered office</h4>
 <p class="mt-2 tracking-widest">Cricket Square, Hutchins Drive  <br> P.O.Box 2681 Grand Cayman<br>KY1-1111 <br>Cayman Islands</p>

  <h4 class="font-bold mt-10 tracking-widest">Head office and principal place of business in Hong Kong</h4>
 <p class="mt-2 tracking-widest">Suite 1535, Central Building, 1-3 Pedder Street, Hong Kong</p>

   <h4 class="font-bold mt-10 tracking-widest">Company's website</h4>
 <p class="mt-2 tracking-widest">www.cmereye.com</p>
</div>



      </b-container>
    </div>
  
  <template>
  <Footer/>
</template>


  </div>
</template>
<style scoped>
.banner_about_Enterprise { background-image: url(/pic/banner_pc_Enterprise.jpg); background-position: center; background-size: cover; }
.font-normal { font-weight: normal !important; }


@media screen and (min-width:992px){

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

</style>
<script>
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
export default {
  components:{Header,Footer},
  name: "Enterprise-information",
  data() {
    return {};
  },
   head:{
    title: 'C-MER Corporate Information',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'C-MER Corporate Information'
      },
      {
        name: 'keywords',
        content: 'C-MER| C-MER Eye Care Holdings Limited'
      }
    ]
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
        
};
</script>





