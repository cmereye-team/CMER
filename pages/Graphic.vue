<template>
  <div class="theme-blue">
      <Header/> 
      <div class="banner_about banner_Graphic">
          <div class="banner_text"><h1>Graphic Story</h1><p>圖片故事</p></div>
      </div>

      <div class="part_content_bg">
         <b-container fluid="md" class="content part_content part_Graphic">
 
                
                <b-row>
                  <b-col md="8">
<b-card img-src="https://placekitten.com/563/180" img-alt="Card image" img-top>
                    <b-card-text class="Graphic">
                     <h2>種類</h2>
                      <p>標題</p>
                      <p>標題</p>
                     <div class="text-right"> <nuxt-link class="more text-right" to="">VIEW MORE</nuxt-link> </div>
                    </b-card-text>
                  </b-card>
                  </b-col>

                  <b-col md="4"> <b-card img-src="https://placekitten.com/270/180" img-alt="Card image" img-top>
                    <b-card-text class="Graphic">
                     <h2>種類</h2>
                      <p>標題</p>
                      <p>標題</p>
                    <div class="text-center"> <nuxt-link class="more text-right" to="">VIEW MORE</nuxt-link> </div>
                    </b-card-text>
                  </b-card></b-col>
                  
                </b-row>
                
                  
                 
                 

                  


            <b-card-group class="mt-14" deck>
                  <b-card img-src="https://placekitten.com/270/180" img-alt="Card image" img-top>
                    <b-card-text class="Graphic">
                     <h2>種類</h2>
                      <p>標題</p>
                      <p>標題</p>
                     <div class="text-center"> <nuxt-link class="more text-right" to="">VIEW MORE</nuxt-link> </div>
                    </b-card-text>
                  </b-card>
                  <b-card img-src="https://placekitten.com/270/180" img-alt="Card image" img-top>
                    <b-card-text class="Graphic">
                     <h2>種類</h2>
                      <p>標題</p>
                      <p>標題</p>
                      <div class="text-center"> <nuxt-link class="more text-right" to="">VIEW MORE</nuxt-link> </div>
                    </b-card-text>
                  </b-card>
                  <b-card img-src="https://placekitten.com/270/180" img-alt="Card image" img-top>
                    <b-card-text class="Graphic">
                     <h2>種類</h2>
                      <p>標題</p>
                      <p>標題</p>
                    <div class="text-center"> <nuxt-link class="more text-right" to="">VIEW MORE</nuxt-link> </div>
                    </b-card-text>
                  </b-card>

                  
            </b-card-group>


 <b-card-group columns class="mt-20">
    <b-card
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>

    <b-card>
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

    <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-card-group>


          </b-container>
          </div>
     <Footer/> 


  </div>
   
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Graphic'
}
</script>

<style scoped>
.banner_Graphic{background-image:url(/pic/banner_pc_Graphic.jpg) ;}
 
.part_Graphic p{margin-bottom: 0;}
.Graphic .more{ color: #005CAF;letter-spacing: .5em;font-family: 'Noto Sans CJK TC', serif;font-weight: 300;font-size: 14px;padding-top: 10px; padding-bottom: 10px;padding-right: 30px;align-self: flex-end;border-bottom: 2px solid;position: relative;}
.Graphic .more::after{position: absolute;content: '';right: 0;top: 0;bottom: 0;margin: auto;width: 9px;height: 24px;background-repeat: no-repeat; background: url(/img/click_right.jpg);}
</style>
