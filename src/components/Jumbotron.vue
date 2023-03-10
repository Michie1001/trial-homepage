<script>
  import { imageSlider } from '../assets/js/imageSlider'

  export default {
  name: 'jumbotron',
  mounted() {
    imageSlider();
  }
}
</script>
         
<template>
  <div class="jumbotron">
      <div class="jumbotron__slide active">
        <img src="../assets/images/jumbotron/Bitmap.png" alt="">
        <div class="jumbotron__slide__info">
          <div class="jumbotron__slide__info__block">
            <h5>Design and order your new kitchen online today</h5>
            <h1>Bespoke & made to measure handmade kitchen design</h1>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div class="jumbotron__slide">
        <img src="../assets/images/jumbotron/Bitmap.png" alt="">
        <div class="jumbotron__slide__info">
          <div class="jumbotron__slide__info__block">
            <h5>Design and order your new kitchen online today</h5>
            <h1>Bespoke & made to measure handmade kitchen design #2</h1>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div class="jumbotron__slide">
        <img src="../assets/images/jumbotron/Bitmap.png" alt="">
        <div class="jumbotron__slide__info">
          <div class="jumbotron__slide__info__block">
            <h5>Design and order your new kitchen online today</h5>
            <h1>Bespoke & made to measure handmade kitchen design #3</h1>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div class="navigation">
        <i class="fas fa-chevron-left prev-btn"></i>
        <i class="fas fa-chevron-right next-btn"></i>
      </div>
      <div class="navigation-visibility">
        <div class="slide-icon active"></div>
        <div class="slide-icon"></div>
        <div class="slide-icon"></div>
      </div>
    </div>
</template>
