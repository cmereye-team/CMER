<template>
  <div class="theme-blue">
 

   <Header/>
      
      <div class="part_content_bg part_content_contact statement" style="height:auto;color:#707070;background:#fff">
      <b-container fluid="md" class="content part_content container-md">

      <h1>私隐政策</h1> 


 <div class="app_info" v-html="disclamerData.content.rendered"></div>

          </b-container>
 
 
 </div>  
   
   <template>
  <Footer/>
</template>
    

  </div>
   
</template>

<style>

@media screen and (min-width:992px){

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}



</style>

<script>
import Header from '../components/Header_cn.vue';
import Footer from '../components/Footer_cn.vue';
import axios from 'axios';
export default {
  components:{Header,Footer},
   async asyncData({ app, req, query, params,store}){
		  const  disclamerData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/394`);
		  return {
		    disclamerData: disclamerData.data,
		  };
     
	}, 
  name: 'disclamer',
  data(){ return { } },
  head: {
    title: '希玛眼科医疗控股有限公司 | 希玛眼科 | 希玛 | 私隐政策',
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
      { hid: 'keywords', name: 'keywords', content: '3309 希玛 连锁专科医疗集团 私隐政策　个人资料收集声明 资料之目的及用途 资料之转移 资料之查阅' }
      
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
                 {url:'#',name:'私隐政策'},
                 {url:'/statement_cn',name:'免责声明'},
              ]  


            }
        },

}
</script>
