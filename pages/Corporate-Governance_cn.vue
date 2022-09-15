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
   <nuxt-link to="/Corporate-Governance">繁體中文</nuxt-link>
  <nuxt-link to="/Corporate-Governance_cn">简体中文</nuxt-link>
  <nuxt-link to="/Corporate-Governance_en">English</nuxt-link>
  
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>

      <div class="banner_about banner_Corporate">
          <div class="banner_text"><p>企業管治</p></div>
      </div> 


      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_content_Corporate">
          
<div class="part_Release">
 <!-- <div class="text-center"><h2>企業管治文件</h2></div> -->


 <div class="tablehead mt-10 mb-4">
   <p>文件</p>
   <p>查看 / 下载</p>
 </div>

 <div class="tb_items corpat_text">
 
<ul class="table-con-list govern-file-list"> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Board Diversity Policy (Chi).pdf" target="_blank" rel="nofollow">董事会成员多元化政策</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Board Diversity Policy (Chi).pdf" download="Board Diversity Policy (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/List of directors and their roles and functions (Chi).pdf" target="_blank" rel="nofollow">董事会之名单及其职分及职能</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/List of directors and their roles and functions (Chi).pdf" download="List of directors and their roles and functions (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/M&amp;A (Chi).pdf" target="_blank" rel="nofollow">经修订及重列组织章程大纲及公司细则</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/M&amp;A (Chi).pdf" download="M&amp;A (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Procedures for shareholders to propose a person for election as a director (Chi).pdf" target="_blank" rel="nofollow">股东提名人选参选公司董事的程序</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Procedures for shareholders to propose a person for election as a director (Chi).pdf" download="Procedures for shareholders to propose a person for election as a director (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of audit committee (Chi).pdf" target="_blank" rel="nofollow">董事会于2017 年12 月13日采纳的审核委员会职权范围</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of audit committee (Chi).pdf" download="Terms of reference of audit committee (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of nomination committee (Chi).pdf" target="_blank" rel="nofollow">董事会于2017 年12 月13日采纳的提名委员会职权范围</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of nomination committee (Chi).pdf" download="Terms of reference of nomination committee (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of remuneration committee (Chi).pdf" target="_blank" rel="nofollow">董事会于2017 年12 月13日采纳的薪酬委员会职权范围</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of remuneration committee (Chi).pdf" download="Terms of reference of remuneration committee (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> <li class="table-con-item clear mt-2"> <a class="table-cell" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of the board of directors (Chi).pdf" target="_blank" rel="nofollow">董事会（「董事会」）于2017 年12 月13 日 采纳的董事会职权范围</a> <span class="table-cell last"> <a class="file-link" href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Terms of reference of the board of directors (Chi).pdf" download="Terms of reference of the board of directors (Chi).pdf" rel="nofollow"> <span class="file-pdf"></span> <span class="file-name"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></span> </a> </span> </li> </ul>

 
 </div>



</div>
          </b-container>
          </div>
  

   <template>
  <div class="footer part">
    <div class="container">
    <div class="footer_nav flex items-center justify-between  ">
      <div class="footer_logo">
        <img src="/img/Logo_foot_cn.svg" alt="" srcset="">
      </div>
      <div class="footer_nav_link">
         <ul class="flex">
           
           <li  v-for="item in foot_menuList" ><b-link :href="item.url">{{item.name}}</b-link></li>
          
         </ul>
      </div>
    </div>

    <div class="footer_address mt-12 text-base "><p>地址: 中环毕打街1-3号中建大厦1535室 </p></div>

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

<style>
.tablehead{padding: 15px 30px;background: #51A8DD;display: flex; justify-content: space-between;color: #fff;font-size: 20px;letter-spacing: 3px;}
.tablehead p{font-size: 24px}
.part_content_Corporate h2{letter-spacing: 1.5em;color: #005CAF;font-size: 20px;padding-bottom: 10px;border-bottom: 1px solid #005CAF;text-indent: 1.5em;display: inline-block;margin: auto;}
.part_content_Corporate .tb_item .icon_box,.table-con-list .table-con-item .file-name{width: 120px;text-align: center;display: block;}
.part_content_Corporate .tb_item,.table-con-list .table-con-item {padding: 14px 30px;border: 1px solid lightgray; color: #707070;font-size: 20px;display: flex;justify-content: space-between;align-items: center;}
.banner_Corporate{background-image:url(/pic/banner_pc_Corporate.jpg) ;}

@media screen and (min-width:992px){

.corpat_text .table-con-list .table-con-item{font-size:18px}
    .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width:768px) {
  .part_content_Corporate .tb_item, .table-con-list .table-con-item{font-size: 14px;}
  .part_content_Corporate .tb_item .icon_box, .table-con-list .table-con-item .file-name{text-align: right;}
}


</style>

<script>
import Header from '../components/Header_cn.vue';
import Footer from '../components/Footer_cn.vue';
export default {
  name: 'Corporate-Governance',
    head:{
    title: '企业管治',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: '查阅最新的希玛企业管治报告。 '
      },
      {
        name: 'keywords',
        content: '企业管治 企业管治报告'
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
}
</script>
