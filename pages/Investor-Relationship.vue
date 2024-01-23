<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_about_Investor">
      <div class="banner_text">
        <p>投資者關係</p>
      </div>
    </div>
    <div class="part_content_bg relative">
      <b-container
        fluid="md"
        class="content part_content part_content_about_template mb-20"
      >
        <h2 class="border-b border-blue-300 pb-2 mb-4 inline-block">
          高速發展 把握機遇
        </h2>
        <p>
          希瑪高度重視與股東保持有效的溝通，通過不同的企業傳訊渠道，包括網址、公告及通函、微信號、社交平台、中期報告及年報等，提供真實、準確、完整和及時的披露，讓股東了解本集團的最新資訊。我們將繼續全力推展「Eye+」戰略，透過自然增長與併購並行策略，為股東創造最大價值。
        </p>

        <h2 class="text-center mt-20 font-normal">財務資料</h2>

        <img
          src="https://static.cmereye.com/imgs/2024/01/73890803c424c452.png"
          class="img-fluid mx-auto mt-8 tongji-img"
          alt=""
        />

        <table
          role="table"
          aria-busy="false"
          aria-colcount="3"
          class="table b-table table-hover mt-20 cw-tb table-75x"
        >
          <!----><!---->
          <thead role="rowgroup" class="">
            <!---->
            <tr role="row" class="">
              <th role="columnheader" scope="col" aria-colindex="1" class="">
                <div></div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="2" class="">
                <div>2018</div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="3" class="">
                <div>2019</div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="4" class="">
                <div>2020</div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="5" class="">
                <div>2021</div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="6" class="">
                <div>2022</div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <!---->
            <tr role="row" class="">
              <td aria-colindex="1" role="cell" class="">資產總值（千港元）</td>
              <td aria-colindex="2" role="cell" class="">886,849</td>
              <td aria-colindex="3" role="cell" class="">1,119,649</td>
              <td aria-colindex="4" role="cell" class="">1,629,211</td>
              <td aria-colindex="5" role="cell" class="">1,955,877</td>
              <td aria-colindex="6" role="cell" class="">2,901,687</td>
            </tr>
            <tr role="row" class="">
              <td aria-colindex="1" role="cell" class="">收入（千港元）</td>
              <td aria-colindex="2" role="cell" class="">429,374</td>
              <td aria-colindex="3" role="cell" class="">576,209</td>
              <td aria-colindex="4" role="cell" class="">699,545</td>
              <td aria-colindex="5" role="cell" class="">1,112,577</td>
              <td aria-colindex="6" role="cell" class="">1,731,903</td>
            </tr>
            <tr role="row" class="">
              <td aria-colindex="1" role="cell" class="">截至12月31日止年度</td>
              <td aria-colindex="2" role="cell" class=""></td>
              <td aria-colindex="3" role="cell" class=""></td>
              <td aria-colindex="4" role="cell" class=""></td>
              <td aria-colindex="5" role="cell" class=""></td>
              <td aria-colindex="6" role="cell" class=""></td>
            </tr>
          </tbody>
          <!---->
        </table>
      </b-container>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.cw-tb {
  text-align: center;
}
.cw-tb,
.cw-tb td,
.cw-tb th {
  border: none;
}
.cw-tb thead,
.cw-tb tbody tr:nth-child(1) td:nth-child(1) {
  background-color: #51a8dd;
  color: #fff;
}
.cw-tb tbody tr:nth-child(2) td,
.cw-tb tbody tr:nth-child(3) {
  color: #005caf;
}
.cw-tb tbody tr:nth-child(2) td:nth-child(1) {
  background-color: #005caf;
  color: #fff;
}
.cw-tb thead tr th:nth-child(1) {
  background-color: #fff;
}
.cw-tb tbody tr:nth-child(1) {
  color: #51a8dd;
}
.cw-tb tbody tr:nth-child(1) td:nth-child(1),
.cw-tb tbody tr:nth-child(2) td:nth-child(1),
.cw-tb th {
  letter-spacing: 0.5em;
}
.cw-tb tbody tr:nth-child(1) td:nth-child(1),
.cw-tb tbody tr:nth-child(2) td:nth-child(1),
.cw-tb tbody tr:nth-child(3) td:nth-child(1) {
  text-align: left;
}

.banner_about_Investor {
  background-image: url(https://static.cmereye.com/imgs/2023/01/b2d80bbe8ebf348e.jpg);
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
  .tongji-img {
    max-width: 27vw;
  }
  .table-75x {
    width: 75%;
    margin: 5rem auto 0;
  }
}

@media screen and (max-width: 768px) {
  .cw-tb {
    width: 100vw;
    margin-left: -15px;
    margin-right: -15px;
    overflow: hidden;
  }
  .cw-tb thead tr {
    display: flex;
    justify-content: space-around;
    padding-left: 20%;
  }
  .cw-tb tbody tr:nth-child(1) td[data-v-a05f1fb8]:nth-child(1),
  .cw-tb tbody tr:nth-child(2) td[data-v-a05f1fb8]:nth-child(1),
  .cw-tb th[data-v-a05f1fb8] {
    letter-spacing: 0;
  }
  .cw-tb thead tr:nth-child(1) th:nth-child(1) {
    display: none;
  }
  .cw-tb tbody tr td:nth-child(1) {
    display: flex;
    justify-content: center;
    width: 80px;
    text-align: center !important;
  }
  .cw-tb .table td {
    padding: 0 !important;
  }
  .cw-tb tbody tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cw-tb tbody tr:nth-child(1) td:last-child,
  .cw-tb tbody tr:nth-child(2) td:last-child {
    content: "-";
    background: #51a8dd;
    width: 50px;
    height: 100%;
  }
  .cw-tb tbody tr:nth-child(1) td:nth-child(even) {
    color: #5aa9da;
  }
  .cw-tb tbody tr:nth-child(1) td:nth-child(odd) {
    color: #fff;
    background: #51a8dd;
  }
  .cw-tb tbody tr:nth-child(2) td:nth-child(even) {
    color: #005caf;
  }
  .cw-tb tbody tr:nth-child(2) td:nth-child(odd) {
    color: #fff;
    background: #005caf;
  }
  .cw-tb tbody tr:last-child {
    display: block;
  }
  .cw-tb tbody tr:last-child td {
    display: block;
    white-space: nowrap;
  }

  .cw-tb tbody tr td {
    font-size: 12px;
  }
  .cw-tb tbody tr td:first-child,
  .cw-tb thead th {
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Investor-Relationship",
  data() {
    return {};
  },
  head: {
    title: "投資者關係",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "希瑪高度重視與股東保持有效的溝通，過過不同的企業傳訊渠道，包括網址、公告及通函、中期報告及年報等，提供真實、準確、完整和及時的披露，讓股東了解本集團的最新資訊。我們將繼續全力推展「Eye+」戰略，透過自身增長與併購並行策略，為股東創造最大價值。",
      },
      {
        name: "keywords",
        content: "希瑪 Eye+",
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
          submenu: [{ url: "/News", name: "新聞稿" }],
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
