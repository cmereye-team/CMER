<template>
  <div class="theme-blue">
    <Header />
    <div class="banner_about banner_Release">
      <div class="banner_text">
        <p>公告及通函</p>
      </div>
    </div>
    <div class="part_content_bg">
      <b-container fluid="md" class="content part_content part_content_Release">
        <div class="part_Release part_en_announce">
          <div class="flex justify-between items-center">
            <div class="year_text tracking-widest">
              <p class="text-2xl underline pl-4">2023</p>
            </div>
            <div class="year_chose flex items-center">
              <b-dropdown text="年份" variant="outline-primary" class="m-2">
                <b-dropdown-item href="#">2023</b-dropdown-item>
                <b-dropdown-item href="#">2022</b-dropdown-item>
                <b-dropdown-item href="#">2021</b-dropdown-item>
                <b-dropdown-item href="#">2020</b-dropdown-item>
                <b-dropdown-item href="#">2019</b-dropdown-item>
                <b-dropdown-item href="#">2018</b-dropdown-item> </b-dropdown><b-button class="newslist_close"
                variant="primary">清除</b-button>
            </div>
          </div>
          <table class="w-full mt-10" v-if="isOldData">
            <tbody>
              <tr v-for="item in newList" :data-date="item.date | dateFormat('yyyy')">
                <td>{{ item.date | dateFormat("yyyy-MM-dd") }}</td>
                <td>
                  <a class="table-cell" :href="item.acf.post_pdf_link" target="_blank" rel="nofollow">
                    <p>{{ item.title.rendered }}</p>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="w-full mt-10" v-else>
            <tbody>
              <tr v-for="item in newList" :data-date="item.date | dateFormat('yyyy')">
                <td>{{ item.date | dateFormat("yyyy-MM-dd") }}</td>
                <td>
                  <a class="table-cell" :href="item.acf.post_pdf_link" target="_blank" rel="nofollow">
                    <p>{{ item.title.rendered }}</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-08-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0810.pdf"
                    target="_blank" rel="nofollow">
                    <p>董事会会议通告</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-08-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0802.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      截至二零二二年七月三十一日止股份发行人的证券变动月报表
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-07-04</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0705.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      截至二零二二年六月三十日止股份发行人的证券变动月报表
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-06-08</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW-2022-06-08.pdf"
                    target="_blank" rel="nofollow">
                    <p>翌日披露报表</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-06-01</td>
                <td>
                  <a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/06/20220601cn.pdf"
                    target="_blank" rel="nofollow">
                    <p>环境、社会及管治报告2021</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-05-24</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0524.pdf"
                    target="_blank" rel="nofollow">
                    <p>于2022年5月24日举行的股东週年大会的投票表决结果</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/04/042002.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      致非登记持有人之通知信函及申请表格 -
                      2021年度报告及股东週年大会通函之发布通知
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/04/042001.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      致登记股东之通知信函及更改指示回条 -
                      2021年度报告、股东週年大会通函及代表委任表格的刊发通知
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0420gu.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      购回授权及壹般授权、建议重选退任董事及股东周年大会通告
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0420nian.pdf"
                    target="_blank" rel="nofollow">
                    <p>股东周年大会的代表委任表格</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0420zhou.pdf"
                    target="_blank" rel="nofollow">
                    <p>股东周年大会通告</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-03-30</td>
                <td>
                  <a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/03/CW03309.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      截至2021年12月31日止年度的全年业绩及改变全球发售所得款项用途
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-03-14</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0315.pdf"
                    target="_blank" rel="nofollow">
                    <p>正面盈利预告</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-02-17</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0217.pdf"
                    target="_blank" rel="nofollow">
                    <p>深圳爱康健投资完成</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-01-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0127.pdf"
                    target="_blank" rel="nofollow">
                    <p>自愿公告林顺潮医生增持股份</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-01-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0124.pdf"
                    target="_blank" rel="nofollow">
                    <p>完成根据一般授权配售现有股份及认购新股份</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-01-13</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0113.pdf"
                    target="_blank" rel="nofollow">
                    <p>根据一般授权配售现有股份及认购新股份</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-01-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0111.pdf"
                    target="_blank" rel="nofollow">
                    <p>澄清公告</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2022-01-05</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2022-0105.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      须予披露交易收购嘉宾眼科全部已发行股本涉及根据一般授权发行代价股份
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2021-12-17</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2021-1217.pdf"
                    target="_blank" rel="nofollow">
                    <p>终止潜在收购事项的谅解备忘录</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2021-12-14</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2021-1214.pdf"
                    target="_blank" rel="nofollow">
                    <p>自愿公告 - 与香港理工大学签署战略合作备忘录</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2021-11-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2021-1130.pdf"
                    target="_blank" rel="nofollow">
                    <p>有关潜在收购事项的无法律约束力谅解备忘录</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2021-11-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2021-1125.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      向深创投收购深圳爱康健的额外股权及须予披露交易对深圳爱康健的投资条款作出若干修订
                    </p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2021-11-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW-20211111.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      (1)有关收购目标公司60%股权及向目标公司提供股东贷款的须予披露交易
                    </p>
                    <p>
                      (2)有关本公司截至2020年12月31日止年度的年报的附加资料
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-11-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW2021-1102.pdf"
                    target="_blank" rel="nofollow">
                    委任副主席及授出购股权</a>
                </td>
              </tr>
              <tr>
                <td>2021-11-02</td>
                <td>
                  <a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/04/20211102C.pdf"
                    target="_blank" rel="nofollow">
                    董事会的名单及其职分及职能</a>
                </td>
              </tr>

              <tr>
                <td>2021-09-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/dj-20210927.pdf"
                    target="_blank" rel="nofollow">
                    致登记持有人之通知信函及申请表格 -
                    2021年中期报告之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2021-09-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/fdj-20210927.pdf"
                    target="_blank" rel="nofollow">
                    致非登记持有人之通知信函及申请表格 -
                    2021年中期报告之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2021-09-03</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW20210903-1.pdf"
                    target="_blank" rel="nofollow">
                    内幕消息 须予披露交易
                    投资深圳爱康健及更改2020年认购事项所得款项用途</a>
                </td>
              </tr>
              <tr>
                <td>2021-09-03</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW20210903.pdf"
                    target="_blank" rel="nofollow">
                    截至2021年6月30日止六个月的中期业绩</a>
                </td>
              </tr>
              <tr>
                <td>2021-08-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW20210827.pdf"
                    target="_blank" rel="nofollow">
                    成立合资公司及向药监局申请OK镜在中国注册</a>
                </td>
              </tr>
              <tr>
                <td>2021-08-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2021-08-19-CWAnn.pdf"
                    target="_blank" rel="nofollow">
                    业务最新进展</a>
                </td>
              </tr>
              <tr>
                <td>2021-08-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW20210811_notice of board meeting_04082021.pdf"
                    target="_blank" rel="nofollow">
                    董事会会议通告</a>
                </td>
              </tr>
              <tr>
                <td>2021-08-06</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW20210806.pdf"
                    target="_blank" rel="nofollow">
                    正面盈利预告</a>
                </td>
              </tr>
              <tr>
                <td>2021-07-12</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW033090714ann.pdf"
                    target="_blank" rel="nofollow">根据购股权计划授出购股权</a>
                </td>
              </tr>
              <tr>
                <td>2021-06-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309 ESG20.pdf"
                    target="_blank" rel="nofollow">环境、社会及管治报告2020</a>
                </td>
              </tr>
              <tr>
                <td>2021-05-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/C20210527.pdf"
                    target="_blank" rel="nofollow">于2021年5月26日举行的股东週年大会的投票表决结果</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW202104225.pdf"
                    target="_blank" rel="nofollow">购回授权及一般授权、建议重选退任董事及股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW202104224.pdf"
                    target="_blank" rel="nofollow">股东週年大会的代表委任表格</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW202104223.pdf"
                    target="_blank" rel="nofollow">股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW202104222.pdf"
                    target="_blank" rel="nofollow">致登记股东之通知信函及更改指示回条 -
                    2020年度报告、股东週年大会通函及代表委任表格的刊发通知</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW202104221.pdf"
                    target="_blank" rel="nofollow">致非登记持有人之通知信函及申请表格 -
                    2020年度报告及股东週年大会通函之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-01</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW033090401.pdf"
                    target="_blank" rel="nofollow">截至2020年12月31日止年度的全年业绩及改变所得款项用途</a>
                </td>
              </tr>
              <tr>
                <td>2021-03-16</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW0330903162.pdf"
                    target="_blank" rel="nofollow">董事会会议通告</a>
                </td>
              </tr>
              <tr>
                <td>2021-03-16</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW033090316.pdf"
                    target="_blank" rel="nofollow">盈利警告</a>
                </td>
              </tr>
              <tr>
                <td>2021-02-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW033090226.pdf"
                    target="_blank" rel="nofollow">澄清公告 股份交易 收购目标公司60%股 权
                    涉及根据一般授权发行代价股份</a>
                </td>
              </tr>
              <tr>
                <td>2021-02-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309ann0211.pdf"
                    target="_blank" rel="nofollow">股份交易 收购目标公司60%股权
                    涉及根据一般授权发行代价股份</a>
                </td>
              </tr>
              <tr>
                <td>2021-02-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309ann0210.pdf"
                    target="_blank" rel="nofollow">关连交易 收购希华检测90%股权</a>
                </td>
              </tr>
              <tr>
                <td>2020-12-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW20201210.pdf"
                    target="_blank" rel="nofollow">澄清公告</a>
                </td>
              </tr>
              <tr>
                <td>2020-11-09</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/C1109.pdf"
                    target="_blank" rel="nofollow">董事会的名单及其职分及职能</a>
                </td>
              </tr>
              <tr>
                <td>2020-11-06</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/C1107.pdf"
                    target="_blank" rel="nofollow">委任独立非执行董事</a>
                </td>
              </tr>
              <tr>
                <td>2020-10-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309 Non-Registered Shareholders.pdf"
                    target="_blank" rel="nofollow">致非登记持有人之通知信函及申请表格 -
                    2020年中期报告之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2020-10-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309 Registered Shareholders.pdf"
                    target="_blank" rel="nofollow">致登记持有人之通知信函及申请表格 -
                    2020年中期报告之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2020-09-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW033092.pdf"
                    target="_blank" rel="nofollow">根据购股权计划授出购股权</a>
                </td>
              </tr>
              <tr>
                <td>2020-09-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309.pdf"
                    target="_blank" rel="nofollow">根据上市规则第13.51B(2)及13.51(2)条刊发的公告</a>
                </td>
              </tr>
              <tr>
                <td>2020-08-31</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309ann11.pdf"
                    target="_blank" rel="nofollow">截至2020 年6 月30日止六个月的中期业绩</a>
                </td>
              </tr>
              <tr>
                <td>2020-08-31</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW033099ann.pdf"
                    target="_blank" rel="nofollow">须予披露交易 收购医学执业业务 涉及根据一般授权发行代价股份
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-08-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Board Meeting_CW03309ann.pdf"
                    target="_blank" rel="nofollow">董事会会议通告
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-08-07</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309 ann.pdf"
                    target="_blank" rel="nofollow">盈利警告
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020063002119_c.pdf"
                    target="_blank" rel="nofollow">完成根据一般授权配售现有股份及认购新股份
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020063002143_c.pdf"
                    target="_blank" rel="nofollow">翌日披露报表
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-23</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020062300660_c.pdf"
                    target="_blank" rel="nofollow">环境、社会及管治报告2019
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020061900174_c.pdf"
                    target="_blank" rel="nofollow">根据一般授权配售现有股份及认购新股份
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-22</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020052200641_c.pdf"
                    target="_blank" rel="nofollow">关连交易深圳希玛医院重续租约
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020051900880_c.pdf"
                    target="_blank" rel="nofollow">于2020 年5 月19日举行的股东週年大会的 投票表决结果
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020050402112_c.pdf"
                    target="_blank" rel="nofollow">截至二零二零年四月叁十日止股份发行人的证券变动月报表
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020042900240_c.pdf"
                    target="_blank" rel="nofollow">翌日披露报表
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020041500845_c.pdf"
                    target="_blank" rel="nofollow">致登记股东之通知信函及更改指示回条 -
                    2019年度报告、股东週年大会通函及代表委任表格的刊发通知
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020041500833_c.pdf"
                    target="_blank" rel="nofollow">致非登记持有人之通知信函及申请表格 -
                    2019年度报告及股东週年大会通函之发布知
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020041500814_c.pdf"
                    target="_blank" rel="nofollow">股东週年大会通告
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020041500802_c.pdf"
                    target="_blank" rel="nofollow">股东週年大会的代表委任表格
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020041500788_c.pdf"
                    target="_blank" rel="nofollow">购回授权及一般授权、建议重选退任董事及股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2020-02-03</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309ann.pdf"
                    target="_blank" rel="nofollow">有关AVALON GLOBAL的进一步资料及 截止认购AVALON GLOBAL股份
                    涉及根据一般授权发行代价股份
                  </a>
                </td>
              </tr>
              <tr>
                <td>2019-12-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019122700686_c.pdf"
                    target="_blank" rel="nofollow">须予披露交易 收购深圳的土地使用权
                  </a>
                </td>
              </tr>
              <tr>
                <td>2019-12-23</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019122300482_c.pdf"
                    target="_blank" rel="nofollow">有关现有租赁协议的持续关连交易的年度上限</a>
                </td>
              </tr>
              <tr>
                <td>2019-12-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019122000932_c.pdf"
                    target="_blank" rel="nofollow">内幕消息涉及建议收购土地的可能须予披露交易</a>
                </td>
              </tr>
              <tr>
                <td>2019-11-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019112800807_c.pdf"
                    target="_blank" rel="nofollow">董事会的名单及其职分及职能</a>
                </td>
              </tr>
              <tr>
                <td>2019-11-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019112800796_c.pdf"
                    target="_blank" rel="nofollow">独立非执行董事的辞任及提名委员会及薪酬委员会组成的变动</a>
                </td>
              </tr>
              <tr>
                <td>2019-10-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019103000914_c.pdf"
                    target="_blank" rel="nofollow">有关不竞争契据的额外资料</a>
                </td>
              </tr>
              <tr>
                <td>2019-09-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2019093000490_c.pdf"
                    target="_blank" rel="nofollow">须予披露交易 完成收购上海璐视德医疗全部股权</a>
                </td>
              </tr>
              <tr>
                <td>2019-07-23</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190723549_c.pdf"
                    target="_blank" rel="nofollow">2018环境、社会及管治报告</a>
                </td>
              </tr>
              <tr>
                <td>2019-07-18</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190718711_c.pdf"
                    target="_blank" rel="nofollow">根据购股权计划授出购股权</a>
                </td>
              </tr>
              <tr>
                <td>2019-07-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn201907022795_c.pdf"
                    target="_blank" rel="nofollow">截至2019年6月30日止六个月的 正面盈利预告</a>
                </td>
              </tr>
              <tr>
                <td>2019-06-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190628812_c.pdf"
                    target="_blank" rel="nofollow">须予披露交易 补充协议 延长有关收购上海璐视德医疗全部股权的
                    最后截止日期</a>
                </td>
              </tr>
              <tr>
                <td>2019-06-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/ltn20190625990_c.pdf"
                    target="_blank" rel="nofollow">于2019年6月25日举行的股东週年大会的投票表决结果</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN201904301054_C.pdf"
                    target="_blank" rel="nofollow">澄清公告</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN201904251493_C.pdf"
                    target="_blank" rel="nofollow">致登记股东之通知信函及更改指示回条 -
                    2018年度报告、股东週年大会通函及代表委任表格的刊发通知</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN201904251481_C.pdf"
                    target="_blank" rel="nofollow">致非登记持有人之通知信函及申请表格 -
                    2018年度报告及股东週年大会通函之发布知</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN201904251459_C.pdf"
                    target="_blank" rel="nofollow">股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN201904251443_C.pdf"
                    target="_blank" rel="nofollow">股东週年大会的代表委任表格</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN201904251418_C.pdf"
                    target="_blank" rel="nofollow">购回授权及一般授权、 建议重选退任董事 及
                    股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2019-03-29</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN20190328790_C.pdf"
                    target="_blank" rel="nofollow">完成须予披露交易</a>
                </td>
              </tr>
              <tr>
                <td>2019-03-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN20190326262_C.pdf"
                    target="_blank" rel="nofollow">截至2018 年12 月31日止年度的全年业绩</a>
                </td>
              </tr>
              <tr>
                <td>2019-03-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/LTN20190326268_C.pdf"
                    target="_blank" rel="nofollow">须予披露交易 收购上海璐视德医疗全部股权</a>
                </td>
              </tr>
              <tr>
                <td>2018-09-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/致登记持有人之通知信函及申请表格 - 2018年中期报告之发布通知.pdf"
                    target="_blank" rel="nofollow">致登记持有人之通知信函及申请表格 -
                    2018年中期报告之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2018-09-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/致非登记持有人之通知信函及申请表格 - 2018年中期报告之发布通知.pdf"
                    target="_blank" rel="nofollow">致非登记持有人之通知信函及申请表格 -
                    2018年中期报告之发布通知</a>
                </td>
              </tr>
              <tr>
                <td>2018-08-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309ann1.pdf"
                    target="_blank" rel="nofollow">截至二零一八年六月叁十日止六个月之中期业绩公布</a>
                </td>
              </tr>
              <tr>
                <td>2018-08-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CW03309ann2.pdf"
                    target="_blank" rel="nofollow">
                    披露交易 收购昆明眼科医院80%股权 持续关连交易
                    交割收购事项后订立的租赁协议
                  </a>
                </td>
              </tr>
              <tr>
                <td>2018-08-17</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/盈利警告c.pdf"
                    target="_blank" rel="nofollow">盈利警告</a>
                </td>
              </tr>
              <tr>
                <td>2018-05-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/股东周年大会结果.pdf"
                    target="_blank" rel="nofollow">股东周年大会结果</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/致非登记持有人之通知信函及申请表格.pdf"
                    target="_blank" rel="nofollow">致非登记持有人之通知信函及申请表格</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/回条.pdf" target="_blank"
                    rel="nofollow">回条</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/致股东之函件 - 选择公司通讯文件的语言版本及收取方式.pdf"
                    target="_blank" rel="nofollow">致股东之函件 - 选择公司通讯文件的语言版本及收取方式</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/选择公司通讯文件的语言版本及收取方式.pdf"
                    target="_blank" rel="nofollow">选择公司通讯文件的语言版本及收取方式</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/股东週年大会通告.pdf"
                    target="_blank" rel="nofollow">股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/股东週年大会的代表委任表格.pdf"
                    target="_blank" rel="nofollow">股东週年大会的代表委任表格</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/购回授权及一般授权、建议重选退任董事及股东週年大会通告.pdf"
                    target="_blank" rel="nofollow">购回授权及一般授权、建议重选退任董事及股东週年大会通告</a>
                </td>
              </tr>
              <tr>
                <td>2018-03-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/CMER 2017_全年业绩_中.pdf"
                    target="_blank" rel="nofollow">截至二零一七年十二月叁十一日止年度之业绩公布</a>
                </td>
              </tr>
              <tr>
                <td>2018-02-07</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/稳定价格行动及稳定价格期结束.pdf"
                    target="_blank" rel="nofollow">稳定价格行动及稳定价格期结束</a>
                </td>
              </tr>
              <tr>
                <td>2018-01-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/C_03309_A153.pdf"
                    target="_blank" rel="nofollow">悉数行使超额配股权</a>
                </td>
              </tr>
              <tr>
                <td>2018-01-12</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Allotment Results Announcement (Chi).pdf"
                    target="_blank" rel="nofollow">发售价及配发结果公告</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="history">
            <div @click="oldData">历史数据</div>
            <div class="allPages">
              <div v-for="(item, index) in allPages" :key="index" @click="newListTotal(item)">{{ item }}</div>
            </div>
          </div>
        </div>
      </b-container>
    </div>
    <template>
      <Footer />
    </template>
  </div>
</template>

<script>
import Header from "../components/Header_cn.vue";
import Footer from "../components/Footer_cn.vue";
import axios from "axios";
import { getList } from "@/api/index.js";
export default {
  components: {
    Header,
    Footer,
  },
  async asyncData({ app, req, query, params, store }) {
    const newlistData = await axios.get(
      `https://admin.cmereye.com/wp-json/wp/v2/posts?categories=3`
    );
    return {
      newlist: newlistData.data,
    };
  },

  name: "Announcements-and-circulars",
  head: {
    title: "公告及通函",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "希瑪眼科醫療控股有限公司 ",
      },
      {
        name: "keywords",
        content: "公告 通函 公告及通函",
      },
    ],
  },

  data() {
    return {
      newList: [],
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
      isOldData: true,
      totalData: null, // 数据总数
      allPages: null, // 计算分多少页
      pageNum: 20, // 每页多少
      page: 1 // 第一页
    };
  },

  mounted() {
    this.getNewsList();
    $(".dropdown-menu li .dropdown-item").click(function () {
      $(".part_Release").addClass("ff");

      var datey = $(this).html();
      $(".year_text p").html(datey);

      /* console.log(datey); */

      $(".part_Release table tbody tr").each(function (index, value) {
        var date = $(this).children("td").eq(0).html().slice("0", "4");
        $(this).attr("data-date", date);
        if ($(this).attr("data-date") == datey) {
          $(this).addClass("f-show");
        } else {
          $(this).addClass("f-hide").removeClass("f-show");
        }
      });
    });
    $(".newslist_close").click(function (e) {
      $(".part_Release").removeClass("ff");
      $(".year_text p").html(new Date().getFullYear());
      e.preventDefault();
    });
  },
  methods: {
    getNewsList() {
      getList({ categories: 12, page: 1, per_page: this.pageNum }).then((res) => {
        if (res.status === 200) {
          this.newList = res.data;
          this.totalData = localStorage.getItem('total')
          this.allPages = Math.ceil(this.totalData / this.pageNum)
        }
      });
    },
    newListTotal(i){
      this.isOldData = true
      getList({ categories: 12, page: i, per_page: this.pageNum }).then((res) => {
        if (res.status === 200) {
          this.newList = res.data;
          this.totalData = localStorage.getItem('total')
          this.allPages = Math.ceil(this.totalData / this.pageNum)
        }
      });
    },
    oldData() {
      this.isOldData = false
    }
  },
  filters: {
    dateFormat: function (date, fmt) {
      if (!date) return date;
      date = new Date(date);
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 40) {
        return value.slice(0, 40) + "...";
      }
      return value;
    },
  },
};
</script>

<style>
.ff .f-hide {
  display: none;
}

.ff .f-show {
  display: flex;
}

.w-full {
  width: 100%;
}

.mt-10 {
  margin-top: 2.5em;
}

.text-2xl {
  font-size: 1.5rem;
}

.underline {
  text-decoration: underline;
}

.banner_Release {
  background-image: url(https://static.cmereye.com/imgs/2023/01/393b20d78a533ad1.jpg);
}

.banner_text {
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: center;
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 145px;
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  opacity: 0.9;
  color: #ffffff;
  padding-left: 10%;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
}

.banner_text h1 {
  font-weight: bold;
  margin-bottom: 10px;
}

.banner_text p {
  letter-spacing: 1em;
  font-weight: lighter;
}

.part_content {
  padding: 100px 0;
  position: relative;
}

.part_content_Release p {
  color: #707070;
  line-height: 2;
  letter-spacing: 0.1em;
  margin-bottom: 0;
}

.part_content .dropdown-item {
  color: #707070;
}

.part_content .dropdown-toggle,
.newslist_close {
  padding-left: 1em;
  letter-spacing: 0.5em;
  border-color: #c4c4c4;
  border-radius: 0;
}

.part_content .dropdown-toggle::after {
  margin-left: 5em;
}

.year_text p {
  color: #51a8dd;
}

.part_Release table tr {
  border: 1px solid #c4c4c4;
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}

.part_Release table tr::after {
  position: absolute;
  content: "";
  right: 25px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  border-bottom: 3px solid #51a8dd;
  border-right: 3px solid #51a8dd;
}

.part_Release table tr td {
  padding: 10px;
  display: block;
}

.part_Release table tr td:nth-child(1) {
  padding-left: 1.5rem;
  color: #51a8dd;
  font-weight: bold;
  padding-right: 2rem;
  border-right: 2px solid #c4c4c4;
}

.part_Release table tr td:nth-child(2) {
  padding-left: 2rem;
}

.part_Release table tr td:nth-child(2) p,
.part_Release table tr td:nth-child(2) a {
  color: #005caf;
  font-weight: 300;
  font-size: 18px;
}

.allPages {
  display: flex;
  margin-left: 25px;
}

.allPages>div {
  width: 40px;
  height: 40px;
  background: #fff;
  color: #71bfef;
  box-shadow: 1px 1px 0px 1px #ccc;
  border-radius: 0;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.allPages>div:hover {
  background: #71bfef;
  color: #fff;
}

.history {
  color: #71bfef;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

  .part_Release table tr td:nth-child(1),
  .part_Release table tr td:nth-child(2) {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .part_Release table tr::after {
    right: 10px;
    width: 11px;
    height: 11px;
  }

  .part_en_announce table tr td:nth-child(2) p,
  .part_Release table tr td:nth-child(2) a {
    max-width: 57vw;
    white-space: initial;
    text-overflow: initial;
    overflow: initial;
  }
}
</style>
