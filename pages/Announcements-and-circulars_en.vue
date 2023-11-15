<template>
  <div class="theme-blue tanslate_yin">
    <template>
      <Header />
    </template>

    <div class="banner_about banner_Release tanslate_yin">
      <div class="banner_text xs_banner_en_text">
        <p>Announcement and Circulars</p>
      </div>
    </div>
    <div class="part_content_bg tanslate_yin">
      <b-container fluid="md" class="content part_content part_content_Release">
        <div class="part_Release part_en_announce">
          <div class="flex justify-between items-center">
            <div class="year_text tracking-widest">
              <p class="text-2xl underline pl-4 xs-pl-initial">2023</p>
            </div>
            <div class="year_chose flex items-center xs-letter-1em">
              <b-dropdown text="year" variant="outline-primary" class="m-2">
                <b-dropdown-item href="#">2023</b-dropdown-item>
                <b-dropdown-item href="#">2022</b-dropdown-item>
                <b-dropdown-item href="#">2021</b-dropdown-item>
                <b-dropdown-item href="#">2020</b-dropdown-item>
                <b-dropdown-item href="#">2019</b-dropdown-item>
                <b-dropdown-item href="#">2018</b-dropdown-item> </b-dropdown><b-button
                class="newslist_close xs-letter-1em" variant="primary">clear</b-button>
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
          <table class="w-full mt-10 tanslate_yin" v-else>
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
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0810.pdf"
                    target="_blank" rel="nofollow">
                    <p>NOTICE OF BOARD MEETING</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-08-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0802.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      Monthly Return of Equity Issuer on Movements in Securities
                      for the month ended 31 July 2022
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-07-04</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0705.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      Monthly Return of Equity Issuer on Movements in Securities
                      for the month ended 30 June 2022
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-06-08</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW-2022-06-08.pdf"
                    target="_blank" rel="nofollow">
                    <p>Next Day Disclosure Returns</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-06-01</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EN-2022-0530qiye.pdf"
                    target="_blank" rel="nofollow">
                    <p>ENVIRONMENTAL,SOCIAL AND GOVERNANCE REPORT 2021</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-05-24</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0524.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      POLL RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 24 MAY
                      2022
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EWCW2022-0420fei1.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      Notification Letter to Non-Registered Holder and Request
                      Form - Notice of Publication of 2021 Annual Report, AGM
                      Circular and Proxy Form (“Current Corporate
                      Communications”)
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EWCW2022-0420fei.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      Notification Letter to Shareholder and Change Request Form
                      - Notice of Publication of 2021 Annual Report, AGM
                      Circular and Proxy Form (the “Current Corporate
                      Communications”)
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0420gu.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      REPURCHASE MANDATE AND GENERAL MANDATE, PROPOSED
                      RE-ELECTION OF RETIRING DIRECTORS AND NOTICE OF ANNUAL
                      GENERAL MEETING
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0420nian.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      Form of Proxy for use at the Annual General Meeting
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-04-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0420zhou.pdf"
                    target="_blank" rel="nofollow">
                    <p>NOTICE OF THE ANNUAL GENERAL MEETING</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-03-30</td>
                <td>
                  <a class="table-cell" href="https://admin.cmereye.com/wp-content/uploads/2022/03/EW03309.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      ANNUAL RESULTS FOR THE YEAR ENDED 31 DECEMBER 2021 AND
                      CHANGE IN USE OF PROCEEDS FROM THE GLOBAL OFFERING
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-03-14</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0315.pdf"
                    target="_blank" rel="nofollow">
                    <p>POSITVE PROFIT ALERT</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-02-17</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0217.pdf"
                    target="_blank" rel="nofollow">
                    <p>COMPLETION OF THE SHENZHEN CKJ INVESTMENT</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-01-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0127.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      VOLUNTARY ANNOUNCEMENT INCREASE IN SHAREHOLDING BY DR.
                      DENNIS LAM
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-01-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0124.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      CLOSING OF PLACING OF EXISTING SHARES AND SUBSCRIPTION OF
                      NEW SHARES UNDER GENERAL MANDATE
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-01-13</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0113.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      PLACING OF EXISTING SHARES AND SUBSCRIPTION OF NEW SHARES
                      UNDER GENERAL MANDATE
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-01-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0111.pdf"
                    target="_blank" rel="nofollow">
                    <p>CLARIFICATION ANNOUNCEMENT</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2022-01-05</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2022-0105.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      DISCLOSEABLE TRANSACTION ACQUISITION OF THE ENTIRE ISSUED
                      SHARE CAPITAL IN CHAMPION EYE INVOLVING ISSUE OF
                      CONSIDERATION SHARES UNDER THE GENERAL MANDATE
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-12-17</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2021-1217.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      TERMINATION OF MEMORANDUM OF UNDERSTANDING IN RESPECT OF A
                      POSSIBLE ACQUISITION
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-12-14</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2021-1214.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      VOLUNTARY ANNOUNCEMENT - SIGNING OF STRATEGIC COOPERATION
                      MEMORANDUM WITH THE HONG KONG POLYTECHNIC UNIVERSITY
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-11-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2021-1130.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      NON-LEGALLY BINDING MEMORANDUM OF UNDERSTANDING IN RESPECT
                      OF THE POSSIBLE ACQUISITION
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-11-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2021-1125.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      ACQUISITION OF FURTHER EQUITY INTEREST IN SHENZHEN CKJ
                      FROM SHENZHEN CHUANGXIN AND DISCLOSEABLE TRANSACTION
                      CERTAIN AMENDMENTS TO THE TERMS OF THE INVESTMENT IN
                      SHENZHEN CKJ
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-11-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW-20211111.pdf"
                    target="_blank" rel="nofollow">
                    <p>
                      (1) DISCLOSEABLE TRANSACTION IN RELATION TO THE
                      ACQUISITION OF 60% EQUTY INTEREST OF THE TARGET AND
                      PROVISION OF SHAREHOLDERS’ LOANS TO THE TARGET
                    </p>
                    <p>
                      (2) ADDITIONAL INFORMATION IN RELATION TO THE ANNUAL
                      REPORT OF THE COMPANY FOR THE YEAR ENDED 31 DECEMBER 2020
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-11-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW2021-1102.pdf"
                    target="_blank" rel="nofollow">
                    APPOINTMENT OF VICE CHAIRMAN AND GRANT OF SHARE OPTIONS
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-09-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/dj-20210927.pdf"
                    target="_blank" rel="nofollow">
                    Notification Letter to Non-Registered Holder and Request
                    Form - Notice of Publication of 2021 Interim Report
                  </a>
                </td>
              </tr>
              <tr>
                <td>2021-09-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/fdj-20210927.pdf"
                    target="_blank" rel="nofollow">
                    Notification Letter to Registered Holder and Request Form -
                    Notice of Publication of 2021 Interim Report
                  </a>
                </td>
              </tr>

              <tr>
                <td>2021-09-03</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW20210903-1.pdf"
                    target="_blank" rel="nofollow">INSIDE INFORMATION DISCLOSEABLE TRANSACTION INVESTMENT IN
                    SHENZHEN CKJ AND CHANGE IN USE OF PROCEEDS OF THE 2020
                    SUBSCRIPTION</a>
                </td>
              </tr>

              <tr>
                <td>2021-09-03</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW20210903.pdf"
                    target="_blank" rel="nofollow">INTERIM RESULTS FOR THE SIX MONTHS ENDED 30 JUNE 2021</a>
                </td>
              </tr>

              <tr>
                <td>2021-08-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW20210827.pdf"
                    target="_blank" rel="nofollow">VOLUNTARY ANNOUNCEMENT – FORMATION OF A JOINT VENTURE AND
                    APPLYING TO NMPA FOR OK LENS REGISTRATION IN CHINA</a>
                </td>
              </tr>

              <tr>
                <td>2021-08-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2021-08-19-EWAnn.pdf"
                    target="_blank" rel="nofollow">BUSINESS UPDATE</a>
                </td>
              </tr>

              <tr>
                <td>2021-08-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW20210811_notice of board meeting_04082021.pdf"
                    target="_blank" rel="nofollow">NOTICE OF BOARD MEETING</a>
                </td>
              </tr>

              <tr>
                <td>2021-08-06</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW20210806.pdf"
                    target="_blank" rel="nofollow">Positive profit alert</a>
                </td>
              </tr>

              <tr>
                <td>2021-07-12</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033090714ann.pdf"
                    target="_blank" rel="nofollow">GRANT OF SHARE OPTIONS UNDER THE SHARE OPTION SCHEME</a>
                </td>
              </tr>
              <tr>
                <td>2021-06-28</td>

                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309 ESG20.pdf"
                    target="_blank" rel="nofollow">ENVIRONMENTAL, SOCIAL AND GOVERNANCE REPORT 2020</a>
                </td>
              </tr>
              <tr>
                <td>2021-05-27</td>

                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/E20210527.pdf"
                    target="_blank" rel="nofollow">POLL RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 26 MAY
                    2021</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW202104225.pdf"
                    target="_blank" rel="nofollow">REPURCHASE MANDATE AND GENERAL MANDATE, PROPOSED
                    RE-ELECTION OF RETIRING DIRECTORS AND NOTICE OF ANNUAL
                    GENERAL MEETING</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW202104224.pdf"
                    target="_blank" rel="nofollow">Form of Proxy for use at the Annual General Meeting</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW202104223.pdf"
                    target="_blank" rel="nofollow">NOTICE OF ANNUAL GENERAL MEETING</a>
                </td>
              </tr>

              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW202104222.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Shareholder and Change Request Form
                    - Notice of Publication of 2020 Annual Report, AGM Circular
                    and Proxy Form</a>
                </td>
              </tr>
              <tr>
                <td>2021-04-21</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW202104221.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Non-Registered Holder and Request
                    Form - Notice of Publication of 2020 Annual Report and AGM
                    Circular</a>
                </td>
              </tr>

              <tr>
                <td>2021-04-01</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033090401.pdf"
                    target="_blank" rel="nofollow">ANNUAL RESULTS FOR THE YEAR ENDED 31 DECEMBER 2020 AND
                    CHANGE IN USE OF PROCEEDS</a>
                </td>
              </tr>
              <tr>
                <td>2021-03-16</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW0330903162.pdf"
                    target="_blank" rel="nofollow">NOTICE OF BOARD MEETING</a>
                </td>
              </tr>
              <tr>
                <td>2021-03-16</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033090316.pdf"
                    target="_blank" rel="nofollow">PROFIT WARNING</a>
                </td>
              </tr>
              <tr>
                <td>2021-02-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033090226.pdf"
                    target="_blank" rel="nofollow">CLARIFICATION ANNOUNCEMENT SHARE TRANSACTION ACQUISITION OF
                    60% EQUITY INTEREST IN THE TARGET COMPANY INVOLVING THE
                    ISSUE OF CONSIDERATION SHARES UNDER GENERAL MANDATE</a>
                </td>
              </tr>
              <tr>
                <td>2021-02-11</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309ann0211.pdf"
                    target="_blank" rel="nofollow">SHARE TRANSACTION ACQUISITION OF 60% EQUITY INTEREST IN THE
                    TARGET COMPANY INVOLVING THE ISSUE OF CONSIDERATION SHARES
                    UNDER GENERAL MANDATE</a>
                </td>
              </tr>
              <tr>
                <td>2020-02-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309ann0210.pdf"
                    target="_blank" rel="nofollow">CONNECTED TRANSACTION ACQUISITION OF 90% EQUITY INTEREST IN
                    HEALTH HOPE</a>
                </td>
              </tr>
              <tr>
                <td>2020-12-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW20201210.pdf"
                    target="_blank" rel="nofollow">CLARIFICATION ANNOUNCEMENT</a>
                </td>
              </tr>
              <tr>
                <td>2020-11-09</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/E1109.pdf"
                    target="_blank" rel="nofollow">LIST OF DIRECTORS AND THEIR ROLES AND FUNCTIONS</a>
                </td>
              </tr>
              <tr>
                <td>2020-11-06</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/E1107.pdf"
                    target="_blank" rel="nofollow">APPOINTMENT OF INDEPENDENT NON-EXECUTIVE DIRECTORS</a>
                </td>
              </tr>
              <tr>
                <td>2020-10-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309 Non-Registered Shareholders.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Non-Registered Holder and Request
                    Form - Notice of Publication of 2020 Interim Report</a>
                </td>
              </tr>
              <tr>
                <td>2020-10-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309 Registered Shareholders.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Registered Holder and Request Form -
                    Notice of Publication of 2020 Interim Report</a>
                </td>
              </tr>
              <tr>
                <td>2020-09-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033092.pdf"
                    target="_blank" rel="nofollow">GRANT OF SHARE OPTIONS UNDER THE SHARE OPTION SCHEME</a>
                </td>
              </tr>
              <tr>
                <td>2020-09-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309.pdf"
                    target="_blank" rel="nofollow">ANNOUNCEMENT PURSUANT TO RULES 13.51B(2) AND 13.51(2) OF
                    THE LISTING RULES</a>
                </td>
              </tr>
              <tr>
                <td>2020-08-31</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309ann11.pdf"
                    target="_blank" rel="nofollow">INTERIM RESULTS FOR THE SIX MONTHS ENDED 30 JUNE 2020</a>
                </td>
              </tr>
              <tr>
                <td>2020-08-31</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW033099ann.pdf"
                    target="_blank" rel="nofollow">DISCLOSEABLE TRANSACTION ACQUISITION OF A MEDICAL PRACTICE
                    INVOLVING THE ISSUE OF CONSIDERATION SHARES UNDER GENERAL
                    MANDATE</a>
                </td>
              </tr>
              <tr>
                <td>2020-08-10</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/Board Meeting_EW03309ann.pdf"
                    target="_blank" rel="nofollow">NOTICE OF BOARD MEETING
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-08-07</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/EW03309 ann.pdf"
                    target="_blank" rel="nofollow">PROFIT WARNING
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020063002118.pdf"
                    target="_blank" rel="nofollow">CLOSING OF PLACING OF EXISTING SHARES AND SUBSCRIPTION OF
                    NEW SHARES UNDER GENERAL MANDATE
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020063002142.pdf"
                    target="_blank" rel="nofollow">Next Day Disclosure Return
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-23</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020062300659.pdf"
                    target="_blank" rel="nofollow">ENVIRONMENTAL, SOCIAL AND GOVERNANCE REPORT 2019
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-06-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020061900173.pdf"
                    target="_blank" rel="nofollow">PLACING OF EXISTING SHARES AND SUBSCRIPTION OF NEW SHARES
                    UNDER GENERAL MANDATE
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-22</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020052200640.pdf"
                    target="_blank" rel="nofollow">CONNECTED TRANSACTION RENEWAL OF LEASE BY SHENZHEN C-MER
                    HOSPITAL</a>
                </td>
              </tr>
              <tr>
                <td>2020-05-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020051900879.pdf"
                    target="_blank" rel="nofollow">POLL RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 19 MAY
                    2020
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020050402111.pdf"
                    target="_blank" rel="nofollow">Monthly Return of Equity Issuer on Movements in Securities
                    for the month ended 30 April 2020
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-05-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_zh-hk/Public/assets/pdf/2020042900239.pdf"
                    target="_blank" rel="nofollow">Next Day Disclosure Return</a>
                </td>
              </tr>

              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2020041500844.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Shareholder and Change Request Form
                    - Notice of Publication of 2019 Annual Report, AGM Circular
                    and Proxy Form
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2020041500832.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Non-Registered Holder and Request
                    Form - Notice of Publication of 2019 Annual Report and AGM
                    Circular
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2020041500813.pdf"
                    target="_blank" rel="nofollow">NOTICE OF ANNUAL GENERAL MEETING
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2020041500801.pdf"
                    target="_blank" rel="nofollow">
                    Form of Proxy for use at the Annual General Meeting
                  </a>
                </td>
              </tr>
              <tr>
                <td>2020-04-15</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2020041500787.pdf"
                    target="_blank" rel="nofollow">Repurchase Mandate and General Mandate, Proposed
                    Re-election of Retiring Directors and Notice of Annual
                    General Meeting
                  </a>
                </td>
              </tr>

              <tr>
                <td>2020-02-03</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/EW03309ann.pdf"
                    target="_blank" rel="nofollow">FURTHER INFORMATION ON AVALON GLOBAL AND THE CLOSING OF
                    SUBSCRIPTION OF SHARES IN AVALON GLOBAL INVOLVING THE ISSUE
                    OF CONSIDERATION SHARES UNDER THE GENERAL MANDATE
                  </a>
                </td>
              </tr>
              <tr>
                <td>2019-12-27</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019122700685.pdf"
                    target="_blank" rel="nofollow">DISCLOSEABLE TRANSACTION ACQUISITION OF LAND USE RIGHTS IN
                    SHENZHEN
                  </a>
                </td>
              </tr>
              <tr>
                <td>2019-12-23</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019122300481_E.pdf"
                    target="_blank" rel="nofollow">ANNUAL CAPS OF THE CONTINUING CONNECTED TRANSACTIONS IN
                    RELATION TO EXISTING LEASE AGREEMENT</a>
                </td>
              </tr>
              <tr>
                <td>2019-12-20</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019122000931.pdf"
                    target="_blank" rel="nofollow">INSIDE INFORMATION POSSIBLE DISCLOSEABLE TRANSACTION
                    INVOLVING THE PROPOSED ACQUISITION OF LAND</a>
                </td>
              </tr>
              <tr>
                <td>2019-11-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019112800806.pdf"
                    target="_blank" rel="nofollow">LIST OF DIRECTORS AND THEIR ROLES AND FUNCTIONS</a>
                </td>
              </tr>
              <tr>
                <td>2019-11-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019112800795.pdf"
                    target="_blank" rel="nofollow">RESIGNATION OF INDEPENDENT NON-EXECUTIVE DIRECTOR AND
                    CHANGE OF COMPOSITION OF NOMINATION COMMITTEE AND
                    REMUNERATION COMMITTEE
                  </a>
                </td>
              </tr>
              <tr>
                <td>2019-10-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019103000913.pdf"
                    target="_blank" rel="nofollow">ADDITIONAL INFORMATION RELATING TO DEED OF
                    NON-COMPETITION</a>
                </td>
              </tr>
              <tr>
                <td>2019-09-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/2019093000489.pdf"
                    target="_blank" rel="nofollow">DISCLOSEABLE TRANSACTION COMPLETION OF ACQUISITION OF THE
                    ENTIRE EQUITY INTEREST IN SHANGHAI LUCIDA MEDICAL</a>
                </td>
              </tr>
              <tr>
                <td>2019-07-23</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/ltn20190723548.pdf"
                    target="_blank" rel="nofollow">ENVIRONMENTAL, SOCIAL AND GOVERNANCE REPORT 2018</a>
                </td>
              </tr>
              <tr>
                <td>2019-07-02</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/ltn201907022794.pdf"
                    target="_blank" rel="nofollow">POSITIVE PROFIT ALERT FOR THE SIX MONTHS ENDED 30 JUNE 2019
                  </a>
                </td>
              </tr>
              <tr>
                <td>2019-06-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/ltn20190625989.pdf"
                    target="_blank" rel="nofollow">POLL RESULTS OF THE ANNUAL GENERAL MEETING HELD ON 25 JUNE
                    2019</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904301053.pdf"
                    target="_blank" rel="nofollow">CLARIFICATION ANNOUNCEMENT</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904251492.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Shareholder and Change Request Form
                    - Notice of Publication of 2018 Annual Report, AGM Circular
                    and Proxy Form</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904251480.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Non-Registered Holder and Request
                    Form - Notice of Publication of 2018 Annual Report and AGM
                    Circular</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904251458.pdf"
                    target="_blank" rel="nofollow">NOTICE OF ANNUAL GENERAL MEETING</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904251442.pdf"
                    target="_blank" rel="nofollow">Form of Proxy for use at the Annual General Meeting</a>
                </td>
              </tr>
              <tr>
                <td>2019-04-25</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN201904251417.pdf"
                    target="_blank" rel="nofollow">REPURCHASE MANDATE AND GENERAL MANDATE, PROPOSED
                    RE-ELECTION OF RETIRING DIRECTORS AND NOTICE OF ANNUAL
                    GENERAL</a>
                </td>
              </tr>
              <tr>
                <td>2019-03-29</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN20190328789.pdf"
                    target="_blank" rel="nofollow">COMPLETION OF DISCLOSEABLE TRANSACTION</a>
                </td>
              </tr>
              <tr>
                <td>2019-03-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN20190326261.pdf"
                    target="_blank" rel="nofollow">ANNUAL RESULTS FOR THE YEAR ENDED 31 DECEMBER 2018</a>
                </td>
              </tr>
              <tr>
                <td>2019-03-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/LTN20190326267.pdf"
                    target="_blank" rel="nofollow">DISCLOSEABLE TRANSACTION ACQUISITION OF THE ENTIRE EQUITY
                    INTEREST IN SHANGHAI LUCIDA MEDICAL</a>
                </td>
              </tr>
              <tr>
                <td>2018-09-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Notification Letter to Registered Holder and Request Form - Notice of Publication of 2018 Interim Report.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Registered Holder and Request Form -
                    Notice of Publication of 2018 Interim Report</a>
                </td>
              </tr>
              <tr>
                <td>2018-09-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Notification Letter to Non-Registered Holder and Request Form - Notice of Publication of 2018 Interim Report.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Non-Registered Holder and Request
                    Form - Notice of Publication of 2018 Interim Report</a>
                </td>
              </tr>
              <tr>
                <td>2018-08-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/EW03309ann1.pdf"
                    target="_blank" rel="nofollow">ANNOUNCEMENT OF INTERIM RESULTS FOR THE SIX MONTHS ENDED 30
                    JUNE 2018</a>
                </td>
              </tr>
              <tr>
                <td>2018-08-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/EW03309ann.pdf"
                    target="_blank" rel="nofollow">DISCLOSEABLE TRANSACTION ACQUISITION OF 80% EQUITY INTEREST
                    IN THE KUNMING EYE HOSPITAL CONTINUING CONNECTED TRANSACTION
                    LEASE AGREEMENT ENTERED INTO FOLLOWING COMPLETION OF THE
                    ACQUISITION</a>
                </td>
              </tr>
              <tr>
                <td>2018-08-17</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/PROFIT WARNING.pdf"
                    target="_blank" rel="nofollow">PROFIT WARNING</a>
                </td>
              </tr>
              <tr>
                <td>2018-05-30</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Results of AGM.pdf"
                    target="_blank" rel="nofollow">Results of AGM</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Notification Letter to Non-Registered Holder and Request Form.pdf"
                    target="_blank" rel="nofollow">Notification Letter to Non-Registered Holder and Request
                    Form</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Reply Form.pdf"
                    target="_blank" rel="nofollow">Reply Form</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Letter to Shareholders - Election of Language and Means of Receipt of Corporate Communication.pdf"
                    target="_blank" rel="nofollow">Letter to Shareholders - Election of Language and Means of
                    Receipt of Corporate Communication</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/ELECTION OF LANGUAGE AND MEANS OF RECEIPT OF CORPORATE COMMUNICATION.pdf"
                    target="_blank" rel="nofollow">ELECTION OF LANGUAGE AND MEANS OF RECEIPT OF CORPORATE
                    COMMUNICATION</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/NOTICE OF ANNUAL GENERAL MEETING.pdf"
                    target="_blank" rel="nofollow">NOTICE OF ANNUAL GENERAL MEETING</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Form of Proxy for use at the Annual General Meeting.pdf"
                    target="_blank" rel="nofollow">Form of Proxy for use at the Annual General Meeting</a>
                </td>
              </tr>
              <tr>
                <td>2018-04-26</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Repurchase Mandate and General Mandate, Proposed Re-election of Retiring Directors and Notice of Annual General Meeting.pdf"
                    target="_blank" rel="nofollow">Repurchase Mandate and General Mandate, Proposed
                    Re-election of Retiring Directors and Notice of Annual
                    General Meeting</a>
                </td>
              </tr>
              <tr>
                <td>2018-03-28</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/CMER 2017_Annual Results_Eng.pdf"
                    target="_blank" rel="nofollow">RESULTS ANNOUNCEMENT FOR THE YEAR ENDED 31 DECEMBER 2017</a>
                </td>
              </tr>
              <tr>
                <td>2018-02-07</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/STABILIZING ACTIONS AND END OF STABILIZATION PERIOD.pdf"
                    target="_blank" rel="nofollow">STABILIZING ACTIONS AND END OF STABILIZATION PERIOD</a>
                </td>
              </tr>
              <tr>
                <td>2018-01-19</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/E_03309_A153.pdf"
                    target="_blank" rel="nofollow">FULL EXERCISE OF THE OVER-ALLOTMENT OPTION</a>
                </td>
              </tr>
              <tr>
                <td>2018-01-12</td>
                <td>
                  <a class="table-cell"
                    href="https://admin.cmereye.com/themes/grouptemplate_en-us/Public/assets/pdf/Allotment Results Announcement (Eng).pdf"
                    target="_blank" rel="nofollow">ANNOUNCEMENT OF OFFER PRICE AND ALLOTMENT RESULTS</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="history">
            <div @click="oldData">HISTORICAL DATA</div>
            <div class="allPages">
              <div v-for="(item, index) in allPages" :key="index" @click="newListTotal(item)">{{ item }}</div>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header_en.vue";
import Footer from "../components/Footer_en.vue";
import { getList } from "@/api/index.js";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
  },

  async asyncData({ app, req, query, params, store }) {
    const newlistData = await axios.get(
      `https://admin.cmereye.com/wp-json/wp/v2/posts?categories=3`
    );
    console.log(222); //获取到的数据
    return {
      newlist: newlistData.data,
    };
  },

  name: "Announcements-and-circulars",
  head: {
    title: " C-MER Announcements and Circulars",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "C-MER Announcements and Circulars",
      },
      {
        name: "keywords",
        content:
          "C-MER| C-MER Announcements and Circulars| C-MER Announcements|  C-MER Circulars|",
      },
    ],
  },
  data() {
    return {
      newList: [],
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
      getList({ categories: 13, page: 1, per_page: this.pageNum }).then((res) => {
        if (res.status === 200) {
          this.newList = res.data;
          this.totalData = localStorage.getItem('total')
          this.allPages = Math.ceil(this.totalData / this.pageNum)
        }
      });
    },
    newListTotal(i) {
      this.isOldData = true
      getList({ categories: 13, page: i, per_page: this.pageNum }).then((res) => {
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

@media screen and (min-width: 992px) {
  .part_Release table tr td:nth-child(1) {
    min-width: 144px;
  }

  .part_Release table tr td:nth-child(2) p,
  .part_Release table tr td:nth-child(2) a {
    padding-right: 2vw;
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
