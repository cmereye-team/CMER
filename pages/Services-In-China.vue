<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_about_dl">
      <div class="banner_text">
        <p>內地醫療網絡</p>
      </div>
    </div>
    <div class="part_content_bg relative part_content_zh china_cn_list">
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
          希瑪經過十年深耕，重點建立以大灣區為主的全國性實體醫院網路，遍及深圳、北京、上海、廣州、昆明、福州及大灣區多個重點城市。希瑪的港式高質、安全可靠及價格合理的醫療服務，獲得病人正面回饋。在深圳市衛生健康委員會每季度的非公立醫院患者滿意度評分中，深圳希瑪林順潮眼科醫院長期高踞前列位置。
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
                  <div>醫院名稱</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="2" class="">
                  <div style="width: 100px">設立年份</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="3" class="">
                  <div>地址</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="4" class="">
                  <div>面積</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="5" class="">
                  <div>醫療設施</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="6" class="">
                  <div>醫院特點</div>
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
                    >深圳希瑪林順潮眼科醫院
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk">
                    <b-img src="/pic/azh_1.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2013年3月</td>
                <td aria-colindex="3" role="cell" class="">
                  深圳市福田區沙頭街道天安社區泰然九路盛唐商務大廈泰然九路1-1號、
                  西座301-314、 東座303-304<br />深圳希瑪蔚藍診所：深圳市南山區粵海街道蔚藍海岸社區創業路1777號海信南方大廈201
                </td>
                <td aria-colindex="4" role="cell" class="">5,100 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30張病床、 5間國際標準的 百級層流手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二級眼科專科醫院 <br /></p>
                  <p>深圳市醫保定點單位 <br /></p>
                  <p>中山眼科中心國際臨床培訓基地</p>
                  <p>深圳市首家社會辦醫互聯網醫院 <br /></p>
                  <p>「深圳醫改十年創新案例」 <br /></p>
                  <p>香港中文大學眼科及視覺科學學系眼科教育及科研深度合作</p>
                  <p>深圳職業技術學院戰略合作單位</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.bjcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >北京希瑪林順潮眼科醫院
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk2">
                    <b-img src="/pic/azh_2.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2018年1月</td>
                <td aria-colindex="3" role="cell" class="">
                  北京市朝陽區高碑店建國路27號紫檀大廈裙樓1-3層
                </td>
                <td aria-colindex="4" role="cell" class="">4,620 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30張病床、 4間國際標準的 百級層流手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二級眼科專科醫院 <br /></p>
                  <p>北京市醫保定點單位 <br /></p>
                  <p>老視矯正示範基地</p>
                  <p>疑難眼病國際會診醫生聯盟單位</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.shcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >上海希瑪瑞視眼科醫院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk3">
                    <b-img src="/pic/azh_3.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2019年11月</td>
                <td aria-colindex="3" role="cell" class="">
                  上海市黃浦區 西藏南路758號 前社Nexxus2-3樓，
                  另有3間門診分部位於浦東新區、普陀區及楊浦區
                </td>
                <td aria-colindex="4" role="cell" class="">5,310 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  <p>25張病床、 <br /></p>
                  <p>4間國際標準的 <br /></p>
                  <p>層流淨化手術室</p>
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>上海市醫保定點單位 <br /></p>
                  <p>中國非公立醫療機構協會五星醫院星級評價 <br /></p>
                  <p>2020年度中國品牌醫生團隊</p>
                  <p>上海市「關心下一代研究中心」青少年眼病防治基地</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href=" http://www.cmerba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >深圳新安希瑪林順潮眼科醫院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk4">
                    <b-img src="/pic/azh_4.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2018年11月</td>
                <td aria-colindex="3" role="cell" class="">
                  深圳市寶安區新安街道創業二路南側 都市翠海華苑1棟1層
                </td>
                <td aria-colindex="4" role="cell" class="">3,400 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  <p>20張病床、 <br /></p>
                  <p>3間國際標準的 <br /></p>
                  <p>層流淨化手術室</p>
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>深圳市醫保定點單位</p>
                  <p>2021最值得線民信賴品牌</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.gzcmer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >廣州希瑪林順潮眼科醫院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk5">
                    <b-img src="/pic/azh_5.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2022年1月</td>
                <td aria-colindex="3" role="cell" class="">
                  廣州市天河區天河北路183-187首層、2層、3層商場
                </td>
                <td aria-colindex="4" role="cell" class="">5,400 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  50張病床、 4間國際標準的百級層流淨化手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二級眼科專科醫院</p>
                  <p>廣州醫保定點單位</p>
                  <p>疑難眼病國際會診中心</p>
                  <p>亞太近視學會學術交流基地</p>
                  <p>全視覺屈光白內障手術示範基地</p>
                  <p>全視覺老視矯正診療示範基地</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.zhcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >珠海希瑪林順潮眼科醫院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk6">
                    <b-img src="/pic/azh_6.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2020年12月</td>
                <td aria-colindex="3" role="cell" class="">
                  珠海市香洲區 吉大景園路15號 珠寶大廈一、二層
                </td>
                <td aria-colindex="4" role="cell" class="">3,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  <p>20張病床、</p>

                  <p>3間國際標準的層流淨化手術室</p>
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>珠海醫保定點單位 <br /></p>
                  <p>珠海市青少年近視 防控指定篩查機構<br /></p>
                  <p>「港澳藥械通」首批指定醫療機構</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.hzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >惠州希瑪林順潮眼科醫院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk7">
                    <b-img src="/pic/azh_7.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2021年3月</td>
                <td aria-colindex="3" role="cell" class="">
                  惠州市惠陽區淡水橋背永興路94號
                </td>
                <td aria-colindex="4" role="cell" class="">4,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30張病床、3間國際標準的層流淨化手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>惠州市醫保定點醫院</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.kmeye.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >希瑪 ‧ 昆明眼科醫院
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk8">
                    <b-img src="/pic/azh_8.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2019年6月</td>
                <td aria-colindex="3" role="cell" class="">
                  昆明市雲瑞西路44號
                </td>
                <td aria-colindex="4" role="cell" class="">5,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  80張病床、 3間國際標準的層流淨化手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>省市醫保定點單位 <br /></p>
                  <p>昆明市衛生局批准執業的眼科專科醫院</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.fzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >福州希瑪林順潮眼科門診</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk9">
                    <b-img src="/pic/azh_9.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2021年12月</td>
                <td aria-colindex="3" role="cell" class="">
                  福州市鼓樓區東街83號 中庚青年廣場
                </td>
                <td aria-colindex="4" role="cell" class="">3,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30張病床、 3間國際標準的層流淨化手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>亞太近視學會兒童青少年近視防控科普活動基地聯盟</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.fzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >揭陽希瑪林順潮眼科醫院</a
                  >
                  <b-button
                    class="d-block border-0 p-0"
                    @click="showMsgOk9"
                    style="width: 82%"
                  >
                    <b-img
                      src="https://static.cmereye.com/imgs/2023/02/966b90126db8542b.jpg"
                    ></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2022年8月</td>
                <td aria-colindex="3" role="cell" class="">
                  揭陽市榕城區馬牙路與新陽路交界處玉浦工貿大廈一樓大廳、副樓2-5層
                </td>
                <td aria-colindex="4" role="cell" class="">6,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  68張病床、3間國際標準的層流淨化手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二級眼科專業醫院</p>
                  <p>揭陽希瑪林順潮眼科醫院與揭陽市人民醫院結成「醫聯體」</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.lovelytooth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >深圳希瑪愛康健口腔醫院 <br />(希瑪間接非全資附屬公司)</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk10">
                    <b-img src="/pic/azh_10.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2016年1月</td>
                <td aria-colindex="3" role="cell" class="">
                  深圳市羅湖火車站大樓
                  C區1-8樓，另有12家口腔門診部分別設於深圳羅湖，福田，南山及寶安區
                </td>
                <td aria-colindex="4" role="cell" class="">
                  總規模達到15,000多平方米
                </td>
                <td aria-colindex="5" role="cell" class="">
                  20張病床、 180台牙科綜合治療椅
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>深圳醫保定點單位 <br /></p>
                  <p>「深圳老字號」稱號單位<br /></p>
                  <p>中山大學光華口腔醫學院研究生課程進修班深圳市教學點</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://m.fscmer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >佛山希瑪林順潮眼科醫院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk11">
                    <b-img src="/pic/D496A63731AA.png"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2023年8月</td>
                <td aria-colindex="3" role="cell" class="">	佛山市禪城區綠景一路13號金智慧廣場1-4樓
                </td>
                <td aria-colindex="4" role="cell" class="">6000平方米
                </td>
                <td aria-colindex="5" role="cell" class="">
                  50張床位、3間國際標準層流淨化手術室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>佛山市醫保定點單位<br /></p>
                </td>
              </tr>
              <!----><!---->
            </tbody>
            <!---->
          </table>
        </div>
      </b-jumbotron>
    </div>
    <Footer />
  </div>
</template>
<style>
p {
  font-size: 16px !important;
}
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

@media screen and (min-width: 1111px) {
  .btn-secondary:hover img {
    transform: scale(1.2);
    transition: all 0.6s;
  }

  .service_map_zh_table tbody tr td:first-child {
    white-space: nowrap;
  }
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

  .china_cn_list .service_map_zh_table td {
    line-height: 30px !important;
  }
  .china_cn_list .service_map_zh_table td p {
    font-size: 16px !important;
  }
}
</style>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "Services-In-China",
  data() {
    return {};
  },
  head: {
    title: "希瑪 內地業務 | 希瑪業務 ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "希瑪 大灣區 深圳希瑪林順潮眼科醫院 北京希瑪林順潮眼科醫院 上海希瑪瑞視眼科醫院 深圳新安希瑪林順潮眼科醫院 廣州希瑪林順潮眼科醫院 珠海希瑪林順潮眼科醫院 惠州希瑪林順潮眼科醫院 希瑪昆明眼科醫院 福州希瑪林順潮眼科 深圳愛康健口腔醫院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "希瑪經過十年深耕，重點建立以大灣區為主的全國性實體醫院網路，遍及深圳、北京、上海、廣州、昆明、福州及大灣區多個重點城市。希瑪的港式高質、安全可靠及價格合理的醫療服務，獲得客戶正面回饋。在深圳市衛生健康委員會每季度的非公立醫院患者滿意度評分中，深圳希瑪林順潮眼科醫院長期高踞前列位置。",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
            src: "https://static.cmereye.com/imgs/2023/02/966b90126db8542b.jpg",
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
    showMsgOk11() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: {
          innerHTML: "佛山希瑪林順潮眼科醫院",
        },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 佛山市禪城區綠景一路13號金智慧廣場1-4樓",
        ]),
        h("br"),
        h("b-img", {
          props: {
            src: "/pic/1D496A63731AA.png",
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
