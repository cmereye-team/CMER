<template>
  <div class="theme-blue">
    <Header />
    <div class="banner_about banner_Release">
      <div class="banner_text">
        <p>發佈企業通訊</p>
      </div>
    </div>
    <div class="container"> 
      <h1>h1</h1>
      <h2>h2</h2>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default{
  name: 'Communication-and-message',
  data() {
    return {

    };
  },
  methods: {}
}
</script>
<style scoped>

.banner_Release {
  background-image: url(https://static.cmereye.com/imgs/2023/01/393b20d78a533ad1.jpg);
}
</style>
