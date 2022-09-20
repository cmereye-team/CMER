<template>
  <div class="theme-blue">

<Header/>

    <div class="banner_about banner_about_contact">
      <div class="banner_text">
        <p>投资者联系</p>
      </div>
    </div>
    <div class="part_content_bg relative">
      <b-container fluid="md" class="content part_content part_content_about_template mb-20" > 

<div class="text-center">
   <h4 class="font-bold mt-10 mb-10 tracking-widest">希玛眼科医疗控股有限公司</h4>
  <p class="mt-10"> &nbsp;</p>
  <h4 class="font-bold mt-10 tracking-widest">地址：</h4>
 <p class="mt-2 tracking-widest">香港毕打街1-3号中建大厦1535室</p>

  <h4 class="font-bold mt-10 tracking-widest">电话：</h4>
 <p class="mt-2 tracking-widest">(852) 3997 3266</p>

   <h4 class="font-bold mt-10 tracking-widest">电邮：</h4>
 <p class="mt-2 tracking-widest">info@hkcmer.com</p>
</div>

      </b-container>
    </div>
  
  <template>
  <Footer/>
</template>

  </div>
</template>
<style scoped>
.banner_about_contact {
  background-image: url(/pic/banner_pc_contact.jpg);
  background-position: center;
  background-size: cover;
}
.font-normal {
  font-weight: normal !important;
}
@media screen and (min-width:992px){

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}
</style>
<script>
import Header from "../components/Header_cn.vue";
import Footer from "../components/Footer_cn.vue";
export default {
  components:{Header,Footer},
  name: "Investor-Contact",
  data() {
    return {};
  },
     head:{
    title: '投资者联繫',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: '希玛眼科医疗控股有限公司 '
      },
      {
        name: 'keywords',
        content: '投资者联繫 希玛眼科医疗控股'
      }
    ]
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
                    


                ],

                  foot_menuList:[
                    {url:'/About-cmer_cn',name:'关于希玛'},
                    {url:'/Services-In-Hong-Kong_cn',name:'业务概览'},
                    {url:'/Social-Responsibilities_cn',name:'社会责任'},
                    {url:'/News/index_cn',name:'新闻中心'},
                    {url:'/Investor-Contact_cn',name:'投资者关系'},
                    {url:'/Contact_cn',name:'联络我们'},

                ],
                foot_soical:[
                    {url:'https://www.facebook.com/cmereyecenter/',src:'/img/foot_fb.png'},
                    {url:'https://www.instagram.com/cmer_smile/',src:'/img/foot_ins.png'},
                    {url:'https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg',src:'/img/foot_youtube.png'},
                    // {url:'',src:'/img/foot_whatsapp.png'},

                ],

              foot_state:[
                 {url:'/disclamer_cn',name:'私隐政策'},
                 {url:'/statement_cn',name:'免责声明'},
              ]  


            }
        },

};
</script>





