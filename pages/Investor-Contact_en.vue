<template>
  <div class="theme-blue tanslate_yin">
    <template>
      <Header />
    </template>

    <div class="banner_about banner_about_contact tanslate_yin">
      <div class="banner_text xs_banner_en_text">
        <p>IR Contact</p>
      </div>
    </div>
    <div class="part_content_bg relative">
      <b-container
        fluid="md"
        class="content part_content part_content_about_template mb-20"
      >
        <div class="text-center tanslate_yin">
          <h4 class="font-bold mt-10 mb-10 tracking-widest">
            C-MER EYE CARE HOLDINGS LIMITED
          </h4>
          <p class="mt-10">&nbsp;</p>
          <h4 class="font-bold mt-10 tracking-widest">Address:</h4>
          <p class="mt-2 tracking-widest">
            Suite 1535, Central Building, 1-3 Pedder Street, Hong Kong
          </p>

          <h4 class="font-bold mt-10 tracking-widest">Tel:</h4>
          <p class="mt-2 tracking-widest">(852) 3997 3266</p>

          <h4 class="font-bold mt-10 tracking-widest">Email:</h4>
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
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
export default {
  components: { Header, Footer },
  name: "Investor-Contact",
  data() {
    return {};
  },
  head: {
    title: "C-MER IR Contact",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "C-MER IR Contact",
      },
      {
        name: "keywords",
        content: "C-MER| C-MER IR Contact",
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
