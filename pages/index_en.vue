<template>
  <div>
    <Header_en />
    <div class="index tanslate_yin">
      <div class="banner">
        <div class="banner_text_index">
          <h1 class="mb-2"></h1>
          <p class="mb-2">
            <img src="/pic/banner_index_test.svg" alt="" srcset="" />
          </p>
          <p class="mb-2">for a better</p>
          <p>FUTURE</p>
        </div>
      </div>
      <div class="banner_bar tanslate_yin"></div>
      <!-- partone -->
      <div class="part partone">
        <div class="flex items-center justify-center">
          <img src="/pic/index_part1.jpg" alt="" />
          <div class="text_right">
            <div class="max_width max_en_width">
              <div class="title text-center">
                <p class="lett-1em">About C-MER</p>
              </div>
              <p class="text_info">
                Founded by Dr. LAM Shun Chiu Dennis
                <span class="text-red">in Hong Kong</span> in 2012, C-MER is a
                leading <span class="text-red">ophthalmic service</span> group
                in Hong Kong and the Guangdong-Hong Kong-Macao Greater Bay Area
                <span class="text-red">(“GBA”), and successfully</span> listed
                on The Main Board of the Stock Exchange of
                <span class="text-red">Hong Kong</span> in 2018.
                <span class="text-red"
                  >From 2021, the Group leverages its growing reputation and
                  increasing scale to</span
                >
                progressively expanded<span class="text-red"> into other</span>
                specialty services including dentistry, plastic surgery/medical
                aesthetics, family medicine and oncology. C-MER currently
                <span class="text-red">owns 70 </span>medical facilities, with
                its footprint covering Hong Kong, a number of major cities
                including Shenzhen and Guangzhou in the GBA, Beijing and
                Shanghai, etc. Guided by its “patient-centered” philosophy,
                C-MER is committed to providing professional,
                <span class="text-red"> quality, convenient and</span>
                affordable medical services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- parttwo  -->
      <div class="part parttwo tanslate_yin">
        <!-- <div class="fang"></div> -->
        <div class="cricle"></div>
        <div class="title text-center">
          <h4>OUR Features</h4>
          <p class="xs-letter-1em">Our uniqueness:</p>
          <p class="fixed_text">Features</p>
        </div>
        <div class="container">
          <div class="flex flex-wrap justify-center">
            <div
              class="index_card index_en_card"
              v-for="(item, idx) in index_card"
              :key="idx"
            >
              <div class="flex items-center justify-center">
                <img :src="item.pic" alt="" />
                <p class="text-gray-500">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- parttwo end -->
      <!-- partthree -->
      <div class="part partthree tanslate_yin">
        <div class="fang"></div>
        <b-container fluid="md" class="brand_box flex items-center flex-wrap">
          <b-row class="w-full justify-between">
            <b-col
              class="brand_card"
              :class="idx > 6 ? 'mt-5' : idx < 4 ? 'mt-20' : 'mt-10'"
              v-for="(item, idx) in foot_logo"
              :key="idx"
              ><a :href="item.link" target="_blank" rel="noopener noreferrer"
                ><img class="mx-auto" :src="item.pic" alt="" srcset=""
              /></a>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!-- partthree end -->
    </div>

    <template>
      <Footer_en />
    </template>
  </div>
</template>

<script>
import Header_en from "../components/Header_en.vue";
import Footer_en from "../components/Footer_en.vue";
import axios from "axios";

import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: "{msg} world",
    },
  },
};

export default {
  components: { Header_en, Footer_en },
  name: "Index_en",
  data() {
    return {
      index_card: [
        { pic: "/img/index_part2_1.png", title: "70 medical facilities" },
        {
          pic: "/img/index_part2_2.png",
          title: "11 hospitals in Mainland China",
        },
        {
          pic: "/img/index_part2_3.png",
          title: "Network  coverage in 11 cities ",
        },
        {
          pic: "/img/index_part2_4.png",
          title: ">1,000 healthcare professionals",
        },
        {
          pic: "/img/index_part2_5.png",
          title: "Hong Kong main board-listed company",
        },
        {
          pic: "/img/index_part2_6.png",
          title: "Medical group founded and managed by medical practitioners",
        },
      ],
      foot_logo: [
        { pic: "/img/index_footlogo.svg", link: "https://www.hkcmereye.com/" },
        { pic: "/img/Asset-1.svg", link: "https://smile.hkcmereye.com/" },
        {
          pic: "/img/index_footlogo_10.jpg",
          link: "https://www.cmervision.com/",
        },
        {
          pic: "/img/index_footlogo_3.png",
          link: "https://www.cmerdental.com/",
        },

        {
          pic: "/img/zhongliu-logo.png",
          link: "https://www.cmeroncology.com/",
        },
        {
          pic: "/img/index_footlogo_6.png",
          link: "https://championlasik.com/",
        },
        { pic: "/img/index_footlogo_7.png", link: "http://optcentre.com/" },

        { pic: "/img/amerkouq-logo.jpg", link: "http://www.ckj100.com/" },
        { pic: "/img/index_footlogo_8.png", link: "" },
        { pic: "/img/index_footlogo_9.png", link: "" },

        { pic: "/img/amer-logo.svg", link: "https://www.ameraesthetics.com/" },
        {
          pic: "/img/eon-dual-dark.jpg",
          link: "https://www.eonmedicalcentre.com/zh/%E9%97%9C%E6%96%BC%E9%A0%A4%E5%AE%89/",
        },

        {
          pic: "/img/index_footlogo_5.png",
          link: "https://www.healthhope.hk/",
        },
        { pic: "/img/HKCCR- NEW Logo.png", link: "https://www.hkccr.co/" },
      ],

      foot_menuList: [
        { url: "/About-cmer_en", name: "About C-MER" },
        { url: "Services-In-Hong-Kong_en", name: "Business Milestones" },
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
  /* ** Headers of the page */
  head: {
    title: "C-MER Eye Care Holdings Limited | C-MER Eye Care | C-MER | 3309", // 网站标题
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Founded by Dr. LAM Shun Chiu Dennis in 2012, C-MER is a leading specialty chain group in Hong Kong and the GBA and was successfully listed on The Main Board of the Stock Exchange of Hong Kong Limited in 2018. With ophthalmic service as its core business, the Group’s has progressively expanded its business scope to multi-specialty services including dentistry, plastic surgery/medical aesthetics, family medicine and oncology.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "3309| C-MER| LAM Shun Chiu Dennis| specialty chain group| multi-specialty| ophthalmic service| dentistry| plastic surgery| medical aesthetics| family medicine| oncology",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style>
.text-red {
  /* color: brown; */
  /* font-weight: 800; */
}
.title h4,
.title p {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  letter-spacing: 0.2em;
}
.title h4 {
  text-transform: uppercase;
  font-family: "Noto Sans CJK TC", serif;
  font-weight: 700;
}
.title p {
  font-weight: normal;
}
.title p.fixed_text {
  font-weight: bold;
  font-size: 100px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  text-align: center;
}
.title.title_blue h4,
.title.title_blue p {
  color: #51a8dd;
}
.title.title_blue p.fixed_text {
  color: #c4c4c4;
  opacity: 0.1;
}

.banner {
  height: 100vh;
  width: 100%;
  background: url(/pic/banner_pc1.jpg) no-repeat;
  background-size: cover;
  background-position: bottom right;
}
.banner_bar {
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  height: 15px;
  width: 100%;
}
.banner_text_index {
  position: absolute;
  right: 6vw;
  bottom: 20px;
}
.banner_text_index h1 {
  font-family: "Roboto" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 26.6667px;
  line-height: 31px;
  letter-spacing: 1em;
  color: #ffffff;
  text-shadow: 0px 5.33333px 5.33333px rgba(0, 0, 0, 0.25);
}
.banner_text_index p:nth-child(3) {
  font-family: "Avenir" !important;
  font-style: normal;
  font-weight: 350;
  font-size: 57.3333px;
  line-height: 10px; /* 瑠璃 */
  color: #005caf;
  display: inline-block;
  vertical-align: super;
}
.banner_text_index p:nth-child(4) {
  font-family: "Avenir" !important;
  font-style: normal;
  font-weight: 900;
  font-size: 66.6667px;
  line-height: 105px;
  color: #ffffff;
}

.partone {
  padding-bottom: 250px;
  max-width: 1920px;
  margin: auto;
}
.partone .flex img {
  width: 48%;
}
.partone .flex {
  position: relative;
}
.partone .flex::after {
  position: absolute;
  content: "";
  bottom: -20%;
  left: 0;
  right: 0;
  margin: auto;
  width: 21vw;
  height: 21vw;
  max-width: 395px;
  max-height: 395px;
  background: conic-gradient(
    from 133.66deg at 52.34% 54.52%,
    #51a8dd 0deg,
    #54aade 9deg,
    #85cefa 173.77deg,
    #51a8dd 360deg
  );
  opacity: 0.2;
  border-radius: 50%;
  z-index: -1;
}
.partone .text_right {
  padding: 120px 100px 100px;
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  width: 52%;
}
.partone .text_right .max_en_width {
  max-width: 100% !important;
}
.partone .text_right h4,
.partone .text_right .title p {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  letter-spacing: 0.1em;
}
.partone .text_right .text_info {
  font-size: 18px;
  line-height: 200%;
  text-align: justify;
  letter-spacing: 0.2em;
  color: #ffffff;
  padding-top: 40px;
  position: relative;
}
.partone .text_right .text_info::before {
  position: absolute;
  top: -38px;
  left: 0;
  right: 0;
  margin: auto;
  content: "ABOUT";
  font-size: 90px;
  letter-spacing: 0.2em;
  color: #ffffff;
  line-height: 1;
  text-align: center;
  font-family: "Noto Sans CJK TC", serif;
  font-weight: 700;
  opacity: 0.1;
}

.part_vision {
  margin-top: 0;
  padding-top: 0;
}
.part_vision .tracking-widest {
  margin-top: -40px;
}

.parttwo {
  background: rgba(196, 196, 196, 0.1);
  position: relative;
  width: 100%;
  overflow: hidden;
}
.parttwo .title h4,
.parttwo .title p {
  color: #005caf;
}
.parttwo .title .fixed_text {
  color: #ffffff;
  line-height: 0.8;
}
.parttwo .flex .index_card {
  width: 17.6vw;
  height: 17.6vw;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  margin-right: -1px;
  margin-bottom: -1px;
  transition: all 0.3s ease-in;
  position: relative;
  overflow: hidden;
}
.parttwo .flex .index_card .flex {
  width: 100%;
  height: 100%;
  position: relative;
  flex-flow: column;
  justify-content: space-evenly;
}
.parttwo .flex .index_card .flex p {
  font-size: 20px;
  text-align: center;
}
.parttwo .flex .index_card::before {
  position: absolute;
  font-family: fantasy;
  font-style: normal;
  font-weight: 900;
  font-size: 11vw;
  color: #51a8dd;
  opacity: 0.2;
  line-height: 1;
}
.parttwo .flex .index_card:nth-child(1)::before {
  content: "70";
  top: 0;
  left: 3px;
}
.parttwo .flex .index_card:nth-child(2)::before {
  content: "11";
  bottom: 0;
  left: -14px;
}
.parttwo .flex .index_card:nth-child(3)::before {
  content: "11";
  top: 0;
  right: -14px;
}
.parttwo .flex .index_card:nth-child(4)::before {
  content: "1000";
  bottom: 70px;
  font-size: 8vw;
}
.parttwo .container > .flex.flex-wrap {
  max-width: 54vw;
  margin: auto;
}
.parttwo .flex .index_card:hover {
  box-shadow: 7px 7px 0 #5ab9ea;
  transform: translate(-7px, -7px);
}
.fang {
  position: absolute;
  content: "";
  left: -200px;
  width: 300px;
  height: 300px;
  bottom: 0;
  margin: auto;
  border: 31px solid;
  border-color: #51a8dd;
  box-sizing: border-box;
  transform: rotate(45deg);
  opacity: 0.3;
  transition: all 0.3s ease-in;
}
.fang:hover {
  transform: rotate(90deg);
  border-radius: 50%;
  border-color: #005caf;
}
.parttwo .cricle {
  position: absolute;
  content: "";
  right: -200px;
  width: 372px;
  height: 372px;
  top: 100px;
  border: 31px solid;
  border-color: #ffffff;
  box-sizing: border-box;
  transform: rotate(45deg);
  transition: all 0.3s ease-in;
  border-radius: 50%;
}
.parttwo .cricle:hover {
  transform: rotate(135deg);
  border-radius: 0%;
  opacity: 0.3;
}

.partthree {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.index .brand_box .row {
  align-items: center;
}
.index .brand_box .brand_card {
  flex-basis: unset;
  width: 27%;
}
.index .brand_box .brand_card:nth-child(1),
.index .brand_box .brand_card:nth-child(2),
.index .brand_box .brand_card:nth-child(3),
.index .brand_box .brand_card:nth-child(4) {
  width: 25%;
}
.index .brand_box .brand_card:nth-child(5),
.index .brand_box .brand_card:nth-child(6),
.index .brand_box .brand_card:nth-child(7),
.index .brand_box .brand_card:nth-child(8),
.index .brand_box .brand_card:nth-child(9) {
  width: 33.3%;
}

.index .brand_box .brand_card:nth-child(11),
.index .brand_box .brand_card:nth-child(12),
.index .brand_box .brand_card:nth-child(13),
.index .brand_box .brand_card:nth-child(14) {
  width: 24.3%;
}
.brand_card:nth-child(8) img {
  max-height: unset;
}
.brand_card:nth-child(9) img {
  margin-right: 37% !important;
}
.brand_card:nth-child(11) img {
  max-height: 49px;
}
.brand_card:nth-child(12) img {
  max-height: unset;
}
.brand_card:nth-child(14) img {
  max-height: unset;
}
.index .brand_box .brand_card:nth-child(5) img {
  max-height: 50px !important;
}

@media screen and (min-width: 992px) {
  .partone .text_right .title p {
    font-size: 40px;
  }
  .parttwo .title p {
    font-size: 40px;
    letter-spacing: 0.1em;
  }
  .lett-1em {
    letter-spacing: 0.1em !important;
  }
  .max_en_width .text_info {
    letter-spacing: 0.1em !important;
    text-align: left !important;
  }
}

@media screen and (max-width: 1440px) {
  .partone .flex {
    align-items: normal;
  }
  .partone .flex img {
    object-fit: cover;
    width: 40%;
  }
  .partone .text_right {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .index .banner {
    height: 60vh !important;
    background-position: 71% !important;
    background-size: cover !important;
    position: relative;
  }
  .index .banner_bar {
    height: 7px;
  }
  .index .banner .banner_text_index {
    position: absolute;
    right: 0;
    bottom: 20px;
    max-width: 45vw;
  }
  .index .banner_text_index h1 {
    font-size: 16px;
    letter-spacing: 2px;
  }
  .index .banner_text_index p:nth-child(3) {
    font-size: 14px;
    line-height: 30px;
  }
  .index .banner_text_index p:nth-child(4) {
    font-size: 15px;
    line-height: 30px;
  }
  .index .banner_text_index p {
    margin-bottom: 0 !important;
    line-height: 1 !important;
  }
  .index .partone {
    padding-bottom: 0;
    padding-top: 0;
  }
  .index .partone .flex {
    display: block;
  }
  .index .partone .flex img,
  .partone .text_right {
    width: 100%;
  }
  .index .partone .flex img {
    display: none !important;
  }
  .index .partone .text_right .text_info::before {
    font-size: 12vw !important;
    top: -10px;
  }
  .index .partone .text_right .text_info {
    padding-top: 20px;
    letter-spacing: 0.05em;
    text-align: left;
  }
  .partone .text_right .max_en_width .lett-1em {
    letter-spacing: 0.1em;
  }
  .index .partone .text_right h4,
  .partone .text_right .title p {
    font-size: 22px;
  }
  .index .partone .text_right {
    padding-left: 30px;
    padding-right: 30px;
  }
  .index .part_vision {
    padding-top: 100px;
  }
  .index .part_vision .tracking-widest {
    font-size: 14px;
    margin-top: -15px;
  }
  .index .part_vision .title p.fixed_text {
    font-size: 12vw;
  }
  .index .parttwo .cricle {
    width: 48vw;
    height: 48vw;
    top: unset;
    bottom: -24vw;
    right: -24vw;
    border-width: 15px;
  }
  .index .parttwo .title .fixed_text {
    font-size: 10vw;
  }
  .index .parttwo .flex .index_en_card {
    width: 44vw;
    height: 50vw !important;
  }
  .index .parttwo .container > .flex.flex-wrap {
    max-width: 100vw;
  }
  .index .parttwo .flex .index_card::before {
    font-size: 29vw;
  }
  .index .parttwo .flex .index_card:nth-child(4)::before {
    font-size: 20vw;
    bottom: 0;
  }
  .index .parttwo .flex .index_card .flex img {
    max-width: 60%;
    height: 17vw;
  }
  .index .parttwo .flex .index_card .flex p {
    font-size: 16px;
    text-align: center;
    padding: 0 10px;
  }

  .fang {
    left: -20vw;
    width: 40vw;
    height: 40vw;
    border-width: 30px;
    z-index: 99;
  }
  .brand_box .row {
    margin-left: 0;
  }
  .brand_box .row .brand_card {
    margin-top: 3rem;
  }
}
</style>
