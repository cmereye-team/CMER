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
</template>

      <div class="banner_about banner_Release tanslate_yin">
          <div class="banner_text xs_banner_en_text"><p>Press Releases</p></div>
      </div> 

      <div class="part_content_bg tanslate_yin">
         <b-container fluid="md" class="content part_content part_content_Release">
          
<div class="part_Release tanslate_yin part_news_en">
<div class="flex justify-between items-center">
  <div class="year_text tracking-widest"><p class="text-2xl underline pl-4 xs-pl-initial">2022</p> </div>
<div class="year_chose flex items-center">
   

   <b-dropdown text="years" variant="outline-primary" class="m-2 xs-letter-1em">
    <b-dropdown-item href="#">2022</b-dropdown-item>
    <b-dropdown-item href="#">2021</b-dropdown-item>
    <b-dropdown-item href="#">2020</b-dropdown-item>
    <b-dropdown-item href="#">2019</b-dropdown-item>
  </b-dropdown> 

<b-button class="newslist_close xs-letter-1em"  variant="primary">clean</b-button>
    
   
  
  </div>
</div>

 

 
<table class="w-full mt-10 newslist tanslate_yin new_en_release">

  <tbody> 
    

  <tr> <td>2022-03-29</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20220329_Eng_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER achieves record-high revenue in FY21 of HK$1.1 billion, a YoY increase of 59%  Mainland China and Hong Kong businesses maintain high growth C-MER enters multiple specialized medical services whilst continuing to expand its core ophthalmic business</p></a></td> </tr>

  <tr> <td>2022-02-22</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20220222_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>Amount of Rapid Antigen Kits Donated to the Underprivileged Families has Doubled to 600,000 (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2022-02-16</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20220216_Eng_Final.pdf" target="_blank" rel="nofollow"> 
    <p>Hong Kong and Shenzhen Join Forces to Fight Against Covid C-MER Medical Partners with Shenzhen YHLO to Donate 300,000 COVID-19 Rapid Antigen Kits to the Underprivileged in Hong Kong</p></a></td> </tr>
  
  <tr> <td>2021-12-13</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20211213_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>PolyU Collaborates with C-MER Eye Care to Nurture Hong Kong’s Young Optometrists in the Greater Bay Area (Chinese only)</p></a></td> </tr>

  <tr> <td>2021-09-03</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20210903_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Forms Alliance with Shenzhen CKJ to Jointly Set a New Benchmark of Cooperation in Holistic Healthcare in the Greater Bay Area (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2021-08-26</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20210826_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Sets Up a Joint Venture to Launch R&D and Apply to NMPA for OK Lens Registration in China (Chinese only)</p></a></td> </tr>
  
  <tr> <td>2021-08-23</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20210823_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Oncology is Officially Established and Commences Operations in September 2021 (Chinese only)</p></a></td> </tr>

  <tr> <td>2021-08-18</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20210818_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Pledges to Expand its Business Network to Foshan, Dongguan, Fuzhou and Jieyang to Deliver Quality Eye Care Services to the People in the 
      Short Run (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2021-03-31</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20210331_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Delivers 21.4% Growth of Financial Results in 2020 The Company Grows Rapidly with Hong Kong Business Expanding to Other Specialties and the Opening 
      of Two Eye Hospitals in the Greater Bay Area Within this Year (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2020-08-28</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20200828_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Records V-Shaped Recovery of Total Revenue in the Second Quarter of 2020  Recovery momentum remains resilient in July and August (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2020-03-31</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20200331_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Progresses Well as Planned in 2019 Total Average Revenue Increases by 34.2% as Compared with Last Year (Hong Kong: 30.7%, Mainland: 37.8%) 
      Profit Declines Slightly by 8.1% due to Several Hospitals are still at the Stage of Investment (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2020-01-21</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20200121_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care will Complete Expanding its Business Operations in  Beijing, Shanghai, Guangzhou, Shenzhen and the Greater Bay Area Within this Year (Chinese only)</p></a></td> </tr>
    
    
  <tr> <td>2020-01-08</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20200108_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care and Chairman Dr. Lam Shun Chiu Dennis Receive Multiple Awards in Shanghai and Shenzhen (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2019-08-27</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20190827_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>C-MER Eye Care Achieves Sustained Rapid Growth in Revenue and Net Profit in First Half of the Year  and will Accelerate Development in Shenzhen and the Greater Bay Area (Chinese only)</p></a></td> </tr>
    
  <tr> <td>2018-06-26</td> <td><a class="table-cell" href="https://www.cmereye.com/wp-content/uploads/2022/07/20180626_Eng_Final.pdf" target="_blank" rel="nofollow"> 
    <p>Honored to Receive the Presidents Award from the Community Chest of Hong Kong</p></a></td> </tr>
              
          
    </tbody>
          
</table>



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

<script>
 
import Header from '../../components/Header_en.vue';
import Footer from '../../components/Footer_en.vue';
import axios from 'axios';

         
export default {
  async asyncData({ app, req, query, params,store}){
		  const  newlistData = await axios.get('https://www.cmereye.com/wp-json/wp/v2/posts?categories=7&page=1');
      const  whitesData = await axios.get('https://www.cmereye.com/wp-json/wp/v2/posts?categories=7&page=2');
		  return {
		   newlist: newlistData.data,
        whites: whitesData.data,
		  };
     
	}, 
	
head: {
    title: ' C-MER Press Releases',
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
      { hid: 'description', name: 'description', content: 'C-MER press releases' },
      { hid: 'keywords', name: 'keywords', content: 'C-MER press releases' }
      
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

@media screen and (min-width:992px){

  .part_Release table tr td:nth-child(1){min-width: 160px}
  .part_Release table tr td:nth-child(2) p{padding-right: 6vw;font-size: 18px}
  .part_news_en table tr td{font-size: 18px !important}
}

@media screen and (max-width:768px) {
  .part_Release table tr td:nth-child(1){padding: 10px .5rem !important;min-width: 110px;}
  .part_Release table tr td:nth-child(2){padding-left: .5rem !important;padding-right: 1rem;}
  .part_Release table tr::after{width: 10px;height: 10px;right: 10px;border-width: 2px;}

  .navbar-nav .language .lang_news{top:-45px !important}
}
</style>
