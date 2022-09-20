<!-- Please remove this file from your project -->
<template>

  <div class="header">
    <link href="/css/tailwind.min.css" rel="stylesheet">
  
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" id="header_bar">
    <b-navbar-brand to="/index_cn" class="flex items-center">
    
    <img src="/img/logo.svg" alt="" srcset=""> 
    <p><span class="brand_gs">希玛眼科医疗控股有限公司</span>
     <span class="brand_gp">(股票代号：3309) </span></p>
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
      <div class="language_box ccccc">

 
 
<b-dropdown size="sm"   variant="link" toggle-class="text-decoration-none" dropleft  no-caret>
    <template #button-content> 
     <img src="/img/earth.svg">
    </template>
    
    <nuxt-link to="/">繁體中文</nuxt-link>
    <nuxt-link to="index_cn">简体中文</nuxt-link>
   <nuxt-link to="index_en">English</nuxt-link>
  
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>

export default {
  name: 'Header',
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

  mounted () {

var vikim = {
    percent: 0,
    timers: "",
    init: function (e) {
      $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 0) {
                $("#header_bar").addClass("scroll_header");
            } else {
                $("#header_bar").removeClass("scroll_header")
            }
        });
    }
}

vikim.init();
$("#chose_color .dropdown-menu li").eq(0).click(function(){
   $("body").removeClass("theme-blue");
   $("body").addClass("theme-yellow");
});
$("#chose_color .dropdown-menu li").eq(1).click(function(){
   $("body").removeClass("theme-yellow");
   $("body").addClass("theme-blue");
});

  let that = this;
    this.$nextTick(() => {
      // this.initScroll()
      window.onscroll = function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        //滚动条到底部的条件
        if (scrollTop + windowHeight == scrollHeight) {
          //写后台加载数据的函数 一定要用that
          // that.page =  that.page + 1;
          // that.getData();
          $('.nav-rightbar').addClass('hide').removeClass('show');
           
        } else{
          $('.nav-rightbar').addClass('show').removeClass('hide');
          
        }
      };
    });

 },

};

</script>


<style>
.bg-white{background-color: rgba(255,255,255, 0.75) !important;}
.navbar-light .navbar-nav .nav-link{font-size: 18px; line-height: 22px; display: flex; align-items: center; letter-spacing: 0.25em; color: #005CAF; text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);}
.navbar-light .navbar-nav .nav-link:hover{color: #FFFFFF; text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);}
.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active{color: #FFFFFF;}
.brand_gs ,.brand_gp{color:#005CAF;padding-bottom:10px;font-family: 'Noto Sans CJK TC', serif;}
.brand_gs{padding-left: 10px;}

.index .part_vision{display:none}
.parttwo .title h4{display:none}

.navbar-nav .language .language_box button img{max-width:30px}
.statement .part_content p{margin-top:3vw}

@media screen and (min-width: 992px){
/* 非移動端  */
.header{position: relative; }
.header .brand_gs,.header .brand_gp{font-size: 18px}
.navbar-expand-lg .navbar-nav .nav-link{padding-left: 1rem;padding-right: 1rem;}
.nav-contact{background: linear-gradient(110.25deg, #85CEFA 5.86%, #51A8DD 100%); border-radius: 38px;font-size: 15px; line-height: 22px; display: flex; align-items: center; text-align: center; letter-spacing: 0.25em; color: #FFFFFF;border: none;padding: 0 2rem;margin: 0 1rem;}
.navbar-expand-lg .navbar-nav .dropdown-menu{padding: 0;border-radius: 0;border: none;left: 0;background: #51A8DD; opacity: 0.9;}

.language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

.dropdown-item{color:#FFFFFF;font-size: 15px; line-height: 22px; display: flex; align-items: center; letter-spacing: 0.25em;}
.navbar-expand-lg .navbar-nav .dropdown-item:hover, .dropdown-item:focus{background: #FFFFFF;color: #51A8DD;}
.navbar-expand-lg .dropdown-item{padding: 0.5rem 1rem;}
.navbar-expand-lg .nav-contact{margin-right: 60px;}
.nav-rightbar{position: fixed ;right:0px;width: 44px;height: 100vh;background: linear-gradient(180deg, #51A8DD 0%, rgba(81, 168, 221, 0.03) 100%);color: #FFFFFF;z-index: 9999;}
.nav-rightbar .scroll_line{width: 1px;height: 21vh;background: #FFFFFF;} 
.nav-rightbar .scroll_textt{writing-mode: vertical-rl;}
.nav-rightbar .language{position: absolute;top: 21px;}
.nav-rightbar .language .language_box{position: relative;}
.nav-rightbar .language .language_box .dropdown-menu{border: none;border-radius: 0;background:rgba(255,255,255,.9);}
.nav-rightbar .language .language_box .dropdown-menu .dropdown-item{color: #005CAF;}
.nav-rightbar .language .language_box .btn.dropdown-toggle{position: relative;}
.nav-rightbar .language .language_box .btn.dropdown-toggle::before{position: absolute;content: '';width: 3px;height: 18px;background: #FFFFFF;left: -3px;top: 0;bottom: 0;margin: auto;}
#nav-collapse .navbar-nav .nav-item a span{font-size: 18px}

#header_bar{-webkit-transition: all .5s;padding-top: 20px;}
#header_bar.scroll_header {padding-top: 0.5rem;} 

.navbar-expand-lg .navbar-nav .language .dropdown-menu{left: -130px;top:50px}
.banner_text p{font-size:40px}

.index .brand_box .brand_card:nth-child(1){margin-top:3.8em}
.index .brand_box .brand_card:nth-child(2){margin-top:3.8em}
.index .brand_box .brand_card:nth-child(2) img,.index .brand_box .brand_card:nth-child(3) img,.index .brand_box .brand_card:nth-child(4) img{max-height:70px}
.index .brand_box .brand_card:nth-child(5) img{max-height:80px}

.nav-rightbar{display:none !important}
.statement .part_content{padding:200px 0;text-align: justify;}
.statement .part_content h1{font-size:40px;margin-top: 3vw;text-align: left;}
.statement .part_content p{line-height:40px}

.index .brand_box .brand_card:nth-child(3),.index .brand_box .brand_card:nth-child(4){min-height:90px}



/* 非移動端 end   */
}


@media screen and (min-width: 992px) and (max-width:1201px){

  .header .navbar-brand{font-size:1.0rem}
  .header .nav-contact{padding:0.375rem 0.75rem;}
}

@media screen and (max-width: 992px){
 /* 移動端*/ 
 .navbar-nav{margin-top:36px;position: relative;}
  .navbar-nav .language .language_box{display:block !important;position: absolute;top: -36px;left: -10px;}
  .navbar-nav .language .dropdown-menu{display: block;padding: 0.5rem 0.5rem;border: initial;background: initial;}
  .navbar-nav .language .dropdown-menu a{padding: 0.5rem}
 
 
 .header .navbar{padding:0.5rem 0rem 0.5rem 1rem}
.scroll_text ,.navbar-light .navbar-brand p{font-size: 12px;}
.scroll_text ,.navbar-light .navbar-brand img{max-height: 40px;height: 10vw;}

.statement .part_content {font-size:16px;text-align:left;padding:100px 15px !important}
.statement .part_content h1{font-size:30px;margin-top: 50px;}
.statement .part_content a{text-decoration:underline}
.statement .part_content p{line-height:30px}
.statess .footer{padding-bottom:80px}
.index .brand_box .brand_card:nth-child(5) img{max-height:30px}
.banner_text p{font-size:24px}

.navbar-nav .language .language_box .btn-group, .navbar-nav .language .language_box .btn-group-vertical{display: inline-flex !important;}

 /* 移動端 end   */ 
}







</style>
 
