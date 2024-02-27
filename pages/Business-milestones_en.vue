<template>
  <div class="theme-blue tanslate_yin">
    <template>
      <Header />
    </template>

    <div class="banner_about banner_History tanslate_yin">
      <div class="banner_text xs_banner_en_text">
        <p>Business milestones</p>
      </div>
    </div>
    <div class="part_content_bg part_History_bg tanslate_yin business_en_meli">
      <b-container fluid="md" class="content part_content part_History_content">
        <div class="app_info" v-html="AboutData.content.rendered"></div>
      </b-container>
    </div>

    <template>
      <Footer />
    </template>
  </div>
</template>
<style scoped>
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
  font-size: 16px;
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
  letter-spacing: initial !important;
  color: #707070;
  display: flex;
  font-weight: 300;
}

@media screen and (min-width: 992px) {
  .banner_text p {
    font-size: 40px;
  }
  .bussiness-history-en .part_History_item > p strong {
    min-width: 130px !important;
    text-align: left !important;
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
    padding-left: initial;
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

  .business_en_meli .part_History .part_History_item p strong {
    min-width: 120px;
    text-align: right;
  }
}
</style>

<script>
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
import axios from "axios";
export default {
  components: { Header, Footer },
  async asyncData({ app, req, query, params, store }) {
    const aboutData = await axios.get(
      `https://admin.cmereye.com/wp-json/wp/v2/pages/218`
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
    title: "C-MER Business Milestones",
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
      { name: "apple-mobile-web-app-title", content: "C-MER" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-tap-highlight", content: "no" },
      { name: "author", content: "C-MER" },
      { name: "robots", content: "index,follow" },
      {
        hid: "description",
        name: "description",
        content: "C-MER Business Milestones",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "C-MER| business milestones| C-MER Dennis Lam Eye Hospital| C-MER Eye Center| C-MER Eye Clinic | C-MER Multi-specialty Medical Center| C-MER Oncology| C-MER Smile Laser Center| Shenzhen CKJ|  Hong Kong Champion Eye",
      },
    ],
  },

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
