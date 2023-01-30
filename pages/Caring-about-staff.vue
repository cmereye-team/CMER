<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_about_template">
      <div class="banner_text"><p>重視員工</p></div>
    </div>

    <div class="part_content_bg">
      <b-container
        fluid="md"
        class="content part_content part_content_about_template text-justify"
      >
        <div class="app_info" v-html="AboutData.content.rendered"></div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<style>
.banner_about_template {
  background-image: url(https://static.cmereye.com/imgs/2023/01/52312c05d7f437ac.jpg);
}
.part_content_about_template h2 {
  letter-spacing: 5px;
  font-weight: bold;
}
.part_content_about_template h4,
.part_content_about_template h2 {
  font-size: 24px;
  color: #005caf;
}
.part_content_about_template p {
  font-size: 18px;
  color: #707070;
}

@media screen and (min-width: 992px) {
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

@media screen and (max-width: 768px) {
  .part_content_about_template h2 {
    letter-spacing: 5px;
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
      `https://admin.cmereye.com/wp-json/wp/v2/pages/35`
    );
    console.log(aboutData.data);
    return {
      AboutData: aboutData.data,
    };
  },

  head: {
    title: "投資者聯繫",
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
      { name: "apple-mobile-web-app-title", content: "希瑪" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-tap-highlight", content: "no" },
      { name: "author", content: "希瑪" },
      { name: "robots", content: "index,follow" },
      {
        hid: "description",
        name: "description",
        content:
          "希瑪重視員工。業務能夠取得長足發展，實有賴全體員工堅守專業精神及熱誠工作態度。我們的員工文化：各顯才能、共同成長、熱誠投入。",
      },
      { hid: "keywords", name: "keywords", content: "重視員工 員工文化" },
    ],
  },
  name: "Caring-about-staff",
  data() {
    return {
      AboutData: [],
    };
  },

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
            { url: "/Services-In-China", name: "內地醫療服務" },
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
