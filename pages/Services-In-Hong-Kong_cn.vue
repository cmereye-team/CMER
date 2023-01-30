<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_about_about">
      <div class="banner_text"><p>香港医疗服务</p></div>
    </div>
    <div class="part_content_bg relative">
      <b-container fluid="md" class="content mb-20">
        <div class="service_map service_map_hk">
          <div class="text-center relative">
            <b-img class="mx-auto" src="/img/service_hk_bg.jpg"></b-img>
            <div class="point_eye_area">
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye" id="map-1"></div>
              <div class="point point_eye"></div>
            </div>
            <div class="point_tooth_area">
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
              <div class="point point_tooth"></div>
            </div>
            <div class="point_poly_area">
              <div class="point point_poly" id="map-2"></div>
            </div>

            <div class="point_html">
              <b-tooltip
                variant="primary"
                class="text-center"
                id="map-12"
                target="map-1"
                placement="top"
              >
                <img src="/pic/map_zh.jpg" alt="" srcset="" />
                <p class="text-lg mt-3 text-center">希瑪眼科中心 - 中環店</p>
              </b-tooltip>
              <b-tooltip
                variant="primary"
                class="text-center map-2"
                id="map-22"
                target="map-2"
                placement="top"
              >
                <img src="/pic/map_k11.jpg" alt="" srcset="" />
                <p class="text-lg mt-3 text-center">愛瑪醫美 - K11店</p>
              </b-tooltip>
            </div>
          </div>
        </div>

        <!-- <p class="text-center text-g text-gray-500  leading-loose  mb-5">希瑪在香港邁進全方位專科服務領域，由核心的眼科中心擴展至矯視中心、視光中心、牙科、腫瘤專科、<br class="md"> 醫學美容及檢測中心等，為客戶提供一站式的專科醫療服務。 </p> -->

        <div class="app_info" v-html="AboutData.content.rendered"></div>
      </b-container>
    </div>

    <template>
      <Footer />
    </template>
  </div>
</template>
<style>
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
  .point {
    width: 7vw !important;
    height: 7vw !important;
  }
  .point::before {
    width: 3.3vw !important;
    height: 3.3vw !important;
  }
  .point.point_poly::before {
    top: -3px !important;
  }
  .point:hover {
    transform: scale(1.5) translateY(-8px) !important;
    z-index: 999 !important;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(1) {
    top: 20.7% !important ;
    left: 29.8% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(2) {
    top: 23.4% !important ;
    left: 34.7% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(3) {
    top: 30.6% !important ;
    left: 45.3% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(4) {
    top: 24.3% !important ;
    left: 57% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(5) {
    top: 37.8% !important ;
    left: 61.5% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(6) {
    top: 43.2% !important ;
    left: 59.7% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(7) {
    top: 62% !important ;
    left: 56.7% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(8) {
    top: 62.5% !important ;
    left: 53.1% !important ;
  }
  .service_map_hk .point_eye_area .point_eye:nth-child(9) {
    top: 62% !important ;
    left: 50.5% !important ;
  }

  .service_map_hk .point_tooth_area .point_tooth:nth-child(1) {
    top: 27% !important ;
    left: 55% !important ;
  }
  .service_map_hk .point_tooth_area .point_tooth:nth-child(2) {
    top: 45% !important ;
    left: 56.7% !important ;
  }
  .service_map_hk .point_tooth_area .point_tooth:nth-child(3) {
    top: 64.6% !important ;
    left: 60.3% !important ;
  }
  .service_map_hk .point_tooth_area .point_tooth:nth-child(4) {
    top: 65.5% !important ;
    left: 61.2% !important ;
  }
  .service_map_hk .point_tooth_area .point_tooth:nth-child(5) {
    top: 43.2% !important ;
    left: 67.5% !important ;
  }
  .service_map_hk .point_tooth_area .point_tooth:nth-child(6) {
    top: 46.8% !important ;
    left: 70.2% !important ;
  }

  .service_map_hk .point_poly_area .point_poly:nth-child(1) {
    top: 46.8% !important ;
    left: 60% !important ;
  }
}

.tooltip {
  opacity: 1 !important;
}
.tooltip-inner {
  max-width: 500px !important;
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  padding: 0 0 15px;
}

.tooltip-inner .flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
.tooltip-inner .flex i {
  padding-right: 10px;
}
.tooltip .arrow::before,
.tooltip.b-tooltip-primary.bs-tooltip-top .arrow::before,
.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="top"] .arrow::before {
  border-bottom-color: #85cefa !important;
  border-top-color: #85cefa !important;
}
#map-22 .tooltip-inner {
  background: linear-gradient(110.25deg, #d6bd7d 5.86%, #846232 100%);
}
#map-22 .arrow::before {
  border-top-color: #846232 !important;
  border-bottom-color: #846232 !important;
}

.map_video iframe {
  max-width: 100% !important ;
}
.map_box {
  background: rgba(81, 168, 221, 0.8);
  position: absolute;
  width: 100% !important ;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 999;
  display: none;
}

.point {
  position: absolute;
  content: "";
  z-index: 10;
  background: url(/img/map_point.svg);
  background-size: auto 100% !important ;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
  filter: drop-shadow(0px 0px 4.77472px rgba(0, 92, 175, 0.6));
  transition: all 0.3s ease;
}
.point::before {
  background: url(/img/map_point_eye.svg);
  position: absolute;
  content: "";
  width: 23px;
  height: 23px;
  background-size: 100% auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
}
.point.point_tooth::before {
  background: url(/img/map_point_tooth.svg);
  background-position: center;
  background-size: auto 100% !important ;
  background-repeat: no-repeat;
  top: -6px;
  left: -1px;
}
.point.point_poly {
  background: url(/img/map_gold_point.svg);
  background-position: center;
  background-size: auto 100% !important ;
  background-repeat: no-repeat;
  top: -10px;
}
.point.point_poly::before {
  background: url(/img/map_point_woman.svg);
  background-position: center;
  background-size: auto 100% !important ;
  background-repeat: no-repeat;
  top: -10px;
}
.point:hover {
  transform: scale(2.2) translateY(-20px);
  cursor: pointer;
  z-index: 99;
  background: url(/img/map_dark_point.svg);
  background-size: auto 100% !important ;
  background-repeat: no-repeat;
  background-position: center;
}
.service_map_hk .point_eye_area .point_eye:nth-child(1) {
  top: 230px;
  left: 331px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(2) {
  top: 260px;
  left: 385px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(3) {
  top: 340px;
  left: 503px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(4) {
  top: 270px;
  left: 633px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(5) {
  top: 420px;
  left: 683px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(6) {
  top: 480px;
  left: 663px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(7) {
  top: 610px;
  left: 630px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(8) {
  top: 605px;
  left: 590px;
}
.service_map_hk .point_eye_area .point_eye:nth-child(9) {
  top: 600px;
  left: 560px;
}

.service_map_hk .point_tooth_area .point_tooth:nth-child(1) {
  top: 300px;
  left: 610px;
}
.service_map_hk .point_tooth_area .point_tooth:nth-child(2) {
  top: 500px;
  left: 630px;
}
.service_map_hk .point_tooth_area .point_tooth:nth-child(3) {
  top: 640px;
  left: 670px;
}
.service_map_hk .point_tooth_area .point_tooth:nth-child(4) {
  top: 650px;
  left: 680px;
}
.service_map_hk .point_tooth_area .point_tooth:nth-child(5) {
  top: 480px;
  left: 750px;
}
.service_map_hk .point_tooth_area .point_tooth:nth-child(6) {
  top: 520px;
  left: 780px;
}

.service_map_hk .point_poly_area .point_poly:nth-child(1) {
  top: 520px;
  left: 665px;
}

.banner_about_about {
  background-image: url(https://static.cmereye.com/imgs/2023/01/caa5ea5c9ae22fde.jpg);
}
.service_map_hk_table thead {
  background: #51a8dd;
  color: #fff;
}
.service_map_hk_table thead th:nth-child(1) {
  width: 100px;
}
.service_map_hk_table thead th:nth-child(3) {
  width: 100px;
}
.service_map_hk_table td {
  color: #707070;
}
</style>
<script>
import Header from "../components/Header_cn.vue";
import Footer from "../components/Footer_cn.vue";
import axios from "axios";
export default {
  components: { Header, Footer },
  async asyncData({ app, req, query, params, store }) {
    const aboutData = await axios.get(
      `https://admin.cmereye.com/wp-json/wp/v2/pages/253`
    );
    console.log(aboutData.data);
    return {
      AboutData: aboutData.data,
    };
  },
  name: "Services-In-Hong-Kong",
  head: {
    title: "希玛 香港业务 | 希玛业务",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "希玛在香港迈进全方位专科服务领域，由核心的眼科中心扩展至矫视中心、视光中心、牙科、肿瘤专科、医学美容及检测中心等，为客户提供一站式的专科医疗服务。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "希玛 眼科中心 矫视中心 视光中心 牙科 肿瘤专科医学美容检测中心",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  data() {
    return {
      items: [
        {
          專科: "眼科 ",
          中心名稱: "希瑪眼科中心 ",
          中心數目: "10 ",
          服務特色:
            "基本檢查、診症、特殊檢查、治療及門診手術、藥物處方、驗光配鏡及手術治療",
        },
        {
          專科: "眼科 ",
          中心名稱: "希瑪微笑矯視中心 ",
          中心數目: "2 ",
          服務特色:
            "SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡 (ICL) 及人工晶體置換術 (IOL)",
        },
        {
          專科: "眼科 ",
          中心名稱: "希瑪眼科視光中心 ",
          中心數目: "5 ",
          服務特色:
            "一站式安全、可靠及針對性的眼科檢查服務及改善視力方案，兒童近視控制方案",
        },
        {
          專科: "眼科 ",
          中心名稱: "嘉賓眼科及激光矯視手術中心 (希瑪全資附屬公司) ",
          中心數目: "2 ",
          服務特色: "眼科及激光矯視手術",
        },
        {
          專科: "牙科 ",
          中心名稱: "希瑪牙科中心 ",
          中心數目: "7 ",
          服務特色: "基本牙科服務，同時為客人提供美容牙科及高階牙科服務",
        },
        {
          專科: "腫瘤專科 ",
          中心名稱: "希瑪中西腫瘤專科中心 ",
          中心數目: "1 ",
          服務特色:
            "高質素的醫療服務包括篩查及診斷、癌症治療、視像會診及HPV疫苗注射",
        },
        {
          專科: "醫學美容 ",
          中心名稱: "愛瑪醫美 ",
          中心數目: "2 ",
          服務特色: "專業、安全、優質的全方位身體、面部治療方案",
        },
        {
          專科: "其他 ",
          中心名稱: "希華檢測 (國際) 有限公司 ",
          中心數目: "1 ",
          服務特色:
            "香港政府認可的本地COVID-19 RT-PCR 檢測機構，提供安全、方便及價錢合適的檢測服務",
        },
      ],
      AboutData: [],
    };
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
};
</script>
