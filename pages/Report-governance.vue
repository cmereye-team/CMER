<template>
  <div class="theme-blue">
 
  <Header/>


      <div class="banner_about banner_governance">
          <div class="banner_text"><p>報告及管治</p></div>
      </div>
     
 

      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_report">
            <b-row>
              <b-col md="6"><div class="part_governance flex justify-between  ">
              <a target="_blank" href="https://admin.cmereye.com/wp-content/uploads/2022/06/20220601cn.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book19.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2021</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/wp-content/uploads/2022/06/20220601cn.pdf">瀏覽</a> 
              </div>
           </div></b-col>
              <b-col md="6"><div class="part_governance flex justify-between  ">
             <a target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309%20ESG20.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book18.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2020</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309%20ESG20.pdf">瀏覽</a> 
              </div>
           </div></b-col>
           </b-row>

           <b-row class="mt-40">
              <b-col md="6"><div class="part_governance flex justify-between  ">
              <a target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020062300660_c.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book19.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2019</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020062300660_c.pdf">瀏覽</a> 
              </div>
           </div></b-col>
              <b-col md="6"><div class="part_governance flex justify-between  ">
             <a target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190723549_c.pdf">
              <div class="book">
                
                <div class="back"></div>
 <div class="page6"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page5"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page4"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="page3"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page2"><img src="/pic/book2.jpg" alt="" srcset=""></div>
  <div class="page1"><img src="/pic/book3.jpg" alt="" srcset=""></div>
  <div class="front"><img src="/pic/book18.jpg" alt="" srcset=""></div>
              </div>
             </a>
              <div class="desc flex justify-between flex-col">
                <h2>2018</h2>
                <a class="more text-right"  target="_blank" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190723549_c.pdf">瀏覽</a> 
              </div>
           </div></b-col>
           </b-row>
             



          </b-container>
          </div>
     <Footer/> 


  </div>
   
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
  components:{Header,Footer},
 /*  async asyncData({ app, req, query, params,store}){
		  const  aboutData = await axios.get(`https://admin.cmereye.com/wp-json/wp/v2/pages/2`);
      console.log( aboutData.data);  
		  return {
		    AboutData: aboutData.data,
		  };
     
	},  */
  name: 'Report-governance',
  data(){
            return {
                AboutData:[]

            }
        },
   head: {
    title: '投資者聯繫',
    meta: [
      { charset: 'utf-8' },
      { name:'mobile-web-app-capable' , content:'yes'},
      { name:'revisit-after', content:'10 days'},
      { name:'viewport', content:'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      { name:'theme-color', content:'#ffffff'},
      { name:'msapplication-navbutton-color', content:'#ffffff'},
      { name:'apple-mobile-web-app-status-bar-style', content:'#ffffff'},
      { name:'apple-mobile-web-app-capable', content:'yes'},
      { name:'apple-mobile-web-app-title', content:'希瑪'},
      { name:'format-detection', content:'telephone=no'},
      { name:'msapplication-tap-highlight', content:'no'},
      { name:'author', content:'希瑪'},
      { name:'robots', content:'index,follow'},
      { hid: 'description', name: 'description', content: '查閱最新的希瑪環境、社會及管治報告。' },
      { hid: 'keywords', name: 'keywords', content: '環境、社會及管治報告' }
      
    ],
  },

    data(){
            return {
                menuList:[
                    {id:'about',name:'關於希瑪',
                       submenu:[{url:"/About-cmer",name:"集團介紹"},{url:"/Corporate-culture",name:"願景及使命"},{url:"/Business-milestones",name:"業務里程碑"},           {url:"/Board-of-directors",name:"董事會"}]
                    },
                    {id:'service',name:'業務概覽',
                       submenu:[{url:"/Services-In-Hong-Kong",name:"香港醫療服務"},{url:"/Services-In-China",name:"內地醫療服務"}]},
                    {id:'link',name:'社會責任',
                       submenu:[{url:"/Report-governance",name:"報告及管治"},{url:"/Awards",name:"獎項殊榮"},{url:"/Caring-about-staff",name:"重視員工"},{url:"/Social-Responsibilities",name:"社會責任"}]},
                    {id:'dangjian',name:'新聞中心',
                       submenu:[{url:"/News",name:"新聞稿"}
                       ]},
                    {id:'news',name:'投資者關係',
                        submenu:[{url:"/Investor-Relationship",name:"投資者關係"},{url:"/Enterprise-information",name:"企業資料"},{url:"/Investor-Contact",name:"投資者聯繫"},{url:"/Announcements-and-circulars",name:"公告及通函"},{url:"/Annual-Report",name:"財務報告"},           {url:"/Corporate-Governance",name:"企業管治"}]},   
                    


                ]


            }
        },
        
}
</script>

<style>
.banner_governance{background-image:url(/pic/banner_pc_governance.jpg) ;}
.part_content_report p{color: #005CAF;line-height: 2;letter-spacing: .1em;margin-bottom: 60px;}
.desc{width: 65%;padding-left: 10%;}
.desc h2{font-size:30px;font-weight: bold; line-height: 36px; letter-spacing: 0.2em; text-transform: uppercase; /* 群青 */ color: #51A8DD; }
.desc .more{color: #005CAF;letter-spacing: .5em;font-weight: 300;font-size: 24px;padding-top: 20px; padding-bottom: 20px;padding-right: 30px;align-self: flex-end;border-bottom: 2px solid;position: relative;}
.desc .more::after{position: absolute;content: '';right: 0;top: 0;bottom: 0;margin: auto;width: 9px;height: 24px;background-repeat: no-repeat; background: url(/img/click_right.jpg);}


.book {
  transform-style: preserve-3d;
  position: relative;
  height: auto;width: auto;max-width: 400px;max-height: 540px;
  cursor: pointer;
  backface-visibility: visible;z-index: 999;
}
.book::after{position: absolute;content: '';width: 100%;height: 100%;background: #51A8DD;z-index: -1;right: -10px;bottom: -10px;}
.book .front{position: relative;}
.book .front img{display: block;}
.row .book{width:auto;height: auto;}
.row .book .front{position: relative;}

.front, .back, .page1, .page2, .page3, .page4, .page5, .page6 { transform-style: preserve-3d; position: absolute; width: 100%; height: 100%; top: 0; left: 0; transform-origin: left center; transition: transform .5s ease-in-out, box-shadow .35s ease-in-out;z-index: 999; } .front, .back { background: rgb(90, 185, 234); overflow: hidden; } .front img, .back img{object-fit: cover;} .page1 { background: #efefef; } .page2 { background: #efefef; } .page3 { background: #f5f5f5; } .page4 { background: #f5f5f5; } .page5 { background: #fafafa; } .page6 { background: #fdfdfd; } .book:hover .front { transform: rotateY(-160deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page1 { transform: rotateY(-150deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page2 { transform: rotateY(-30deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page3 { transform: rotateY(-140deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page4 { transform: rotateY(-40deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page5 { transform: rotateY(-130deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .page6 { transform: rotateY(-50deg) scale(1.1); box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2); } .book:hover .back { transform: rotateY(-20deg) scale(1.1); }

@media screen and (min-width:992px){

  .banner_text p{font-size:40px}

    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width: 768px) {
  .part_governance>a{max-width: 46%;}
  .part_governance .desc .more{font-size: 12px;}
  .part_content_report .row.mt-40{margin-top: 40px !important;}
  .part_content_report .row>div{margin-bottom: 40px;}
  .part_content_report .desc h2{font-size: 24px;}

}

</style>
