<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_History">
      <div class="banner_text"><p>業務里程碑</p></div>
    </div>
    <div class="part_content_bg part_History_bg">
      <b-container fluid="md" class="content part_content part_History_content">
        <div class="app_info" v-html="AboutData.content.rendered"></div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<style>
.banner_History {
  background-image: url(https://static.cmereye.com/imgs/2023/01/4bbf73ca8d99d0d9.jpg);
}

.part_History_content {
  border-left: 1px solid #51a8dd;
}
.part_History .part_History_item .histroy_line {
  position: relative;
}
.part_History .part_History_item .histroy_line::before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  left: -18.5px;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 10px solid #ffffff;
  background: #005caf;
  box-sizing: content-box;
  border-radius: 50%;
}
.part_History .part_History_item .histroy_line::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background: #005caf;
  top: 18px;
  z-index: -1;
}
.part_History .part_History_item p {
  margin-left: 5rem;
  margin-bottom: 20px;
}
.part_History .part_History_item p:last-child {
  margin-bottom: 60px;
}
.part_History .part_History_item .histroy_line p {
  color: #51a8dd;
  font-size: 20px;
  font-weight: bold;
  display: table;
  position: relative;
  z-index: 999;
  background: #ffffff;
  padding: 0 10px;
}
.part_History .part_History_item > p strong {
  padding-left: 10px;
  padding-right: 40px;
  font-weight: bold;
  letter-spacing: normal;
  min-width: 85px;
  text-align: right;
}
.part_History .part_History_item > p {
  letter-spacing: 0.1em;
  color: #707070;
  display: flex;
  font-weight: 300;
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

@media screen and (max-width: 768px) {
  .part_History_bg {
    padding: 0 0 0 15px;
  }
  .part_History_content {
    padding-right: 0 !important;
  }
  .part_History_content .part_History_item p {
    padding-right: 15px !important;
  }
  .part_History .part_History_item p {
    margin-left: 1rem;
    letter-spacing: 0;
    font-size: 14px;
  }
  .part_History .part_History_item p strong {
    font-size: 16px;
    font-weight: bold;
    min-width: 90px;
  }
  .part_History .part_History_item .histroy_line::after {
    top: 18px;
  }
  .part_History .part_History_item .histroy_line::before {
    left: -33.5px;
  }
  .part_History .part_History_item .histroy_line p {
    font-size: 1.3rem;
  }
  .part_History .part_History_item p:last-child {
    margin-bottom: 50px;
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
      `https://admin.cmereye.com/wp-json/wp/v2/pages/22`
    );
    console.log(aboutData.data);
    return {
      AboutData: aboutData.data,
    };
  },
  name: "Business-milestones",
  data() {
    return {
      AboutData: [],
    };
  },
  head: {
    title: "希瑪 里程碑 | 里程碑",
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
          "希瑪眼科醫療控股有限公司 (「希瑪」或「本集團」) (股份代號：3309) 為香港及大灣區領先的連鎖專科醫療集團，總部設於香港，並於內地多個主要城市建立連鎖醫院網路。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "里程碑 希瑪 林順潮 希瑪林順潮眼科中心 希瑪微笑激光矯視中心 希瑪林順潮眼科醫院 希瑪（環球）腫瘤科中心 嘉賓眼科 深圳愛康健齒科 香港上市",
      },
    ],
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
