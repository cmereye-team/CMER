<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_about_culture">
      <div class="banner_text"><p>愿景及使命</p></div>
    </div>

    <div class="part_content_bg">
      <b-container
        fluid="md"
        class="content part_content part_content_about_culture text-justify"
      >
        <div class="app_info" v-html="AboutData.content.rendered"></div>
      </b-container>
    </div>

    <template>
      <Footer />
    </template>
  </div>
</template>
<style>
.part_content_about_culture .text-blue-culture {
  color: #005caf;
}
.part_content_about_culture h2 {
  color: #005caf;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 6px;
  display: inline-block;
  border-bottom: 1px solid #005caf;
  padding-bottom: 10px;
}
.part_content_about_culture p {
  color: gray;
  line-height: 2.5;
}

.banner_about_culture {
  background-image: url(https://static.cmereye.com/imgs/2023/01/88fe8d3a6dfc21b7.jpg);
}

@media screen and (min-width: 992px) {
  .banner_text p {
    font-size: 40px;
  }

  .language_box .dropdown a {
    padding: 0.5rem 1rem;
    color: #ffffff;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
  }
  .language_box .dropdown a:hover,
  .language_box .dropdown a:focus {
    background: #ffffff;
    color: #51a8dd;
  }
}
</style>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  components: { Header, Footer },
  async asyncData({ app, req, query, params, store }) {
    const aboutData = await axios.get(
      `https://admin.cmereye.com/wp-json/wp/v2/pages/255`
    );
    console.log(aboutData.data);
    return {
      AboutData: aboutData.data,
    };
  },
  name: "Corporate-culture",
  modules: ["@nuxtjs/axios"],
  data() {
    return {
      AboutData: [],
    };
  },
  head: {
    title: "希玛 企业文化 | 希玛文化",
    meta: [
      { charset: "utf-8" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "revisit-after", content: "10 days" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      },
      { name: "theme-color", content: "#ffffff" },
      { name: "msapplication-navbutton-color", content: "#ffffff" },
      { name: "apple-mobile-web-app-status-bar-style", content: "#ffffff" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "希玛" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-tap-highlight", content: "no" },
      { name: "author", content: "希玛" },
      { name: "robots", content: "index,follow" },
      {
        hid: "description",
        name: "description",
        content:
          "以医疗为核心价值; 以病人为中心; 致力于全体团队成员职业素质的共同提升; 恪守诚实与正直的道德规范; 持续努力、追求卓越。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "全方位健康服务 客户健康 优质服务 保障病人权益 医疗科技 业务里程碑",
      },
    ],
  },
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
  components: { Header, Footer },
};
</script>
