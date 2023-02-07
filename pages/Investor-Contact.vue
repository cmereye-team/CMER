<template>
  <div class="theme-blue">
    <Header />
    <div class="banner_about banner_about_contact">
      <div class="banner_text">
        <p>投資者聯繫</p>
      </div>
    </div>
    <div class="part_content_bg relative">
      <b-container
        fluid="md"
        class="content part_content part_content_about_template mb-20"
      >
        <div class="text-center">
          <h4 class="font-bold mt-10 mb-10 tracking-widest">
            希瑪眼科醫療控股有限公司
          </h4>
          <p class="mt-10">&nbsp;</p>
          <h4 class="font-bold mt-10 tracking-widest">地址：</h4>
          <p class="mt-2 tracking-widest">香港畢打街1-3號中建大廈1535室</p>

          <h4 class="font-bold mt-10 tracking-widest">電話：</h4>
          <p class="mt-2 tracking-widest">(852) 3997 3266</p>

          <h4 class="font-bold mt-10 tracking-widest">電郵：</h4>
          <p class="mt-2 tracking-widest">info@hkcmer.com</p>
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.banner_about_contact {
  background-image: url(https://static.cmereye.com/imgs/2023/01/78fe3829dca53880.jpg);
  background-position: center;
  background-size: cover;
}
.font-normal {
  font-weight: normal !important;
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
</style>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Investor-Contact",
  data() {
    return {};
  },
  head: {
    title: "投資者聯繫",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "希瑪眼科醫療控股有限公司 ",
      },
      {
        name: "keywords",
        content: "投資者聯繫 希瑪眼科醫療控股",
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
