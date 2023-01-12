<!-- Please remove this file from your project -->
<template>
  <div class="footer part">
    <div class="container">
      <div class="footer_nav flex items-center justify-between">
        <div class="footer_logo">
          <img src="/img/Logo_foot_cn.svg" alt="" srcset="" />
        </div>
        <div class="footer_nav_link">
          <ul class="flex">
            <li v-for="item in foot_menuList">
              <b-link :href="item.url">{{ item.name }}</b-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer_address mt-12 text-base">
        <p>地址: 中环毕打街1-3号中建大厦1535室</p>
      </div>

      <div class="footer_social mt-12 flex items-center justify-between">
        <ul class="flex items-center">
          <li v-for="item in foot_soical" class="mr-10">
            <a :href="item.url" target="_blank"
              ><i><img :src="item.src" alt="" /></i
            ></a>
          </li>
        </ul>
        <div class="footer_copyright">
          <div class="footer_privacy text-right">
            <span v-for="item in foot_state" style="margin-right: 1em"
              ><b-link :href="item.url">{{ item.name }}</b-link></span
            >
          </div>
          <div class="footer_cptext">
            © 2023 C-MER Eye Care Holdings Limited. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer_cn",
  data() {
    return {
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
  mounted() {
    $(".language .language_box ul a").each(function () {
      $(this).click(function () {
        var index = $(this).index();
        var text = $(this).text();
        if (index == 0) {
          console.log(2);
          $("HTML").addClass("zh_an");
          $("HTML").removeClass("zh_cn");
          $("HTML").removeClass("zh_en");
        }

        if (index == 1) {
          console.log(22);
          $("HTML").addClass("zh_cn");
          $("HTML").removeClass("zh_an");
          $("HTML").removeClass("zh_en");
        }

        if (index == 2) {
          console.log(222);
          $("HTML").addClass("zh_en");
          $("HTML").removeClass("zh_an");
          $("HTML").removeClass("zh_cn");
        }

        console.log(index);
      });
    });
  },
};
</script>

<style>
.zh_cn body,
.zh_cn tr,
.zh_cn td,
.zh_cn th,
.zh_cn p,
.zh_cn span,
.zh_cn a,
.zh_cn h1,
.zh_cn h2,
.zh_cn h3,
.zh_cn h4,
.zh_cn h5,
.zh_cn h6 {
  font-family: Noto Sans CJK TC, serif !important;
}

body,
tr,
td,
th,
p,
span,
a,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Noto Sans CJK TC, serif;
}
.part_bussiness .part_History_item p {
  font-size: 16px;
}
.footer {
  background: linear-gradient(110.25deg, #85cefa 5.86%, #51a8dd 100%);
  color: #ffffff;
}
.footer_address p {
  letter-spacing: 0.1em;
}
.footer_nav_link ul li {
  margin-left: 30px;
  font-size: 20px;
}
.table td {
  font-size: 16px !important;
}

@media screen and (min-width: 992px) {
  .inside-text {
    font-size: 18px;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1201px) {
  .footer_nav_link ul li {
    font-size: 16px;
  }
}

@media screen and (max-width: 992px) {
  .xs-mt-100x {
    margin-top: 100px !important;
  }
  .xs-mt-27w {
    margin-top: 27vw !important;
  }
  .xs-letter-1em {
    letter-spacing: 0.1em !important;
  }
  .xs-align-bottom {
    vertical-align: bottom !important;
  }
  .xs-pl-initial {
    padding-left: initial !important;
  }
  .xs-letter-initial {
    letter-spacing: initial !important;
  }

  .zh_cn_table {
    overflow-x: scroll;
  }
  .zh_cn_table table {
    overflow-x: scroll;
    width: 136vw;
  }

  .lang_news .dropdown-menu {
    display: flex !important;
  }
  .lang_news .dropdown-menu .dropdown-item {
    padding: 0.25em;
  }

  .navbar-light .navbar-brand p span {
    font-size: 14px;
  }
}
</style>
