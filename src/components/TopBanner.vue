<template>
  <div class="top_banner" v-show="showBanner" @mouseenter="stopSlider" @mouseleave="startSlider">
    <div class="top_banner_slider">
      <!-- 슬라이드 항목을 v-for로 동적으로 생성 -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="top_banner_content"
        :style="{ transform: 'translateY(' + slideOffset + 'px)' }"
      >
        <a :href="slide.link">
          <div>
            <img :src="slide.img" :alt="slide.alt" />
            {{ slide.text }}
            <strong>{{ slide.amount }}</strong>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </a>
      </div>
    </div>
    <div class="top_banner_close" @click="showBanner = false">
      <button>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>

  <div class="main_banner">
    <img src="../assets/main_banner.webp" alt="365 생활지원금 지킴이 아정당">
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  data() {
    return {
      showBanner: true,
      slides: [
        {
          img: require('@/assets/top_banner_img1.webp'),
          alt: '카카오가입',
          text: '카카오로 1초 만에 가입하고, 최대 지원금',
          amount: '128만원',
          link: 'https://www.ajd.co.kr/login',
        },
        {
          img: require('../assets/top_banner_img2.webp'),
          alt: '아정당 가입',
          text: '오직 아정당에서 가입하면',
          amount: '최대 지원금 128만원!',
          link: 'https://www.ajd.co.kr/login',
        },
        {
          img: require('../assets/top_banner_img3.webp'),
          alt: '생활솔루션',
          text: '생활 솔루션 필요할땐?',
          amount: '아정당 가입하세요!',
          link: 'https://www.ajd.co.kr/login',
        },
      ],
      currentSlideIndex: 0,
      slideHeight: 60, // 배너 높이
      slideInterval: null, // 슬라이드 간격을 위한 변수
    };
  },
  computed: {
    slideOffset() {
      return -this.currentSlideIndex * this.slideHeight;
    },
  },
  mounted() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      // 슬라이드 자동 전환 설정 (3초마다)
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    nextSlide() {
      // 다음 슬라이드로 이동
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex += 1;
      } else {
        this.currentSlideIndex = 0; // 마지막 슬라이드에서 다시 첫 번째로 돌아감
      }
    },
    stopSlider() {
      clearInterval(this.slideInterval); // 슬라이드 멈추기
    },
  },
  stopSlider() {
    clearInterval(this.slideInterval); // 슬라이드 멈추기
  },
  beforeUnmount() {
    clearInterval(this.slideInterval); // 컴포넌트 파괴 시 슬라이드 멈추기
  },
};



</script>

<style scoped>
.main_banner img{
  width: 100%;
}
.top_banner{
  position: relative;
  height: 60px;
  overflow: hidden;
}
.top_banner_close{
  position: absolute;
  z-index: 3;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  
}
.top_banner_close button{
  color: #fff;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
}
.top_banner_content{
  transition: transform 0.3s ease-in-out; /* 슬라이드 속도 2초로 설정 */
}
.top_banner_content div{
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 60px;
  margin: 0 auto;
}
.top_banner_content img{
  width: 45px;
}
.top_banner_content a div{
  max-width: 1056px;  
}
.top_banner_slider > div:nth-child(1){
  background: #4183ed;
}
.top_banner_slider div:nth-child(2){
  background: #59ccbe;
}
.top_banner_slider div:nth-child(3){
  background: #5c667a;
}

</style>
