<template>
  <div class="theme-blue tanslate_yin">
    <template>
      <Header />
    </template>

    <div class="banner_about banner_about_dl tanslate_yin">
      <div class="banner_text xs_banner_en_text">
        <p>Mainland China Medical Network</p>
      </div>
    </div>
    <div
      class="part_content_bg relative part_content_zh tanslate_yin xs_en_part_line1-6"
    >
      <b-container fluid="md" class="content mb-20">
        <div class="service_map service_map_zh pt-10">
          <div class="text-center relative">
            <b-img class="mx-auto" src="/img/service_zh_bg.jpg"></b-img>
            <div class="point_eye_area">
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
              <div class="point point_eye"></div>
            </div>
            <div class="point_tooth_area">
              <div class="point point_tooth"></div>
            </div>
          </div>
        </div>

        <p
          class="text-center text-g text-gray-500 leading-loose mx-auto mt-5 mb-5"
        >
          Following 10 years of continuous efforts, C-MER has built up a
          nationwide hospital network with a strong focus in the GBA. The
          Group’s medical network covers Shenzhen, Beijing, Shanghai, Guangzhou,
          Kunming, Huizhou and a number of major cities in the GBA. C-MER’s
          high-quality, safe, reliable and affordable healthcare service has
          received positive feedback from patients. At the quarterly patient
          satisfaction rating and ranking of non-public hospitals conducted by
          Shenzhen Municipal Health Commission, C-MER (Shenzhen) Dennis Lam Eye
          Hospital has continued to hold high rankings for many years.
        </p>
      </b-container>

      <b-jumbotron bg-variant="light" class="content mb-20 pr-5">
        <div class="zh_table">
          <table
            role="table"
            aria-busy="false"
            aria-colcount="6"
            class="table b-table service_map_table service_map_zh_table"
            id="__BVID__1789"
          >
            <!----><!---->
            <thead role="rowgroup" class="">
              <!---->
              <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class="">
                  <div>Hospital Name</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="2" class="">
                  <div>Year of Establishment</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="3" class="">
                  <div>Address</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="4" class="">
                  <div>Floor Area</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="5" class="">
                  <div>Medical Facilities</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="6" class="">
                  <div>Uniqueness</div>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <!---->
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.szcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Shenzhen) Dennis Lam Eye Hospital
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk">
                    <b-img src="/pic/azh_1.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">March 2013</td>
                <td aria-colindex="3" role="cell" class="">
                  East Wing 303-314, West Wing 301-314, 1-1, Tairan 9th Road,
                  Shengtang Building, Tian'an Community, Shatou Street, Futian
                  District, Shenzhen
                </td>
                <td aria-colindex="4" role="cell" class="">5,100 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  30 hospital beds, 5 class 100 laminar flow operating rooms
                  that meet international standards
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>Grade II eye hospital <br /></p>
                  <p>A Medicare-designated hospital in Shenzhen <br /></p>
                  <p>
                    International Clinical Site, Zhongshan Ophthalmic Center,
                    Sun Yat-sen University
                  </p>
                  <p>1st non-government internet hospital in Shenzhen <br /></p>
                  <p>
                    Innovative case study of 10-year medical reform in Shenzhen
                    <br />
                  </p>
                  <p>
                    Deep collaboration for research & education with the
                    Department of Ophthalmology & Visual Sciences, the Chinese
                    University of Hong Kong
                  </p>
                  <p>Strategic Cooperation Unit of Shenzhen Polytechnic</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.bjcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Beijing) Dennis Lam Eye Hospital
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk2">
                    <b-img src="/pic/azh_2.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">January 2018</td>
                <td aria-colindex="3" role="cell" class="">
                  1-3/F, Red Sandalwood Plaza, 27 Jianguo Road, Gaobeidian,
                  Chaoyang District, Beijing
                </td>
                <td aria-colindex="4" role="cell" class="">4,620 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  30 hospital beds, 4 class 100 laminar flow operating rooms
                  that meet international standards
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>Grade II eye hospital <br /></p>
                  <p>A Medicare-designated hospital in Beijing <br /></p>
                  <p>Demonstration Base of treatment of presbyopia</p>
                  <p>
                    Doctor Alliance Unit of International Consultation on Rare
                    and Complex Eye Diseases (疑難眼病國際會診醫生聯盟單位)
                  </p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.shcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Shanghai) Vision Eye Hospital</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk3">
                    <b-img src="/pic/azh_3.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">November 2019</td>
                <td aria-colindex="3" role="cell" class="">
                  2-3/F, Nexxus, 758 Xizang South Road, Huangpu District,
                  Shanghai, and 3 clinics located in Pudong New Area, Putuo
                  District and Yangpu District
                </td>
                <td aria-colindex="4" role="cell" class="">5,310 m2</td>
                <td aria-colindex="5" role="cell" class=""></td>
                <td aria-colindex="6" role="cell" class="">
                  <p>A Medicare-designated hospital in Shanghai <br /></p>
                  <p>
                    5-Star rating (hospital) by Chinese Non-government Medical
                    Institutions Association <br />
                  </p>
                  <p>China Branded Doctor Team 2020</p>
                  <p>
                    Shanghai Research Center of Care for Children Eye Disease
                    Prevention and Treatment Center
                  </p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href=" http://www.cmerba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Xinan) Dennis Lam Eye Hospital
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk4">
                    <b-img src="/pic/azh_4.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">November 2018</td>
                <td aria-colindex="3" role="cell" class="">
                  1/F, Block 1 Dushi Cuihai Huayuan, 102 Chuangye 2nd Road,
                  Shiyan Street. Bao'an District, Shenzhen
                </td>
                <td aria-colindex="4" role="cell" class="">3,400 m2</td>
                <td aria-colindex="5" role="cell" class="">20 hospital beds</td>
                <td aria-colindex="6" role="cell" class="">
                  <p>A Medicare-designated hospital in Shenzhen</p>
                  <p>The Most Trusted Brand of Netizens 2021</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.gzcmer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C-MER (Guangzhou) Dennis Lam Eye Hospital</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk5">
                    <b-img src="/pic/azh_5.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">January 2022</td>
                <td aria-colindex="3" role="cell" class="">
                  Level 1, 2, 3 Shopping Mall, 183-187 Tian He North Road,
                  Tianhe District, Guangzhou,
                </td>
                <td aria-colindex="4" role="cell" class="">5,400 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  50 hospital beds, 4 class 100 laminar flow purified operating
                  rooms that meet international standards
                </td>
                <td aria-colindex="6" role="cell" class=""></td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.zhcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Zhuhai) Dennis Lam Eye Hospital</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk6">
                    <b-img src="/pic/azh_6.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">December 2020</td>
                <td aria-colindex="3" role="cell" class="">
                  1-2F, Jewelry Building, 15 Jingyuan Road, Xiangzhou District,
                  Zhuhai
                </td>
                <td aria-colindex="4" role="cell" class="">2,500 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  3 laminar flow purified operating rooms that meet
                  international standards
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>A Medicare-designated hospital in Zhuhai <br /></p>
                  <p>
                    Zhuhai Screening Institution of Myopia Control in Youth<br />
                  </p>
                  <p>
                    1st batch of designated healthcare institutions under
                    Measure of using HK registered drugs and medical devices
                    used in HK public hospitals in the GBA
                  </p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.hzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Huizhou) Dennis Lam Eye Hospital</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk7">
                    <b-img src="/pic/azh_7.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">March 2021</td>
                <td aria-colindex="3" role="cell" class="">
                  94 Yongxing Road, Danshui Qiaobei, Huiyang District, Huizhou
                </td>
                <td aria-colindex="4" role="cell" class="">4,000 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  30 hospital beds, 3 laminar flow purified operating rooms that
                  meet international standards
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>A Medicare-designated hospital in Huizhou</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.kmeye.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER Kunming Eye Hospital
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk8">
                    <b-img src="/pic/azh_8.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">June 2019</td>
                <td aria-colindex="3" role="cell" class="">
                  44 Yunrui West Road, Kunming
                </td>
                <td aria-colindex="4" role="cell" class="">5,000 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  80 hospital beds, 3 laminar flow purified operating rooms that
                  meet international standards
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>
                    A Medicare-designated hospital in Yunnan and Kunming <br />
                  </p>
                  <p>
                    Eye hospital approved by Kunming Municipal Health Commission
                  </p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.fzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >C-MER (Fuzhou) Dennis Lam Eye Center</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk9">
                    <b-img src="/pic/azh_9.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">December 2021</td>
                <td aria-colindex="3" role="cell" class="">
                  Zhonggeng Youth Plaza, 83 East Street, Gulou District, Fuzhou
                </td>
                <td aria-colindex="4" role="cell" class="">3,000 m2</td>
                <td aria-colindex="5" role="cell" class="">
                  30 hospital beds, 3 laminar flow purified operating rooms that
                  meet international standards
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>
                    Asia-Pacific Myopia Society – The Alliance of Prevention and
                    Control of Myopia in Children and Adolescents
                  </p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.lovelytooth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Shenzhen AKJ Stomatological Hospital <br />(an indirect
                    non-wholly owned subsidiary of C-MER)
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk10">
                    <b-img src="/pic/azh_10.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">January 2016</td>
                <td aria-colindex="3" role="cell" class="">
                  1-8F, Area C, Railway Station Building Luohu District,
                  Shenzhen, and 12 clinics located in Luohu, Futian, Nanshan and
                  Bao'an District
                </td>
                <td aria-colindex="4" role="cell" class="">
                  Total floor area of 18,000 m2
                </td>
                <td aria-colindex="5" role="cell" class="">
                  20 hospital beds,40 dental treatment chairs
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>A Medicare-designated hospital in Shenzhen <br /></p>
                  <p>Shenzhen Time-Honored Brand<br /></p>
                  <p>
                    Shenzhen teaching spot of postgraduate course training
                    class, Hospital of Stomatology, Sun Yat-sen University
                  </p>
                </td>
              </tr>

              <!----><!---->
            </tbody>
            <!---->
          </table>
        </div>
      </b-jumbotron>
    </div>

    <template>
      <Footer />
    </template>
  </div>
</template>
<style>
.service_map_zh_table thead th {
  border-bottom: none;
  border-bottom-width: 0;
}
.map_video iframe {
  max-width: 100%;
}
.map_box {
  background: rgba(81, 168, 221, 0.8);
  position: absolute;
  width: 100%;
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
  background-size: auto 100%;
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
  background-size: auto 100%;
  background-repeat: no-repeat;
  top: -6px;
  left: -1px;
}
.point.point_poly {
  background: url(/img/map_gold_point.svg);
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  top: -10px;
}
.point.point_poly::before {
  background: url(/img/map_point_woman.svg);
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  top: -10px;
}
.point:hover {
  transform: scale(2.2) translateY(-20px);
  cursor: pointer;
  z-index: 99;
  background: url(/img/map_dark_point.svg);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.service_map_zh .point_eye_area .point_eye:nth-child(1) {
  top: 290px;
  left: 750px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(2) {
  top: 410px;
  left: 860px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(3) {
  top: 670px;
  left: 500px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(4) {
  top: 600px;
  left: 880px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(5) {
  top: 680px;
  left: 800px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(6) {
  top: 660px;
  left: 760px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(7) {
  top: 680px;
  left: 790px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(8) {
  top: 690px;
  left: 740px;
}
.service_map_zh .point_eye_area .point_eye:nth-child(9) {
  top: 700px;
  left: 730px;
}

.service_map_zh .point_tooth_area .point_tooth:nth-child(1) {
  top: 690px;
  left: 770px;
}

.service_map_zh_table thead {
  background: #51a8dd;
  color: #fff;
}
.service_map_zh_table thead th:nth-child(1) {
  width: 100px;
}
.service_map_zh_table thead th:nth-child(3) {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.service_map_zh_table td {
  color: #707070;
}
.service_map_zh_table tbody tr td:last-child p {
  padding-left: 15px;
  position: relative;
}
.service_map_zh_table tbody tr td:last-child p::before {
  position: absolute;
  content: " · ";
  left: 0px;
  top: 0;
  color: #707070;
}
.banner_about_dl {
  background-image: url(https://static.cmereye.com/imgs/2023/01/0cb6d8341a64db6e.jpg);
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

@media screen and (min-width: 1111px) {
  .service_map_zh_table tbody tr td:first-child {
    white-space: nowrap;
  }
}

@media screen and (max-width: 768px) {
  .zh_table {
    overflow-x: scroll;
    margin-right: -15px;
    width: 100vw;
    box-shadow: 2px -2px 15px lightgray;
  }
  .zh_table table {
    width: 1500px;
  }
  .service_map_zh_table tbody tr td:first-child {
    white-space: nowrap;
  }
}
</style>
<script>
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
export default {
  components: { Header, Footer },
  name: "Services-In-China",
  data() {
    return {};
  },
  head: {
    title: "C-MER Mainland China Medical Network | C-MER Medical Services",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "C-MER| GBA| C-MER (Shenzhen) Dennis Lam Eye Hospital| C-MER (Beijing) Dennis Lam Eye Hospital| C-MER (Shanghai) Vision Eye Hospital| C-MER (Xinan) Dennis Lam Eye Hospital| C-MER (Guangzhou) Dennis Lam Eye Hospital| C-MER (Zhuhai) Dennis Lam Eye Hospital| C-MER (Huizhou) Dennis Lam Eye Hospital| C-MER Kunming Eye Hospital| C-MER (Fuzhou) Dennis Lam Eye Center| Shenzhen AKJ Stomatological Hospital",
      },
      {
        hid: "description",
        name: "description",
        content:
          "C-MER has built up a nationwide hospital network with a strong focus in the GBA. The Group’s medical network covers Shenzhen, Beijing, Shanghai, Guangzhou, Kunming, Huizhou and a number of major cities in the GBA.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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

  methods: {
    showMsgOk() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "深圳希瑪林順潮眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 深圳市福田區沙頭街道天安社區泰然九路盛唐商務大廈泰然九路1-1號、 西座301-314、 東座303-304 ",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_1b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk2() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "北京希瑪林順潮眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          "北京市朝陽區高碑店建國路27號紫檀大廈裙樓1-3層",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_2b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk3() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "上海希瑪瑞視眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          "上海市黃浦區 西藏南路758號 前社Nexxus2-3樓， 另有3間門診分部位於浦東新區、普陀區及楊浦區",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_3b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk4() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "深圳新安希瑪林順潮眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 深圳市寶安區新安街道創業二路南側 都市翠海華苑1棟1層",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_4b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk5() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "廣州希瑪林順潮眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 廣州市天河區天河北路183-187首層、2層、3層商場",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_5b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk6() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "珠海希瑪林順潮眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          "珠海市香洲區 吉大景園路15號 珠寶大廈一、二層",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_6b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk7() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "惠州希瑪林順潮眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [" 惠州市惠陽區淡水橋背永興路94號"]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_7b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk8() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "希瑪 ‧ 昆明眼科醫院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [" 昆明市雲瑞西路44號"]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_8b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk9() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "福州希瑪林順潮眼科" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 福州市鼓樓區東街83號 中庚青年廣場",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_9b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk10() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: {
          innerHTML: "深圳愛康健齒科集團<br> (希瑪間接非全資附屬公司)",
        },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 深圳市羅湖火車站大樓 C區1-8樓，另有12家口腔門診部分別設於深圳羅湖，福田，南山，寶安及廣州天河區",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/azh_10b.jpg",
            thumbnail: true,
            center: true,
            fluid: true,
            rounded: "5px",
            spinners: true,
          },
        }),
      ]);
      // We must pass the generated VNodes as arrays
      this.$bvModal.msgBoxOk([messageVNode], {
        title: [titleVNode],
        buttonSize: "sm",
        okVariant: "primary",
        headerClass: "bg-primary text-white",
        size: "lg",
        footerClass: "bg-light",
        hideFooter: true,
        okTitle: "關閉",
        centered: true,
        size: "lg",
      });
    },
  },
};
</script>
