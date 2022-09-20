/* <template>
  <div class="theme-blue tanslate_yin">
  

  <template>

  <Header/>
</template>
      
      <div class="part_content_bg part_content_contact tanslate_yin">
         <b-container fluid="md" class="content part_content ">
         <h4 class="font-bold mt-10 mb-10 tracking-widest">&nbsp; </h4>
  <p class="mt-10"> &nbsp;</p>
  <h4 class="font-bold mt-10 tracking-widest">Address:</h4>
 <p class="mt-2 tracking-widest">Suite 1535, Central Building, 1-3 Pedder Street, Central</p>

  <h4 class="font-bold mt-10 tracking-widest">General Enquiry:</h4>
 <p class="mt-2 tracking-widest">+852 3997 3266</p>
   <h4 class="font-bold mt-10 tracking-widest">Fax:</h4>
 <p class="mt-2 tracking-widest">+852 3996 8212</p>
   <h4 class="font-bold mt-10 tracking-widest">Email:</h4>
 <p class="mt-2 tracking-widest"><a href="mailto:info@hkcmer.com">info@hkcmer.com</a></p>
 



        

          </b-container>
          <div class="map">
  <a href="https://goo.gl/maps/DrV9huj8Xcf37heu8" target="_blank"><img src="/img/googlemap.svg" alt="" srcset=""></a>
  <a class="ml-4" href="https://j.map.baidu.com/e7/6Wx" target="_blank"><img src="/img/baidumap.svg" alt="" srcset=""></a>
</div>
          </div>


  </div>
   
</template>

<style>
.part_content_contact{font-size: 20px; height: 100vh;background: linear-gradient(110.25deg, #85CEFA 5.86%, #51A8DD 100%); display: flex;justify-content: center;align-items: center;text-align: center;color: #ffffff;}
.part_content_contact.part_content_bg::after{bottom: 0;top: 0; margin: auto 0 !important;}
.part_content_contact .map{position: absolute;bottom:30px;right:100px;display: flex;justify-content: space-around;align-items: center;}
.part_content_contact .map img{width: 100px;height: 100px;margin: 0 auto;display: block;}
.part_content_contact .map a{transition: all .3s ease;width: 100px;height: 100px;border-radius: 50%;overflow: hidden;}
.part_content_contact .map a:hover{transform:rotateX(-15deg) rotateY(15deg) rotateZ(-15deg) translate(3px,-3px);box-shadow: 3px 3px 10px lightgray;}

@media screen and (min-width: 992px){

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}
}

@media screen and (max-width:768px) {
.part_content_contact {display: block;}
.part_content_contact .map{position: unset !important;justify-content: center;}  
.part_content_contact .map img{width: 70px;height: 70px;}
}
 

</style>

<script>
import Header from '../components/Header_en.vue';
import Footer from '../components/Footer_en.vue';
export default {
  components:{Header,Footer},
  name: 'Contact_en',
   data(){
            return {

            }
        },
        head: {
    title: 'C-MER | Contact Us',
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
      { hid: 'description', name: 'description', content: 'C-MER Eye Care Holdings Limited (“C-MER” or “the Group”; Stock Code: 3309) is a leading specialty chain group in Hong Kong and the GBA. Headquartered in Hong Kong, the Group has developed an extensive hospital chain network in many major cities in the Mainland. Guided by its “patient-centered” philosophy, C-MER is committed to providing professional, high-quality yet affordable medical services.' },
      { hid: 'keywords', name: 'keywords', content: '3309 C-MER| Address|　General Enquiry|　Fax| Email' }
      
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

            }
        },
}
</script>
 */