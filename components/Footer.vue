<!-- Please remove this file from your project -->
<template>
  <div class="footer part">
    <div class="container">
      <div class="footer_nav flex items-center justify-between">
        <div class="footer_logo">
          <img src="/img/Logo_foot.svg" alt="" srcset="" />
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
        <p>地址: 中環畢打街1-3號中建大廈1535室</p>
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
  name: "Footer",
  data() {
    return {
      foot_menuList: [
        { url: "/About-cmer", name: "關於希瑪" },
        { url: "/Services-In-Hong-Kong", name: "業務概覽" },
        { url: "/Social-Responsibilities", name: "社會責任" },
        { url: "/News", name: "新聞中心" },
        { url: "/Investor-Contact", name: "投資者關係" },
        { url: "/Contact", name: "聯絡我們" },
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
        { url: "/disclamer", name: "私隱政策" },
        { url: "/statement", name: "免責聲明" },
      ],
    };
  },
  mounted() {
    $(".language .language_box ul a").each(function () {
      $(this).click(function () {
        var index = $(this).index();
        var text = $(this).text();
        if (index == 0) {
          console.log(1);
          $("HTML").addClass("zh_an");
          $("HTML").removeClass("zh_cn");
          $("HTML").removeClass("zh_en");
        }

        if (index == 1) {
          console.log(11);
          $("HTML").addClass("zh_cn");
          $("HTML").removeClass("zh_an");
          $("HTML").removeClass("zh_en");
        }

        if (index == 2) {
          console.log(111);
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
.zh_an body,
.zh_an tr,
.zh_an td,
.zh_an th,
.zh_an p,
.zh_an span,
.zh_an a,
.zh_an h1,
.zh_an h2,
.zh_an h3,
.zh_an h4,
.zh_an h5,
.zh_an h6 {
  font-family: Noto Sans CJK TC, serif !important;
}

.fff-20 {
  font-size: 40px;
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
    padding: initial;
  }
  .navbar-light .navbar-brand p span {
    font-size: 14px;
  }
}
</style>
