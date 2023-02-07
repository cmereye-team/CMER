<template>
  <div class="theme-blue">
    <Header />

    <div class="part_content_bg part_content_contact">
      <b-container fluid="md" class="content part_content">
        <h4 class="font-bold mt-10 mb-10 tracking-widest">&nbsp;</h4>
        <p class="mt-10">&nbsp;</p>
        <h4 class="font-bold mt-10 tracking-widest">地址：</h4>
        <p class="mt-2 tracking-widest">中環畢打街1-3號中建大廈1535室</p>

        <h4 class="font-bold mt-10 tracking-widest">一般查詢：</h4>
        <p class="mt-2 tracking-widest">+852 3997 3266</p>
        <h4 class="font-bold mt-10 tracking-widest">傳真：</h4>
        <p class="mt-2 tracking-widest">+852 3996 8212</p>
        <h4 class="font-bold mt-10 tracking-widest">電郵：</h4>
        <p class="mt-2 tracking-widest">
          <a href="mailto:info@hkcmer.com">info@hkcmer.com</a>
        </p>

        <!-- <b-button class="bg-white rounded-3xl border-none mt-20 px-4 tracking-widest text-blue-400" variant="outline-primary">聯絡我們</b-button> -->
      </b-container>
      <div class="map">
        <a href="https://goo.gl/maps/DrV9huj8Xcf37heu8" target="_blank"
          ><img src="/img/googlemap.svg" alt="" srcset=""
        /></a>
        <a class="ml-4" href="https://j.map.baidu.com/e7/6Wx" target="_blank"
          ><img src="/img/baidumap.svg" alt="" srcset=""
        /></a>
      </div>
    </div>
  </div>
</template>

<style>
.part_content_contact {
  font-size: 20px;
  height: 100vh;
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.part_content_contact.part_content_bg::after {
  bottom: 0;
  top: 0;
  margin: auto 0 !important;
}
.part_content_contact .map {
  position: absolute;
  bottom: 30px;
  right: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.part_content_contact .map img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
}
.part_content_contact .map a {
  transition: all 0.3s ease;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.part_content_contact .map a:hover {
  transform: rotateX(-15deg) rotateY(15deg) rotateZ(-15deg) translate(3px, -3px);
  box-shadow: 3px 3px 10px lightgray;
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
  .part_content_contact {
    display: block;
  }
  .part_content_contact .map {
    position: unset !important;
    justify-content: center;
  }
  .part_content_contact .map img {
    width: 70px;
    height: 70px;
  }
}
</style>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Contact",
  data() {
    return {};
  },
  head: {
    title: "希瑪 | 聯絡我們",
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
        content: "3309 希瑪 地址　一般查詢　傳真　電郵",
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
