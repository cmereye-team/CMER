<template>
  <div class="theme-blue">
   

   <Header/>


      <div class="banner_about banner_Release">
          <div class="banner_text"><p>新闻稿</p></div>
      </div> 

      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_Release">
          
<div class="part_Release part_news_en">
<div class="flex justify-between items-center">
  <div class="year_text tracking-widest"><p class="text-2xl underline pl-4 ">2022</p> </div>
<div class="year_chose flex items-center">
   

   <b-dropdown text="年份" variant="outline-primary" class="m-2">
    <b-dropdown-item href="#">2022</b-dropdown-item>
    <b-dropdown-item href="#">2021</b-dropdown-item>
    <b-dropdown-item href="#">2020</b-dropdown-item>
    <b-dropdown-item href="#">2019</b-dropdown-item>
  </b-dropdown> 

<b-button class="newslist_close"  variant="primary">清除</b-button>
    
   
  
  </div>
</div>

 

 
<table class="w-full mt-10 newslist">

  <tbody> 
    <tr v-for="item in newlist" :data-date='item.date|dateFormat("yyyy")'> <td>{{item.date|dateFormat("yyyy-MM-dd")}}</td> 
    <td> <a class="table-cell"  :href="item.acf.post_pdf_link.url" target="_blank" rel="nofollow"> <p>{{item.title.rendered}}</p></a> </td> </tr>
    <tr> <td>2022-08-30</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/09/CMER_1H2022-Interiml-Results-Press-Release_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科2022年上半年总收益8.82亿港元，按年同比增长近70%</p></a></td> </tr>

  <tr> <td>2022-03-29</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20220329_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛2021年收益创新高逾11亿港元   同比增长59%</p></a></td> </tr>

  <tr> <td>2022-02-22</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20220222_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛医疗与深圳亚辉龙联手加大抗疫力度 捐赠基层市民新冠病毒快速检测包倍增至60万套</p></a></td> </tr>
    
  <tr> <td>2022-02-16</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20220216_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>港深携手同心抗疫 希玛医疗伙同深圳亚辉龙向香港基层市民 捐赠30万套新冠病毒快速测试包</p></a></td> </tr>
  
  <tr> <td>2021-12-13</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20211213_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>香港理工大学与希玛眼科合作于粤港澳大湾区培育香港年轻视光专才</p></a></td> </tr>

  <tr> <td>2021-09-03</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210903_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科联盟爱康健齿科，共同打造湾区医疗大健康合作新标杆</p></a></td> </tr>
    
  <tr> <td>2021-08-26</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210826_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科成立合资公司 启动OK镜研发及内地注册</p></a></td> </tr>
  
  <tr> <td>2021-08-23</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210823_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>“希玛香港中西肿瘤中心”正式成立并将于2021年9月开始提供服务</p></a></td> </tr>

  <tr> <td>2021-08-18</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210818_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科落实进入佛山、东莞、福州和揭阳 在短期内爲居民提供优质的眼科医疗服务 目标在6至9个月内陆续开业</p></a></td> </tr>
    
  <tr> <td>2021-03-31</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20210331_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科2020年业绩较去年增长21.4%， 公司发展迅速。香港业务扩展至其他专科， 内地今年将于大湾区新开两间眼科医院。</p></a></td> </tr>
    
  <tr> <td>2020-08-28</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200828_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科2020第二季总收入V型反弹，七、八月保持良好恢复势头。</p></a></td> </tr>
    
  <tr> <td>2020-03-31</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200331_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科2019年按计划稳步发展，总平均收益较去年增长。增长34.2% (香港: 30.7%；内地: 37.8%) 因有多间医院仍在投资期，故利润较去年微降8.1%</p></a></td> </tr>
    
  <tr> <td>2020-01-21</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200121_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科，北京、上海、广州、深圳以至大湾区布局 在今年内基本完成</p></a></td> </tr>
    
    
  <tr> <td>2020-01-08</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20200108_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科和主席林顺潮 上海、深圳连夺多个奬项</p></a></td> </tr>
    
  <tr> <td>2019-08-27</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20190827_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科半年营收及纯利持续高速增长 未来将加快深圳及大湾区发展</p></a></td> </tr>
    
  <tr> <td>2018-06-26</td> <td><a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/07/20180626_Chi_Final.pdf" target="_blank" rel="nofollow"> 
    <p>希玛眼科获公益金颁发“公益荣誉奖”</p></a></td> </tr>
              
          
    </tbody>
          
</table>


</div>
          </b-container>
          </div>
    
    <template>
  <Footer/>
</template>


  </div>
   
</template>

<script>
 
import Header from '../../components/Header_cn.vue';
import Footer from '../../components/Footer_cn.vue';
import axios from 'axios';

         
export default {
  components:{
  Header,
  Footer
},
  async asyncData({ app, req, query, params,store}){
		  const  newlistData = await axios.get('https://admin.cmereye.com/wp-json/wp/v2/posts?categories=8&page=1');
      //  const  whitesData = await axios.get('https://admin.cmereye.com/wp-json/wp/v2/posts?categories=8&page=2');
		  return {
		   newlist: newlistData.data,
      //  whites:  whitesData.data,
		  };
     
	}, 
	
head: {
    title: '新闻稿',
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
      { hid: 'description', name: 'description', content: '请阅读希玛眼科医疗控股有限公司的新闻稿，了解我们的最新发展。' },
      { hid: 'keywords', name: 'keywords', content: '新闻稿' }
      
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

@media screen and (min-width: 992px){

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
