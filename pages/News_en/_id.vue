<template>
  <div class="theme-blue">
    <template>
      <div class="header">
        <link href="/css/tailwind.min.css" rel="stylesheet" />

        <b-navbar
          toggleable="lg"
          type="light"
          variant="white"
          fixed="top"
          id="header_bar"
        >
          <b-navbar-brand to="/index_en" class="flex items-center">
            <img src="/img/logo.svg" alt="" srcset="" />
            <p>
              <span class="brand_gs">C-MER Eye Care Holdings Limited</span>
              <br class="xs-dis-none" />
              <span class="brand_gp">(Stock Code: 3309)</span>
            </p>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown
                text="Color"
                active
                right
                id="chose_color"
                hidden
              >
                <b-dropdown-item href="#">黃色</b-dropdown-item>
                <b-dropdown-item href="#">藍色</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown
                v-for="(item, idx) in menuList"
                :key="idx"
                :text="item.name"
                right
              >
                <b-dropdown-item
                  v-for="(subitem, idx) in item.submenu"
                  :key="idx"
                  :to="subitem.url"
                  keep-alive
                  >{{ subitem.name }}</b-dropdown-item
                >
              </b-nav-item-dropdown>

              <nuxt-link
                class="btn btn-primary nav-contact"
                role="button"
                to="/Contact_en"
                >Contact Us</nuxt-link
              >

              <div class="language">
                <div class="language_box">
                  <b-dropdown
                    size="sm"
                    variant="link"
                    toggle-class="text-decoration-none"
                    dropleft
                    no-caret
                  >
                    <template #button-content>
                      <img src="/img/earth.svg" />
                    </template>
                    <b-dropdown-item
                      ><nuxt-link to="#">繁體中文</nuxt-link></b-dropdown-item
                    >
                    <b-dropdown-item
                      ><nuxt-link to="#">简体中文</nuxt-link></b-dropdown-item
                    >
                    <b-dropdown-item>
                      <nuxt-link to="#">English</nuxt-link></b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </template>

    <div class="banner_about banner_Release">
      <div class="banner_text">
        <h1>News Release</h1>
        <p>新闻稿</p>
      </div>
    </div>

    <div class="part_content_bg">
      <b-container fluid="md" class="content part_content part_content_Release">
        <h2 class="text-2xl text-blue-400 mb-6 text-center">
          {{ newsinfo.title.rendered }}
        </h2>
        <div class="newsinfo" v-html="newsinfo.content.rendered"></div>
      </b-container>
    </div>

    <template>
      <div class="footer part">
        <div class="container">
          <div class="footer_nav flex items-center justify-between">
            <div class="footer_logo">
              <img src="/img/Logo_foot_en.svg" alt="" srcset="" />
            </div>
            <div class="footer_nav_link">
              <ul class="flex">
                <li v-for="item in foot_menuList">
                  <b-link :href="item.url">{{ item.name }}</b-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer_address mt-12 text-base">
            <p>
              Address:Suite 1535, Central Building, 1-3 Pedder Street, Central
            </p>
          </div>

          <div class="footer_social mt-12 flex items-center justify-between">
            <ul class="flex items-center">
              <li v-for="item in foot_soical" class="mr-10">
                <a :href="item.url" target="_blank"
                  ><i><img :src="item.src" alt="" /></i
                ></a>
              </li>
            </ul>
            <div class="footer_copyright">
              <div class="footer_privacy text-right">
                <span v-for="item in foot_state" style="margin-right: 1em"
                  ><b-link :href="item.url">{{ item.name }}</b-link></span
                >
              </div>
              <div class="footer_cptext">
                © 2023 C-MER Eye Care Holdings Limited. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Header from "../../components/Header_en.vue";
import Footer from "../../components/Footer_en.vue";
import axios from "axios";

export default {
  async asyncData({ params, store }) {
    const newlistData = await axios.get(
      "https://admin.cmereye.com/wp-json/wp/v2/posts/" + params.id
    );
    console.log(newlistData.data);
    console.log(newlistData);
    // console.log( domain);
    return {
      newsinfo: newlistData.data,
    };
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  /*head: {
    title: '希玛'+ newsinfo.title.rendered,
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
      { hid: 'keywords', name: 'keywords', content: '3309 希玛 连锁专科医疗集团 眼科 牙科 整型外科 医学美容 家庭医学 肠胃科 肿瘤科 专科 Eye+' }
      
    ],
  }, */
  name: "News-info",
  data() {
    return {
      newsinfo: [],
    };
  },
  mounted() {},

  data() {
    return {
      menuList: [
        {
          id: "about",
          name: "About C-MER",
          submenu: [
            { url: "/About-cmer_en", name: "About Us" },
            { url: "/Corporate-culture_en", name: "Vision and Mission" },
            { url: "/Business-milestones_en", name: "Business Milestones" },
            { url: "/Board-of-directors_en", name: "Board of Directors" },
          ],
        },
        {
          id: "service",
          name: "Our Business",
          submenu: [
            {
              url: "/Services-In-Hong-Kong_en",
              name: "Hong Kong Medical Services",
            },
            {
              url: "/Services-In-China_en",
              name: "Mainland China Medical Network",
            },
          ],
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
              name: "Social Responsibility",
            },
          ],
        },
        {
          id: "dangjian",
          name: "Media Center",
          submenu: [{ url: "/News/index_en", name: "Press Releases" }],
        },
        {
          id: "news",
          name: "Investor Relations",
          submenu: [
            { url: "/Investor-Relationship_en", name: "Investor Relations" },
            {
              url: "/Enterprise-information_en",
              name: "Corporate Information",
            },
            { url: "/Investor-Contact_en", name: "IR Contact" },
            {
              url: "/Announcements-and-circulars_en",
              name: "Announcements and Circulars",
            },
            { url: "/Annual-Report_en", name: "Financial Reports" },
            { url: "/Corporate-Governance_en", name: "Corporate Governance" },
          ],
        },
      ],

      foot_menuList: [
        { url: "/About-cmer_en", name: "About C-MER" },
        { url: "/Business-milestones_en", name: "Business Milestones" },
        { url: "/Social-Responsibilities_en", name: "Social Responsibility" },
        { url: "/News/index_en", name: "Media Center" },
        { url: "/Investor-Relationship_en", name: "Investor Relations" },
        { url: "/Contact_en", name: "Contact Us" },
      ],
      foot_soical: [
        {
          url: "https://www.facebook.com/cmereyecenter/",
          src: "/img/foot_fb.png",
        },
        {
          url: "https://www.instagram.com/cmer_smile/",
          src: "/img/foot_ins.png",
        },
        {
          url: "https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg",
          src: "/img/foot_youtube.png",
        },
        // {url:'',src:'/img/foot_whatsapp.png'},
      ],

      foot_state: [
        { url: "/disclamer_en", name: "Disclaimer" },
        { url: "/statement_en", name: "Statement" },
      ],
    };
  },
};
</script>

<style scoped>
.newsinfo p img {
  display: inline-block;
}

.banner_Release {
  background-image: url(https://static.cmereye.com/imgs/2023/01/393b20d78a533ad1.jpg);
}
.banner_text {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: center;
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 145px;
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  opacity: 0.9;
  color: #ffffff;
  padding-left: 10%;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
}
.banner_text h1 {
  font-weight: bold;
  margin-bottom: 10px;
}
.banner_text p {
  letter-spacing: 1em;
  font-weight: lighter;
}

.part_content {
  padding: 100px 0;
  position: relative;
}

.part_content_Release p {
  color: #707070;
  line-height: 2;
  letter-spacing: 0.1em;
  margin-bottom: 0;
}
.part_content .dropdown-item {
  color: #707070;
}
.part_content .dropdown-toggle {
  padding-left: 1em;
  letter-spacing: 0.5em;
  border-color: #c4c4c4;
  border-radius: 0;
}
.part_content .dropdown-toggle::after {
  margin-left: 5em;
}

.year_text p {
  color: #51a8dd;
}

@media screen and (max-width: 768px) {
  .newsinfo table tr td {
    display: inline-block;
  }
  .newsinfo table,
  .newsinfo table td {
    max-width: 100%;
    width: auto !important;
  }
  .newsinfo table tr {
    display: flex;
  }
  .newsinfo table span {
    font-size: 14px !important;
  }
}
</style>
