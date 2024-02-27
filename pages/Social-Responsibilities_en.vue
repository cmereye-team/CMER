<template>
  <div class="theme-blue tanslate_yin">
    <template>
      <Header />
    </template>

    <div
      class="banner_about banner_about_template banner_about_social tanslate_yin"
    >
      <div class="banner_text xs_banner_en_text">
        <p>Social Responsibility</p>
      </div>
    </div>

    <div class="part_content_bg tanslate_yin social_en_left">
      <b-container
        fluid="md"
        class="content part_content part_content_about_template text-justify"
      >
        <div
          class="app_info xs_en_part_line1-6"
          v-html="AboutData.content.rendered"
        ></div>
      </b-container>
    </div>

    <template>
      <Footer />
    </template>
  </div>
</template>
<style scoped>
.banner_about_social {
  background-image: url(https://static.cmereye.com/imgs/2023/01/910888e1aff0c85e.jpg) !important;
}
.part_content_about_template li p {
  display: inline;
}
.part_content_about_template h2 {
  letter-spacing: 5px;
}

@media screen and (min-width: 992px) {
  .social-1-lette {
    letter-spacing: 0.1em !important;
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
  .part_content_about_template .xs-letter-initial {
    letter-spacing: initial !important;
  }
  .social_en_left .part_content_about_template p {
    text-align: left;
  }
}
</style>

<script>
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
import axios from "axios";
export default {
  components: { Header, Footer },
  name: "Social-Responsibilities",
  async asyncData({ app, req, query, params, store }) {
    const aboutData = await axios.get(
      `https://admin.cmereye.com/wp-json/wp/v2/pages/246`
    );
    console.log(aboutData.data);
    return {
      AboutData: aboutData.data,
    };
  },

  head: {
    title: "C-MER Social Responsibility",
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
        content:
          "At C-MER, health advocacy is the heart of what we do in social responsibility. It is our goal to raise public awareness towards the importance of healthy lifestyle for overall wellbeing through the provision of premier medical services. In the meantime, we go beyond CSR by creating shared value to benefit different stakeholders including corporate accomplishments, patients, staff and the community as a whole.  ",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "health advocacy| C-MER Social Responsibility| premier medical services| creating shared value| Hong Kong Humanity Award| The Ten Outstanding Young Persons of Hong Kong",
      },
    ],
  },
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
