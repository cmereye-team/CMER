<template>
  <div class="theme-blue">
  
    <Header/>


      <div class="banner_about banner_Awards">
        <div class="banner_fixed">专业至上 屡获殊荣</div>
          <div class="banner_text"><p>奖项殊荣</p></div>


      </div>
      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_Awards">
 

<div class="app_info" v-html="AboutData.content.rendered"></div>

          </b-container>
          </div>
    

      <template>
        <Footer/>
</template>


  </div>
   
</template>

<style>
.dark_blue,.part_content_Awards .font-normal{color: #005CAF;}
.light_blue{color: #51A8DD;}

.part_content_Awards table thead{background: #51A8DD;}
.part_content_Awards table thead th{padding: 1.5rem .8rem;color: #ffffff;font-size: 20.4188px; line-height: 30px;}
.part_content_Awards table tr th h2{font-size: 20px;color: #51A8DD;letter-spacing: 3px;line-height: 1.5;}
.part_content_Awards table ul li{color: #005CAF;line-height: 2; letter-spacing: .1em;font-weight: normal;    list-style: inside;}
.part_content_Awards table ul li::marker{display: inline;}
.part_content_Awards table ul li p{display: inline;}
.banner_Awards{background-image:url(/pic/banner_pc_Awards.jpg) ;}
.banner_Awards .banner_fixed{ letter-spacing: 0.2em;color: #005CAF;font-size: 26px;text-shadow:2px 2px 5px #ffffff; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; z-index: 999; display: flex; justify-content: center; align-items: center; }

.part_content_Awards p{line-height: 2;letter-spacing: .1em;}
.nav-tabs,.nav-tabs .nav-link{border: none;color: #005CAF;padding-left: 0;padding-right: 0;margin-left: 2rem;margin-right: 2rem;letter-spacing: .5em;text-align: center;text-indent: .5em;}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{color: #85CEFA;position: relative;}
.nav-tabs .nav-link.active::before{position: absolute;content: '';width:80%;height: 2px; background-color: #51A8DD;bottom: 0px;left: 0;right: 0;margin:  auto;}
.Awards_head{font-size: 1.4rem;font-weight: normal;color: #005CAF;}
.Awards_year{font-size: 1.6rem;font-weight: bold;color: #51A8DD;letter-spacing: 0.2em;margin: 20px 0;}
.Awards ul li{font-size: 1.2rem;color: #005CAF;line-height: 2;letter-spacing: 0.1em;}
.Awards .Awards_r ul li{color: #51A8DD;  }

.part_content_Awards p.tracking-w150{letter-spacing: 2em;}

@media screen and (min-width:992px){

  .banner_text p{font-size:40px}

  .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

.min-h64x{min-height: 64px} 
.mt-5w{margin-top:5vw !important}
.mt-96x{margin-top:96px !important}

}



@media screen and (max-width: 768px) {
  .part_content_Awards .table p,.part_content_Awards .table li{font-size: 15px;}
  .part_content_Awards table tr th h2{font-size: 24px;}
  .banner_Awards .banner_fixed{letter-spacing: 0.2em;font-size: 22px;}
}
</style>

<script>
import Header from '../components/Header_cn.vue';
import Footer from '../components/Footer_cn.vue';
import axios from 'axios';
export default {
  components:{Header,Footer},
  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/266`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	}, 
  name: 'Awards',
   data() {
      return {
          AboutData:[],
      }
    },
     head: {
    title: '投资者联繫',
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
      { hid: 'description', name: 'description', content: '希玛凭藉专业至上精神及优质服务，多年来赢得众多奖项，印证了我们的医疗名牌备受社会各界的认同。' },
      { hid: 'keywords', name: 'keywords', content: '医疗名牌 僱主文化奖 香港星级品牌企业奖 商界展关怀 上市医疗服务企业80强 社会办医•医院集团100强 深圳女商杰出贡献奖 2021深圳500强企业榜单 患者满意度评分 深圳创新社会办医潮头奖 2021年度中国品牌医生团队 全国医疗品牌运营创新优秀案例 最具价值医药及医疗公司 亚洲最佳价值服务大奖 香港旅游业十优推介 香港最优秀企业大奖 香港服务名牌 民营医院50强 中国医疗机构品牌传播百强 最佳非公医疗创新企业 企业社会责任典范奖 行业影响力人物 领军企业奖 跨国公司突出贡献企业领袖人物 优秀管理者 全国优秀外商投资企业双优企业 和谐劳动关係促进奖 深圳外商投资企业协会优秀会员 10大医生创业家 第三届深圳新生代创业风云人物 医疗服务金奖 公益荣誉奖' }
      
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
