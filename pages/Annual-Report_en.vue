<template>
  <div class="theme-blue tanslate_yin">
    
 <template>

  <div class="header">
    <link href="/css/tailwind.min.css" rel="stylesheet">
  
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" id="header_bar">
    <b-navbar-brand to="/index_en" class="flex items-center">
    
    <img src="/img/logo.svg" alt="" srcset=""> 
   <p><span class="brand_gs">C-MER Eye Care Holdings Limited</span>
     <br class="xs-dis-none">
     <span class="brand_gp">(Stock Code: 3309)</span></p>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 
   <b-nav-item-dropdown text="Color" active right  id="chose_color" hidden>
          <b-dropdown-item href="#">黃色</b-dropdown-item>
          <b-dropdown-item href="#">藍色</b-dropdown-item>
    </b-nav-item-dropdown>

        <b-nav-item-dropdown v-for="(item, idx)  in menuList" :key="idx" :text='item.name' right   >
          <b-dropdown-item v-for="(subitem, idx) in item.submenu" :key="idx" :to="subitem.url" keep-alive >{{subitem.name}}</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <nuxt-link class="btn btn-primary nav-contact" role="button" to="/Contact_en">Contact Us</nuxt-link>

         <div class="language">
      <div class="language_box">

 
 
<b-dropdown size="sm"   variant="link" toggle-class="text-decoration-none" dropleft  no-caret>
    <template #button-content> 
     <img src="/img/earth.svg">
    </template>
       <nuxt-link to="/Annual-Report">繁體中文</nuxt-link>
      <nuxt-link to="/Annual-Report_cn">简体中文</nuxt-link>
      <nuxt-link to="/Annual-Report_en">English</nuxt-link>
  </b-dropdown>




    </div>
    </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>


   <div class="banner_about banner_report tanslate_yin">
          <div class="banner_text xs_banner_en_text"><p>Annual Report</p></div>
      </div> 



      <div class="part_content_bg tanslate_yin Annual_en_left">
         <b-container fluid="md" class="content part_content part_content_Corporate">
          
<div class="part_Release tanslate_yin">
 <!-- <div class="text-center"><h2>年报文件</h2></div> -->


 <div class="tablehead mt-10 mb-4">
   <p>Files</p>
   <p>View / Download</p>
 </div>

 <div class="tb_items annual-report">
<a class="tb_item mt-2" href="https://www.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0330.pdf" target="_blank"> <span>Annual Report 2021</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/zqbg-20210927.pdf" target="_blank"> <span>Interim Report 2021</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2020.pdf" target="_blank"> <span>Annual Report 2020</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033090922.pdf" target="_blank"> <span>Interim Report 2020</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://us.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2020041500779.pdf" target="_blank"> <span>Annual Report 2019</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://us.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019091900414.pdf" target="_blank"> <span>Interim Report 2019</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://us.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904251388.pdf" target="_blank"> <span>Annual Report 2018</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://us.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2018 INTERIM REPORT.pdf" target="_blank"> <span>Interim Report 2018</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
<a class="tb_item mt-2" href="http://us.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Annual Report 2017.pdf" target="_blank"> <span>Annual Report 2017</span>  <div class="icon_box"><i><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="download" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-download mx-auto b-icon bi" data-v-41be6633=""><g data-v-41be6633=""><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path></g></svg></i></div> </a>
 
 
 </div>



</div>
          </b-container>
          </div>

  <template>
  <div class="footer part tanslate_yin">
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


  </div>
   
</template>

<script>
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
import axios from "axios";
export default {
  async asyncData({ app, req, query, params, store }) {
    // const  aboutData = await axios.get(apiurl + '/pages/2');
    const aboutData = await axios.get(
      `https://www.cmereye.com/wp-json/wp/v2/pages/250`
    );
    // console.log( aboutData.data);
    return {
      AboutData: aboutData.data
    };
  },
  name: "About-cmer",
  data() {
    return { AboutData: [] };
  },
  head: {
    title: "C-MER Financial Reports",

    meta: [
      { charset: "utf-8" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "revisit-after", content: "10 days" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      },
      { name: "theme-color", content: "#ffffff" },
      { name: "msapplication-navbutton-color", content: "#ffffff" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#ffffff" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "C-MER" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-tap-highlight", content: "no" },
      { name: "author", content: "C-MER" },
      { name: "robots", content: "index,follow" },
      {
        hid: "description",
        name: "description",
        content: "C-MER Financial Reports"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "C-MER| C-MER Financial Reports|  C-MER Annual Reports| C-MER Interim Reports"
      }
    ]
  },

  data() {
    return {
      menuList: [
        {
          id: "about",
          name: "About-cmer",
          submenu: [
            { url: "/About-cmer_en", name: "About Us" },
            { url: "/Corporate-culture_en", name: "Vision and Mission" },
            { url: "/Business-milestones_en", name: "Business Milestones" },
            { url: "/Board-of-directors_en", name: "Board of Directors" }
          ]
        },
        {
          id: "service",
          name: "Our Business",
          submenu: [
            {
              url: "/Services-In-Hong-Kong_en",
              name: "Hong Kong Medical Services"
            },
            {
              url: "/Services-In-China_en",
              name: "Mainland China Medical Network"
            }
          ]
        },
        {
          id: "link",
          name: "Social Responsibility",
          submenu: [
            { url: "/Report-governance_en", name: "Reporting and Governance" },
            { url: "/Awards_en", name: "Awards and Recognitions" },
            { url: "/Caring-about-staff_en", name: "Our People " },
            {
              url: "/Social-Responsibilities_en",
              name: "Social Responsibility"
            }
          ]
        },
        {
          id: "dangjian",
          name: "Media Center",
          submenu: [{ url: "/News/index_en", name: "Press Releases" }]
        },
        {
          id: "news",
          name: "Investor Relations",
          submenu: [
            { url: "/Investor-Relationship_en", name: "Investor Relations" },
            {
              url: "/Enterprise-information_en",
              name: "Corporate Information"
            },
            { url: "/Investor-Contact_en", name: "IR Contact" },
            {
              url: "/Announcements-and-circulars_en",
              name: "Announcements and Circulars"
            },
            { url: "/Annual-Report_en", name: "Financial Reports" },
            { url: "/Corporate-Governance_en", name: "Corporate Governance" }
          ]
        }
      ],

      foot_menuList: [
        { url: "About-cmer_en", name: "About C-MER" },
        { url: "Business-milestones_en", name: "Business Milestones" },
        { url: "Social-Responsibilities_en", name: "Social Responsibility" },
        { url: "News/index_en", name: "Media Center" },
        { url: "Investor-Relationship_en", name: "Investor Relations" },
        { url: "Contact_en", name: "Contact Us" }
      ],
      foot_soical: [
        {
          url: "https://www.facebook.com/cmereyecenter/",
          src: "/img/foot_fb.png"
        },
        {
          url: "https://www.instagram.com/cmer_smile/",
          src: "/img/foot_ins.png"
        },
        {
          url: "https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg",
          src: "/img/foot_youtube.png"
        }
        // {url:'',src:'/img/foot_whatsapp.png'},
      ],

      foot_state: [
        { url: "/disclamer_en", name: "Privacy policy" },
        { url: "/statement_en", name: "Disclaimers" }
      ]
    };
  }
};
</script>

<style scoped>
.banner_about_about {
  background-image: url(/pic/banner_pc_culture.jpg);
  background-size: cover;
  background-position: center;
}

@media screen and (min-width: 992px) {
  .banner_text p {
    font-size: 40px;
  }

.annual-report span{font-size: 18px !important}
  .language_box .dropdown  a{ padding: 0.5rem 1rem;color: #FFFFFF;font-size: 15px;line-height: 22px;display: flex;align-items: center;letter-spacing: 0.1em;}
.language_box .dropdown  a:hover, .language_box .dropdown  a:focus{background: #FFFFFF;color: #51A8DD;}

}

@media screen and (max-width:991px){
  .Annual_en_left .tablehead p{font-size:22px}
  .Annual_en_left .annual-report span{font-size:18px;white-space: nowrap;}

}

</style>
