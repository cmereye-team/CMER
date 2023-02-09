<template>
  <div class="theme-blue">
    <Header />

    <div class="banner_about banner_about_dl">
      <div class="banner_text">
        <p>内地医疗服务</p>
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
          希玛经过十年深耕，重点建立以大湾区为主的全国性实体医院网路，遍及深圳、北京、上海、广州、昆明、福州及大湾区多个重点城市。希玛的港式高质、安全可靠及价格合理的医疗服务，获得病人正面回馈。在深圳市卫生健康委员会每季度的非公立医院患者满意度评分中，深圳希玛林顺潮眼科医院长期高踞前列位置。
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
                  <div>医院名称</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="2" class="">
                  <div style="width: 100px">设立年份</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="3" class="">
                  <div>地址</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="4" class="">
                  <div>面积</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="5" class="">
                  <div>医疗设施</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="6" class="">
                  <div>医院特点</div>
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
                    >深圳希玛林顺潮眼科医院
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk">
                    <b-img src="/pic/azh_1.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2013年3月</td>
                <td aria-colindex="3" role="cell" class="">
                  深圳市福田区沙头街道天安社区泰然九路盛唐商务大厦泰然九路1-1号、
                  西座301-314、 东座303-304<br />
                  深圳希玛蔚蓝诊所：深圳市南山区粤海街道蔚蓝海岸社区创业路1777号海信南方大厦201
                </td>
                <td aria-colindex="4" role="cell" class="">5,100 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30张病床、 5间国际标准的 百级层流手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二级眼科专科医院 <br /></p>
                  <p>深圳市医保定点单位 <br /></p>
                  <p>中山眼科中心国际临床培训基地</p>
                  <p>深圳市首家社会办医互联网医院 <br /></p>
                  <p>“深圳医改十年创新案例” <br /></p>
                  <p>香港中文大学眼科及视觉科学学系眼科教育及科研深度合作</p>
                  <p>深圳职业技术学院战略合作单位</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.bjcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >北京希玛林顺潮眼科医院
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk2">
                    <b-img src="/pic/azh_2.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2018年1月</td>
                <td aria-colindex="3" role="cell" class="">
                  北京市朝阳区高碑店建国路27号紫檀大厦裙楼1-3层
                </td>
                <td aria-colindex="4" role="cell" class="">4,620 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30张病床、 4间国际标准的 百级层流手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二级眼科专科医院 <br /></p>
                  <p>北京市医保定点单位 <br /></p>
                  <p>老视矫正示范基地</p>
                  <p>疑难眼病国际会诊医生联盟单位</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.shcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >上海希玛瑞视眼科医院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk3">
                    <b-img src="/pic/azh_3.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2019年11月</td>
                <td aria-colindex="3" role="cell" class="">
                  上海市黄浦区 西藏南路758号 前社Nexxus2-3楼，
                  另有3间门诊分部位于浦东新区、普陀区及杨浦区
                </td>
                <td aria-colindex="4" role="cell" class="">5,310 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  <p>25张病床、 <br /></p>
                  <p>4间国际标准的层流淨化手术室</p>
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>上海市医保定点单位 <br /></p>
                  <p>中国非公立医疗机构协会五星医院星级评价 <br /></p>
                  <p>2020年度中国品牌医生团队</p>
                  <p>上海市“关心下一代研究中心”青少年眼病防治基地</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href=" http://www.cmerba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >深圳新安希玛林顺潮眼科医院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk4">
                    <b-img src="/pic/azh_4.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2018年11月</td>
                <td aria-colindex="3" role="cell" class="">
                  深圳市宝安区新安街道创业二路南侧 都市翠海华苑1栋1层
                </td>
                <td aria-colindex="4" role="cell" class="">3,400 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  <p>20张病床、</p>
                  <p>3间国际标准的层流淨化手术室</p>
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>深圳市医保定点单位</p>
                  <p>2021最值得线民信赖品牌</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.gzcmer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    广州希玛林顺潮眼科医院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk5">
                    <b-img src="/pic/azh_5.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2022年1月</td>
                <td aria-colindex="3" role="cell" class="">
                  广州市天河区天河北路183-187首层、2层、3层商场
                </td>
                <td aria-colindex="4" role="cell" class="">5,400 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  50张病床、 4间国际标准的百级层流淨化手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二级眼科专科医院</p>
                  <p>广州医保定点单位</p>
                  <p>疑难眼病国际会诊中心</p>
                  <p>亚太近视学会学术交流基地</p>
                  <p>全视觉屈光白内障手术示范基地</p>
                  <p>全视觉老视矫正诊疗示范基地</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.zhcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >珠海希玛林顺潮眼科医院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk6">
                    <b-img src="/pic/azh_6.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2020年12月</td>
                <td aria-colindex="3" role="cell" class="">
                  珠海市香洲区 吉大景园路15号 珠宝大厦一、二层
                </td>
                <td aria-colindex="4" role="cell" class="">3,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  20张病床、3间国际标准的层流淨化手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>珠海医保定点单位 <br /></p>
                  <p>珠海市青少年近视 防控指定筛查机构<br /></p>
                  <p>“港澳药械通”首批指定医疗机构</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.hzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >惠州希玛林顺潮眼科医院</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk7">
                    <b-img src="/pic/azh_7.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2021年3月</td>
                <td aria-colindex="3" role="cell" class="">
                  惠州市惠阳区淡水桥背永兴路94号
                </td>
                <td aria-colindex="4" role="cell" class="">4,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30张病床、3间国际标准的层流淨化手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>惠州市医保定点医院</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.kmeye.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >希玛 ‧ 昆明眼科医院
                  </a>
                  <b-button class="d-block border-0 p-0" @click="showMsgOk8">
                    <b-img src="/pic/azh_8.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2019年6月</td>
                <td aria-colindex="3" role="cell" class="">
                  昆明市云瑞西路44号
                </td>
                <td aria-colindex="4" role="cell" class="">5,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  80张病床、 3间国际标准的层流淨化手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>省市医保定点单位 <br /></p>
                  <p>昆明市卫生局批准执业的眼科专科医院</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.fzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >福州希玛林顺潮眼科门诊</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk9">
                    <b-img src="/pic/azh_9.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2021年12月</td>
                <td aria-colindex="3" role="cell" class="">
                  福州市鼓楼区东街83号 中庚青年广场
                </td>
                <td aria-colindex="4" role="cell" class="">3,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  30张病床、 3间国际标准的层流淨化手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>亚太近视学会儿童青少年近视防控科普活动基地联盟</p>
                </td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="https://www.fzcmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >揭阳希玛林顺潮眼科医院</a
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
                  揭阳市榕城区马牙路与新阳路交界处玉浦工贸大厦一楼大厅、副楼2-5层
                </td>
                <td aria-colindex="4" role="cell" class="">6,000 平方米</td>
                <td aria-colindex="5" role="cell" class="">
                  68张病床、3间国际标准的层流淨化手术室
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>二级眼科专业医院</p>
                  <p>揭阳希玛林顺潮眼科医院与揭阳市人民医院结成“医联体”</p>
                </td>
              </tr>

              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">
                  <a
                    href="http://www.lovelytooth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >深圳希玛爱康健口腔医院 <br />(希玛间接非全资附属公司)</a
                  >
                  <b-button class="d-block border-0 p-0" @click="showMsgOk10">
                    <b-img src="/pic/azh_10.jpg"></b-img>
                  </b-button>
                </td>
                <td aria-colindex="2" role="cell" class="">2016年1月</td>
                <td aria-colindex="3" role="cell" class="">
                  深圳市罗湖火车站大楼
                  C区1-8楼，另有12家口腔门诊部分别设于深圳罗湖，福田，南山及宝安区
                </td>
                <td aria-colindex="4" role="cell" class="">
                  总规模达到15,000多平方米
                </td>
                <td aria-colindex="5" role="cell" class="">
                  20张病床、 180台牙科综合治疗椅
                </td>
                <td aria-colindex="6" role="cell" class="">
                  <p>深圳医保定点单位 <br /></p>
                  <p>“深圳老字号”称号单位<br /></p>
                  <p>中山大学光华口腔医学院研究生课程进修班深圳市教学点</p>
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

@media screen and (min-width: 1111px) {
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
import Header from "../components/Header_cn.vue";
import Footer from "../components/Footer_cn.vue";

export default {
  components: { Header, Footer },
  name: "Services-In-China",
  data() {
    return {};
  },
  head: {
    title: "希玛 内地业务 | 希玛业务",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "希玛 大湾区 深圳希玛林顺潮眼科医院 北京希玛林顺潮眼科医院 上海希玛瑞视眼科医院 深圳新安希玛林顺潮眼科医院 广州希玛林顺潮眼科医院 珠海希玛林顺潮眼科医院 惠州希玛林顺潮眼科医院 希玛昆明眼科医院 福州希玛林顺潮眼科 深圳爱康健口腔医院",
      },
      {
        hid: "description",
        name: "description",
        content:
          "希玛经过十年深耕，重点建立以大湾区为主的全国性实体医院网路，遍及深圳、北京、上海、广州、昆明、福州及大湾区多个重点城市。希玛的港式高质、安全可靠及价格合理的医疗服务，获得客户正面回馈。在深圳市卫生健康委员会每季度的非公立医院患者满意度评分中，深圳希玛林顺潮眼科医院长期高踞前列位置。",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
          "深圳市福田区沙头街道天安社区泰然九路盛唐商务大厦泰然九路1-1号、 西座301-314、 东座303-304",
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
        domProps: { innerHTML: "上海希玛瑞视眼科医院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          "上海市黄浦区 西藏南路758号 前社Nexxus2-3楼， 另有3间门诊分部位于浦东新区、普陀区及杨浦区",
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk4() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "深圳新安希玛林顺潮眼科医院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 深圳市宝安区新安街道创业二路南侧 都市翠海华苑1栋1层",
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk5() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "广州希玛林顺潮眼科医院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 广州市天河区天河北路183-187首层、2层、3层商场",
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk6() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "珠海希玛林顺潮眼科医院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          "珠海市香洲区 吉大景园路15号 珠宝大厦一、二层",
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk7() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "惠州希玛林顺潮眼科医院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [" 惠州市惠阳区淡水桥背永兴路94号"]),
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk8() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "希玛 ‧ 昆明眼科医院" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [" 昆明市云瑞西路44号"]),
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk9() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: { innerHTML: "福州希玛林顺潮眼科" },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 福州市鼓楼区东街83号 中庚青年广场",
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
    showMsgOk10() {
      const h = this.$createElement;
      // Using HTML string
      const titleVNode = h("div", {
        domProps: {
          innerHTML: "深圳爱康健齿科集团<br> (希玛间接非全资附属公司)",
        },
      });
      // More complex structure
      const messageVNode = h("div", { class: ["foobar"] }, [
        h("p", { class: ["text-left"] }, [
          " 深圳市罗湖火车站大楼 C区1-8楼，另有12家口腔门诊部分别设于深圳罗湖，福田，南山，宝安及广州天河区",
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
        okTitle: "关闭",
        centered: true,
        size: "lg",
      });
    },
  },
  components: { Header, Footer },
};
</script>
