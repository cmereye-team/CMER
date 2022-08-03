<template>
  <div class="theme-blue">
   

    <div class="header">
    <link href="/css/tailwind.min.css" rel="stylesheet">
  
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" id="header_bar">
    <b-navbar-brand to="/index_cn" class="flex items-center">
    
    <img src="/img/logo.svg" alt="" srcset=""> 
    <p><span class="brand_gs">希玛眼科医疗控股有限公司</span>
     <span class="brand_gp">(股份代号：3309) </span></p>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 
   <b-nav-item-dropdown text="Color" active right  id="chose_color" hidden>
          <b-dropdown-item href="#">黄色</b-dropdown-item>
          <b-dropdown-item href="#">蓝色</b-dropdown-item>
    </b-nav-item-dropdown>

        <b-nav-item-dropdown v-for="(item, idx)  in menuList" :key="idx" :text='item.name' right   >
          <b-dropdown-item v-for="(subitem, idx) in item.submenu" :key="idx" :to="subitem.url" keep-alive >{{subitem.name}}</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <nuxt-link class="btn btn-primary nav-contact" role="button" to="/Contact_cn">联络我们</nuxt-link>

         <div class="language">
      <div class="language_box">

 
 
<b-dropdown size="sm"   variant="link" toggle-class="text-decoration-none" dropleft  no-caret>
    <template #button-content> 
     <img src="/img/earth.svg">
    </template>
   <nuxt-link to="/Contact">繁體中文</nuxt-link>
  <nuxt-link to="/Contact_cn">简体中文</nuxt-link>
 <nuxt-link to="/Contact_en">English</nuxt-link>
    
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
      
      <div class="part_content_bg part_content_contact">
         <b-container fluid="md" class="content part_content ">
         <h4 class="font-bold mt-10 mb-10 tracking-widest">&nbsp; </h4>
  <p class="mt-10"> &nbsp;</p>
  <h4 class="font-bold mt-10 tracking-widest">地址：</h4>
 <p class="mt-2 tracking-widest">中环毕打街1-3号中建大厦1535室</p>

  <h4 class="font-bold mt-10 tracking-widest">一般查询：</h4>
 <p class="mt-2 tracking-widest">+852 3997 3266</p>
   <h4 class="font-bold mt-10 tracking-widest">传真：</h4>
 <p class="mt-2 tracking-widest">+852 3996 8212</p>
   <h4 class="font-bold mt-10 tracking-widest">电邮：</h4>
 <p class="mt-2 tracking-widest"><a href="mailto:info@hkcmer.com">info@hkcmer.com</a></p>
 
<!-- <b-button class="bg-white rounded-3xl border-none mt-20 px-4 tracking-widest text-blue-400" variant="outline-primary">聯絡我們</b-button> -->



        

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
import Header from '../components/Header_cn.vue';
import Footer from '../components/Footer_cn.vue';
export default {
  name: 'Contact_cn',
  data(){
            return {

            }
        },
        head: {
    title: '希玛 | 联络我们',
    meta: [
      { charset: 'utf-8' },
      { name:'mobile-web-app-capable' , content:'yes'},
      { name:'revisit-after', content:'10 days'},
      { name:'viewport', content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      { name:'theme-color', content:'#ffffff'},
      { name:'msapplication-navbutton-color', content:'#ffffff'},
      { name:'apple-mobile-web-app-status-bar-style', content:'#ffffff'},
      { name:'apple-mobile-web-app-capable', content:'yes'},
      { name:'apple-mobile-web-app-title', content:'希玛'},
      { name:'format-detection', content:'telephone=no'},
      { name:'msapplication-tap-highlight', content:'no'},
      { name:'author', content:'希玛'},
      { name:'robots', content:'index,follow'},
      { hid: 'description', name: 'description', content: '希玛眼科医疗控股有限公司 (「希玛」或「本集团」) (股份代号：3309) 为香港及大湾区领先的连锁专科医疗集团，总部设于香港，并于内地多个主要城市建立连锁医院网路。' },
      { hid: 'keywords', name: 'keywords', content: '3309 希玛 地址　一般查询　传真　电邮' }
      
    ],
  },

     data(){
            return {
                menuList:[
                    {id:'about',name:'关于希玛',
                       submenu:[{url:"/About-cmer_cn",name:"集团介绍"},{url:"/Corporate-culture_cn",name:"愿景及使命"},{url:"/Business-milestones_cn",name:"业务里程碑"},{url:"/Board-of-directors_cn",name:"董事会"}]
                    },
                    {id:'service',name:'业务概览',
                       submenu:[{url:"/Services-In-Hong-Kong_cn",name:"香港医疗服务"},{url:"/Services-In-China_cn",name:"内地医疗服务"}]},
                    {id:'link',name:'社会责任',
                       submenu:[{url:"/Report-governance_cn",name:"报告及管治"},{url:"/Awards_cn",name:"奖项殊荣"},{url:"/Caring-about-staff_cn",name:"重视员工"},{url:"/Social-Responsibilities_cn",name:"社会责任"}]},
                    {id:'dangjian',name:'新闻中心',
                       submenu:[{url:"/News/index_cn",name:"新闻稿"}
                       ]},
                    {id:'news',name:'投资者关系',
                        submenu:[{url:"/Investor-Relationship_cn",name:"投资者关系"},{url:"/Enterprise-information_cn",name:"企业资料"},{url:"/Investor-Contact_cn",name:"投资者联系"},{url:"/Announcements-and-circulars_cn",name:"公告及通函"},{url:"/Annual-Report_cn",name:"财务报告"},{url:"/Corporate-Governance_cn",name:"企业管治"}]},   
                    


                ]


            }
        },
}
</script>
