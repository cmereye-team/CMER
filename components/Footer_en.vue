<!-- Please remove this file from your project -->
<template>
  <div class="footer part">
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

<script>
export default {
  name: 'Footer_en',
  data(){
            return {
                foot_menuList:[
                    {url:'/About-cmer_en',name:'About C-MER'},
                    {url:'Services-In-Hong-Kong_en',name:'Business Milestones'},
                    {url:'/Social-Responsibilities_en',name:'Social Responsibility'},
                    {url:'News-Release_en',name:'Media Center'},
                    {url:'Investor-Contact_en',name:'Investor Relations'},
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
              ]  
            }
        },
     mounted () {
            $(".language .language_box ul a").each(function(){
          
        $(this).click(function(){
          var index = $(this).index();
          var text = $(this).text();
          if(index == 0){
            console.log(3);
            $("HTML").addClass("zh_an");
              $("HTML").removeClass("zh_cn");
             $("HTML").removeClass("zh_en");
          }

          if(index == 1){
             console.log(33);
            $("HTML").addClass("zh_cn");
             $("HTML").removeClass("zh_an");
             $("HTML").removeClass("zh_en");
          }

          if(index == 2){
             console.log(333);
              $("HTML").addClass("zh_en");
              $("HTML").removeClass("zh_an");
             $("HTML").removeClass("zh_cn");
          }

           console.log(index);

        })


      })
     }   
}

</script>

<style>

.tanslate_yin body,.tanslate_yin div,.tanslate_yin tr,.tanslate_yin td,.tanslate_yin th,.tanslate_yin p,.tanslate_yin span,.tanslate_yin a,.tanslate_yin h1,.tanslate_yin h2,.tanslate_yin h3,.tanslate_yin h4,.tanslate_yin h5,.tanslate_yin h6{font-family:Arial !important}

body p,body span{font-size: 16px}

.theme-blue .text-gray-500{font-size:18px}
.part_content_introduce p{font-size: 18px;}
.part_bussiness .part_History_item p{font-size: 16px}

.table thead th{font-size: 20px;white-space: nowrap}
.table td{font-size: 16px}

.banner_text p{letter-spacing: 0.1em}



.footer { background: linear-gradient(110.25deg, #85CEFA 5.86%, #51A8DD 100%);color: #ffffff;}
.footer .footer_logo{width:360px}
.footer_address p{letter-spacing: initial;}
.footer_nav_link ul li {margin-left: 30px !important;font-size: 18px}
.footer_social .footer_privacy span a{font-size: 18px}

@media screen and (min-width:992px){
 .dis-none{display: none !important}
  .inside-text{font-size:18px}
  .lettle-1-en{letter-spacing: 0.1em !important}
  .tanslate_yin .navbar-light .navbar-nav .nav-link{letter-spacing: .1em !important}

}

@media screen and (min-width: 1023px) and (max-width: 1201px){

  .footer_nav_link ul li {font-size: 16px}
  .footer_social .footer_privacy span a{font-size: 16px}
}

@media screen and (max-width: 992px){
  .xs-mt-100x{margin-top:100px !important}
  .xs-mt-27w{margin-top:27vw !important}
  .xs-letter-1em{letter-spacing: 0.1em !important}
  .xs-align-bottom{vertical-align: bottom !important;}
  .xs-pl-initial{padding-left: initial !important}
   .xs-letter-initial{letter-spacing: initial !important}

  .xs_banner_en_text p{letter-spacing: 0.1em !important}

  .xs_en_part_line1-6 p{line-height: 1.6 !important}

  .zh_en_table{overflow-x: scroll !important;}
  .zh_en_table table{overflow-x: scroll !important;width: 136vw !important;}
  .banner_xs_en_Awards .banner_fixed{left:12px !important}

  .lang_news .dropdown-menu{display: flex;}
  .lang_news .dropdown-menu .dropdown-item{padding: 0.25em}
  .navbar-light .navbar-brand p span{font-size:14px}

}

</style>
