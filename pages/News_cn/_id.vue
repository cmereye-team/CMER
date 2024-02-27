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
        <b-navbar-brand to="/index_cn" class="flex items-center">
          <img src="/img/logo.svg" alt="" srcset="" />
          <p>
            <span class="brand_gs">希玛眼科医疗控股有限公司</span>
            <span class="brand_gp">(股份代号：3309) </span>
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
              <b-dropdown-item href="#">黄色</b-dropdown-item>
              <b-dropdown-item href="#">蓝色</b-dropdown-item>
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
              to="/Contact_cn"
              >联络我们</nuxt-link
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
                  <b-dropdown-item href="#">简体中文</b-dropdown-item>
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
              <img src="/img/Logo_foot_cn.svg" alt="" srcset="" />
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
            <p>地址: 中环毕打街1-3号中建大厦1535室</p>
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
                © 2022 C-MER Eye Care Holdings Limited. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Header from "../../components/Header_cn.vue";
import Footer from "../../components/Footer_cn.vue";
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
          name: "关于希玛",
          submenu: [
            { url: "/About-cmer_cn", name: "集团介绍" },
            { url: "/Corporate-culture_cn", name: "愿景及使命" },
            { url: "/Business-milestones_cn", name: "业务里程碑" },
            { url: "/Board-of-directors_cn", name: "董事会" },
          ],
        },
        {
          id: "service",
          name: "业务概览",
          submenu: [
            { url: "/Services-In-Hong-Kong_cn", name: "香港医疗服务" },
            { url: "/Services-In-China_cn", name: "内地医疗服务" },
          ],
        },
        {
          id: "link",
          name: "社会责任",
          submenu: [
            { url: "/Report-governance_cn", name: "报告及管治" },
            { url: "/Awards_cn", name: "奖项殊荣" },
            { url: "/Caring-about-staff_cn", name: "重视员工" },
            { url: "/Social-Responsibilities_cn", name: "社会责任" },
          ],
        },
        {
          id: "dangjian",
          name: "新闻中心",
          submenu: [{ url: "/News/index_cn", name: "新闻稿" }],
        },
        {
          id: "news",
          name: "投资者关系",
          submenu: [
            { url: "/Investor-Relationship_cn", name: "投资者关系" },
            { url: "/Enterprise-information_cn", name: "企业资料" },
            { url: "/Investor-Contact_cn", name: "投资者联系" },
            { url: "/Announcements-and-circulars_cn", name: "公告及通函" },
            { url: "/Annual-Report_cn", name: "财务报告" },
            { url: "/Corporate-Governance_cn", name: "企业管治" },
          ],
        },
      ],

      foot_menuList: [
        { url: "/About-cmer_cn", name: "关于希玛" },
        { url: "/Services-In-Hong-Kong_cn", name: "业务概览" },
        { url: "/Social-Responsibilities_cn", name: "社会责任" },
        { url: "/News/index_cn", name: "新闻中心" },
        { url: "/Investor-Contact_cn", name: "投资者关系" },
        { url: "/Contact_cn", name: "联络我们" },
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
        { url: "/disclamer_cn", name: "私隐政策" },
        { url: "/statement_cn", name: "免责声明" },
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
