<template>
  <div class="theme-blue">
    <div class="header">
      <link href="/css/tailwind.min.css" rel="stylesheet" />

      <b-navbar
        toggleable="lg"
        type="light"
        variant="white"
        fixed="top"
        id="header_bar"
      >
        <b-navbar-brand to="/" class="flex items-center">
          <img src="/img/logo.svg" alt="" srcset="" />
          <p>
            <span class="brand_gs">希瑪眼科醫療控股有限公司</span>
            <span class="brand_gp">(股份代號：3309) </span>
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
              to="/Contact"
              >聯絡我們</nuxt-link
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

    <div class="banner_about banner_Release">
      <div class="banner_text">
        <h1>News Release</h1>
        <p>新聞稿</p>
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
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import axios from "axios";

export default {
  async asyncData({ params, store }) {
    const newlistData = await axios.get(
      "https://admin.cmereye.com/wp-json/wp/v2/posts/" + params.id
    );
    //console.log( newlistData.data);
    // console.log( domain);
    return {
      newsinfo: newlistData.data,
    };
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  /* head: {
    title: '希瑪'+ newsinfo.title.rendered,
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
      { hid: 'description', name: 'description', content: '希瑪眼科醫療控股有限公司 (「希瑪」或「本集團」) (股份代號：3309) 為香港及大灣區領先的連鎖專科醫療集團，總部設於香港，並於內地多個主要城市建立連鎖醫院網路。' },
      { hid: 'keywords', name: 'keywords', content: '3309 希瑪 連鎖專科醫療集團 眼科 牙科 整型外科 醫學美容 家庭醫學 腸胃科 腫瘤科 專科 Eye+' }
      
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
          name: "關於希瑪",
          submenu: [
            { url: "/About-cmer", name: "集團介紹" },
            { url: "/Corporate-culture", name: "願景及使命" },
            { url: "/Business-milestones", name: "業務里程碑" },
            { url: "/Board-of-directors", name: "董事會" },
          ],
        },
        {
          id: "service",
          name: "業務概覽",
          submenu: [
            { url: "/Services-In-Hong-Kong", name: "香港醫療服務" },
            { url: "/Services-In-China", name: "內地醫療網絡" },
          ],
        },
        {
          id: "link",
          name: "社會責任",
          submenu: [
            { url: "/Report-governance", name: "報告及管治" },
            { url: "/Awards", name: "獎項殊榮" },
            { url: "/Caring-about-staff", name: "重視員工" },
            { url: "/Social-Responsibilities", name: "社會責任" },
          ],
        },
        {
          id: "dangjian",
          name: "新聞中心",
          submenu: [
            { url: "/News", name: "新聞稿" },
            /* ,{url:"/Graphic",name:"圖片故事"} */
          ],
        },
        {
          id: "news",
          name: "投資者關係",
          submenu: [
            { url: "/Investor-Relationship", name: "投資者關係" },
            { url: "/Enterprise-information", name: "企業資料" },
            { url: "/Investor-Contact", name: "投資者聯繫" },
            { url: "/Announcements-and-circulars", name: "公告及通函" },
            { url: "/Annual-Report", name: "財務報告" },
            { url: "/Corporate-Governance", name: "企業管治" },
          ],
        },
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
