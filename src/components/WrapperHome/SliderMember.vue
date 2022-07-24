<template>
  <div>
    <div class="wrapper-slidemember" data-aos="fade-right" data-aos-duration="2000">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="member-content">
                  <h1 class="member-head">Members</h1>
                  <div class="list-member">
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                  </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="member-content">
                  <h1 class="member-head">Members</h1>
                  <div class="list-member">
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                  </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="member-content">
                  <h1 class="member-head">Members</h1>
                  <div class="list-member">
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                    <div class="item-member">
                        <img class="item-member-image" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        <div class="around-info">
                            <span class="item-member-name">David</span>
                            <span class="item-member-job">Front End</span>
                        </div>
                    </div>
                  </div>
            </div>
        </swiper-slide> 
    </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
 components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
}
</script>

<style scoped>
  .wrapper-slidemember{
    max-width: 1440px;
    margin: 0px 50px 0 50px;
    height: 460px;
    position: relative;
    display: block;
  }
  .mySwiper{
    width: 100%;
    height: 100%;
  }
  swiper-slide{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .member-content{
    width: 100%;
    height: 100%;
  }
  .member-head{
    text-align: center;
    margin-top: 100px;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.37px;
  }
  .list-member{
    display: flex;
    justify-content: center;
    column-gap: 100px;
    margin-top: 50px;
  }
  .item-member-image{
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 100%;
  }
  .around-info{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
  }
  .item-member-name{
     font-weight: 700;
     font-size: 22px;
     line-height: 28px;
     letter-spacing: 0.35px;
  }
  .item-member-job{
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
  
  @media screen and (max-width:850px){
    .member-head{
      margin-top: 70px;
    }
  }
  @media screen and (max-width:450px){
    .wrapper-slidemember{
      margin: 0 20px;
    }
    .list-member{
      margin-top: 40px;
      column-gap: 30px;
    }
    .member-head{
      margin-top: 70px;
    }
  }
</style>