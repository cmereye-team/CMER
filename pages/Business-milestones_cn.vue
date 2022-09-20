<template>
  <div class="theme-blue">
    
    <Header/>


      <div class="banner_about banner_History">
          <div class="banner_text"><p>业务里程碑</p></div>
      </div>
      <div class="part_content_bg part_History_bg">
         <b-container fluid="md" class="content part_content part_History_content">
       
<div class="app_info" v-html="AboutData.content.rendered"></div>


          </b-container>
          </div>
  

    <template>
      <Footer/>
</template>


  </div>
   
</template>
<style>

.banner_History{ background-image: url(/pic/banner_pc_milestones.jpg);}

.part_History_content{border-left: 1px solid #51A8DD;;}
.part_History .part_History_item .histroy_line {position: relative;}
.part_History .part_History_item .histroy_line::before {position: absolute;content: '';width: 16px;height: 16px;left: -18.5px;top: 0;bottom: 0;margin: auto;border: 10px solid #ffffff;background: #005CAF;box-sizing: content-box;border-radius: 50%;}
.part_History .part_History_item .histroy_line::after{position: absolute;content: '';width: 100%;height: 1px;background: #005CAF;top: 18px;z-index: -1;}
.part_History .part_History_item p{margin-left: 5rem;margin-bottom: 20px;font-size: 16px}
.part_History .part_History_item p:last-child{margin-bottom: 60px;}
.part_History .part_History_item .histroy_line p{color: #51A8DD;font-size: 20px;font-weight: bold;display: table;position: relative;z-index: 999;background: #ffffff;padding: 0 10px;}
.part_History .part_History_item>p strong{padding-left: 10px;padding-right: 40px;font-weight: bold;letter-spacing: normal;min-width: 85px;text-align: right;}
.part_History .part_History_item>p{letter-spacing: 0.1em;   color: #707070;display: flex;font-weight: 300;}


@media screen and (min-width:992px){

  .banner_text p{font-size:40px}

  .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}


@media screen and (max-width: 768px){
.part_History_bg{padding: 0 0 0 15px;}  
.part_History_content {padding-right: 0 !important;}
.part_History_content .part_History_item p{padding-right: 15px !important;}
.part_History .part_History_item p{margin-left: 1rem;letter-spacing: 0;font-size: 14px;}
.part_History .part_History_item p strong{font-size: 16px;font-weight: bold;min-width: 90px;}
.part_History .part_History_item .histroy_line::after{top: 18px;}
.part_History .part_History_item .histroy_line::before {left: -33.5px;}
.part_History .part_History_item .histroy_line p{font-size: 1.3rem;}
.part_History .part_History_item p:last-child{margin-bottom: 50px;}

}
</style>

<script>
import Header from '../components/Header_cn.vue';
import Footer from '../components/Footer_cn.vue';
import axios from 'axios';
export default {
  components:{Header,Footer},
  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/264`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	}, 
  name: 'Business-milestones',
  data(){
            return {
                AboutData:[]

            }
        },
        head: {
    title: '希玛 里程碑 | 里程碑',
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
      { hid: 'description', name: 'description', content: '希玛眼科医疗控股有限公司 (“希玛”或“本集团”) (股份代号：3309) 为香港及大湾区领先的连锁专科医疗集团，总部设于香港，并于内地多个主要城市建立连锁医院网路。' },
      { hid: 'keywords', name: 'keywords', content: '里程碑 希玛 林顺潮 希玛林顺潮眼科中心 希玛微笑激光矫视中心 希玛林顺潮眼科医院 希玛（环球）肿瘤科中心 嘉宾眼科 深圳爱康健齿科 香港上市' }
      
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
                 {url:'/disclamer_cn',name:'私隐政策'},
                 {url:'/statement_cn',name:'免责声明'},
              ]  


            }
        },
  

   
}

</script>


