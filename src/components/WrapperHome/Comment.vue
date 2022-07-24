<template>
  <div class="around-comment-contain">
    <div class="wrapper-comment">
      <h1 class="comment-head">What people say about us</h1>
      <div class="wrapper-slider">
        <div class="around-slider">
          <swiper :slidesPerView="3" :spaceBetween="20" :slidesPergroup='3' :breakpoints="swiperOptions.breakpoints"
            :pagination="{
              clickable: true,
            }" :navigation="{nextEl: '.swiper-button-next-one', prevEl :'.swiper-button-prev-one'}"  :modules="modules" class="mySwiper">
            <swiper-slide>
              <div class="item-comment">
                <span class="head-comment">Title</span>
                <span class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis culpa, soluta voluptatibus esse cum nemo velit ducimus? Earum tenetur atque vel quasi sequi ab debitis ex ut quaerat officiis.</span>
                <div class="around-star">
                  <ul class="list-star">
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span class="star-number">5.0</span>
                </div>
                <div class="comment-info">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                  <span class="comment-name">Cody Fisher</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
               <div class="item-comment">
                <span class="head-comment">Title</span>
                <span class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis culpa, soluta voluptatibus esse cum nemo velit ducimus? Earum tenetur atque vel quasi sequi ab debitis ex ut quaerat officiis.</span>
                <div class="around-star">
                  <ul class="list-star">
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span class="star-number">5.0</span>
                </div>
                <div class="comment-info">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                  <span class="comment-name">Cody Fisher</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
               <div class="item-comment">
                <span class="head-comment">Title</span>
                <span class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis culpa, soluta voluptatibus esse cum nemo velit ducimus? Earum tenetur atque vel quasi sequi ab debitis ex ut quaerat officiis.</span>
                <div class="around-star">
                  <ul class="list-star">
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span class="star-number">5.0</span>
                </div>
                <div class="comment-info">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                  <span class="comment-name">Cody Fisher</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
               <div class="item-comment">
                <span class="head-comment">Title</span>
                <span class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis culpa, soluta voluptatibus esse cum nemo velit ducimus? Earum tenetur atque vel quasi sequi ab debitis ex ut quaerat officiis.</span>
                <div class="around-star">
                  <ul class="list-star">
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span class="star-number">5.0</span>
                </div>
                <div class="comment-info">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                  <span class="comment-name">Cody Fisher</span>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
                <div class="item-comment">
                <span class="head-comment">Title</span>
                <span class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis culpa, soluta voluptatibus esse cum nemo velit ducimus? Earum tenetur atque vel quasi sequi ab debitis ex ut quaerat officiis.</span>
                <div class="around-star">
                  <ul class="list-star">
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                    <li class="item-star">
                        <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span class="star-number">5.0</span>
                </div>
                <div class="comment-info">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                  <span class="comment-name">Cody Fisher</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next-one"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="swiper-button-prev-one"><i class="fa-solid fa-arrow-left"></i></div>
        </div>
      </div>
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
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 60
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      },
     
    }
  },
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
.around-comment-contain{
   max-width: 1440px;
  height: 680px;
  background: #F2F2F2;
  position: relative;
  overflow: hidden;
}
.comment-head {
  text-align: center;
  position: absolute;
  margin-top: 80px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.37px;
}
.wrapper-slider{
  display: flex;
  width: 100%;
  height: 360px;
}
.around-slider{
  height: 360px;
  position: absolute;
  top: 30%;
  margin: 0 100px;
  width: 100%;
}
.item-comment{
  width: 300px;
  height: 360px;
  padding: 30px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s linear;
}
.item-comment:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.mySwiper{
  padding-bottom: 40px;
}
.around-star{
  display: flex;
}
.list-star{
  display: flex;
}
.head-comment{
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
}
.comment-text{
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #8E8E93;
  margin-top: 10px;
}
.around-star{
  margin-top: 20px;
}
.list-star{
  font-size: 16px;
  column-gap: 5px;
  margin-right: 10px;
  color: #FFF81D;
}
.star-number{
  color: #8E8E93;
}
.comment-info{
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.comment-info img{
  width: 50px;
  margin-right: 10px;
  height: 50px;
  border-radius: 100%;
}
.comment-name{
  font-weight: 600;
font-size: 17px;
line-height: 22px;
/* identical to box height, or 129% */
letter-spacing: -0.408px;
color: #000000;
}
.swiper-button-next-one{
  font-size: 25px;
  position: absolute;
  left: 80%;
 
  
}
.swiper-button-prev-one{
    font-size: 25px;
  position: absolute;
  left: 75%;
  
}
 
 @media screen and (max-width:850px){
   .item-comment{
    margin : 0;
    width: 100%;
    height: 350px;
   }
  
 }
 @media screen and (max-width:450px) {
  .around-comment-contain{
    height: 620px;
  }
     .comment-head {
      margin-top: 40px;
      }   
  .around-slider{
      margin: 0 70px;
      top: 25%;
    }
    .swiper-button-prev-one{
      left: 25%;
    }
    .swiper-button-next-one{
      left: 40%;
    }
    .item-comment{
      width: 300px;
    }
 }
</style>