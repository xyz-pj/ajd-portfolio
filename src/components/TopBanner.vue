<template>
  <div class="top_banner" v-show="showBanner">
    <div class="top_banner_content top_banner1">
      <a href="https://www.ajd.co.kr/login">
        <div>
          <img src="../assets/top_banner_img1.webp" alt="카카오가입">
          카카오로 1초 만에 가입하고, 최대 지원금 
          <strong>128만원</strong>
          받기 <i class="fa-solid fa-chevron-right"></i>
        </div>
      </a>
    </div>
    <div class="top_banner_content top_banner2">
      <a href="https://www.ajd.co.kr/login">
        <div>
          <img src="../assets/top_banner_img2.webp" alt="아정당 가입">
          오직 아정당에서 가입하면
          <strong>최대 지원금 128만원!</strong> <i class="fa-solid fa-chevron-right"></i>
        </div>
      </a>
    </div>
    <div class="top_banner_content top_banner3">
      <a href="https://www.ajd.co.kr/login">
        <div>
          <img src="../assets/top_banner_img3.webp" alt="생활솔루션">
          생활 솔루션 필요할땐?
          <strong>아정당 가입하세요!</strong> <i class="fa-solid fa-chevron-right"></i>
        </div>
      </a>
    </div>
    <div class="top_banner_close" @click="showBanner = false">
      <button>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  data(){
    return{
      showBanner: true,
    };
  },
};


</script>

<style scoped>
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
.top_banner1{
  background: #4183ed;
}
.top_banner2{
  background: #59ccbe;
}
.top_banner3{
  background: #5c667a;
}
</style>
