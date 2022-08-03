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
  <nuxt-link to="/Enterprise-information">繁體中文</nuxt-link>
   <nuxt-link to="/Enterprise-information_cn">简体中文</nuxt-link> 
 <nuxt-link to="/Enterprise-information_en">English</nuxt-link>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
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





