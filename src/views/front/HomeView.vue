<template>
  <v-container-fliud>
    <v-row>
      <v-col cols="12" class="homeTopImg">
      </v-col>
    </v-row>
  </v-container-fliud>
  <div class="space"></div>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center homeText" data-aos="fade-up" data-aos-duration="1000">
        <p>酒桃取名諧音「石頭」</p>
        <p>正是期許能像石頭在歷經長時間的歲月風雨後</p>
        <p>變得更加堅韌和耐久</p>
        <p>創業者也需要在時間的考驗中</p>
        <p>不斷磨練自己</p>
        <p>將打造清酒界的「酒桃」烏托邦</p>
      </v-col>
    </v-row>
  </v-container>
  <div class="space"></div>
  <v-container-fliud class="homeInformation text-center mb-9">
    <v-row class="homeInformationRow">
      <v-col cols="12" md="6">
        <img src="../../assets/sake.webp" class="image1" data-aos="flip-left" data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-up" data-aos-duration="1000">
        <p>清酒</p>
        <p>是日本的傳統酒類之一</p>
        <p>以其細緻的口感、豐富的層次和深厚的歷史而聞名於世</p>
        <p>在我們這邊</p>
        <p>您可以選擇各種口味和風格的清酒</p>
        <p>從清新淡雅到濃郁芳香</p>
        <p>從乾爽到甘甜</p>
        <p>都能找到適合您的選擇</p>
        <v-btn to="/reservation" color="secondary" data-aos="fade-right">點我訂位</v-btn>
      </v-col>
    </v-row>
    <v-row class="flex-wrap flex-md-wrap-reverse homeInformationRow">
      <v-col cols="12" md="6" class="order-sm-0">
        <img src="../../assets/cheers.jpg" class="image1" data-aos="flip-left" dara-aos-offset="500"
          data-aos-easing="ease-in-sine" data-aos-duration="1500">
      </v-col>
      <v-col cols="12" md="6" class="order-md-first order-lg-first" data-aos="fade-up" data-aos-duration="1000">
        <p>除了優質的清酒</p>
        <p>我們的料理同樣令人垂涎三尺</p>
        <p>我們的廚師團隊巧妙地將日本料理的精髓融入到每道菜品中</p>
        <p>從新鮮的海鮮、精緻的壽司</p>
        <p>到風味獨特的燒烤和小吃</p>
        <p>每一口都是對味蕾的極致享受</p>
        <v-btn to="/menu" color="secondary" data-aos="fade-right">精選佳餚</v-btn>
      </v-col>
    </v-row>
  </v-container-fliud>
  <div class="space"></div>
  <h1 class="text-center mb-3 mt-9">SAKE MOMO</h1>

  <div class="swiper1">
    <swiper ref="{swiperRef}" :slidesPerView="3" :centeredSlides="true" :spaceBetween="100" :navigation="true"
      :modules="modules" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :scrollbar="{
  hide: true,
}">
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNIfVFPhDcQ8mx7PQTTtPB-QXEHpSceXAPaR9M=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNNFduPrL8r7vG0qfBLzn5mBkVVdujvlUs_mJ0j=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipPEG2_nv43sLvCXSdmJBDv-FiON1DWoTSqUuCRq=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipMq5PAP38N8LkbwAvcQPywXQjJdoGnOLS4rylJG=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNNPyFF3T5UzrsnqcVyt9jP1_QQgg0T1PSlh5JH=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipPuw1P0XigDQmxM1bXgN0uppwrinq6itgSCLOQx=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipPWRLo4RAPLLbs-M2Gf5TPC4LKh6a4rSJGOjiAM=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNf749x-gUl_UD9w_zVGyjv6znD9izRq3nvXDtR=s680-w680-h510">
      </SwiperSlide>
    </swiper>
  </div>

  <div class="swiper2">
    <swiper :spaceBetween="30" :effect="'fade'" :navigation="true" :modules="modules" class="mySwiper" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :scrollbar="{
  hide: true,
}">
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNIfVFPhDcQ8mx7PQTTtPB-QXEHpSceXAPaR9M=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNNFduPrL8r7vG0qfBLzn5mBkVVdujvlUs_mJ0j=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipPEG2_nv43sLvCXSdmJBDv-FiON1DWoTSqUuCRq=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipMq5PAP38N8LkbwAvcQPywXQjJdoGnOLS4rylJG=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNNPyFF3T5UzrsnqcVyt9jP1_QQgg0T1PSlh5JH=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipPuw1P0XigDQmxM1bXgN0uppwrinq6itgSCLOQx=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipPWRLo4RAPLLbs-M2Gf5TPC4LKh6a4rSJGOjiAM=s680-w680-h510">
      </SwiperSlide>
      <SwiperSlide><img
          src="https://lh3.googleusercontent.com/p/AF1QipNf749x-gUl_UD9w_zVGyjv6znD9izRq3nvXDtR=s680-w680-h510">
      </SwiperSlide>
    </swiper>
  </div>
  <div class="space"></div>

  <h1 class="text-center mb-3 mt-10">INFORMATION</h1>
  <v-container class="homeInformation2">
    <v-row class="homeInformation2Row">
      <v-col class="homeInformation2Col">
        <span>ADDRESS</span>
        <span data-aos="fade-up" data-aos-duration="1000">台北市大安區光復南路456巷6號</span>
      </v-col>
      <v-col class="homeInformation2Col">
        <span>TEL</span>
        <span data-aos="fade-up" data-aos-duration="1000">02 2703 7507</span>
      </v-col>
      <v-col class="homeInformation2Col">
        <span>OPEN</span>
        <div class="homeTime" data-aos="fade-up" data-aos-duration="1000">
          <span>FRI-SAT : 18:00 ~ 1:00</span>
          <span>SUN-THU : 18:00 ~ 00:00</span>
        </div>
      </v-col>

    </v-row>
    <v-col>
      <GoogleMap></GoogleMap>
    </v-col>

  </v-container>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
import { Autoplay, EffectFade, Pagination, Navigation, Scrollbar } from 'swiper/modules'
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  mounted() {
    AOS.init()
  },

  components: {
    Swiper,
    SwiperSlide,
    GoogleMap
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade, Pagination, Navigation, Scrollbar]
    }
  }
}

</script>
