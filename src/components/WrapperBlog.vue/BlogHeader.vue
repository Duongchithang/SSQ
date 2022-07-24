<template>
  <div>
    <div class="blog-header">
      <div class="container-blog">
        <div class="container-header-blog" data-aos="fade-right" data-aos-duration="2000">
          <span class="Blog-title">Blog</span>
          <span class="blog-tech">Technology</span>
        </div>
        <div class="container-slider" data-aos="fade-left" data-aos-duration="2000">
          <div class="around-slider">
            <swiper
              :spaceBetween="30"
              :centeredSlides="true"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
              :pagination="{
                clickable: true,
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide>
                <div class="item-slide">
                    <img class="item-slide-image" src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                    <div class="content-item">
                        <span class="content-item-title">Title</span>
                        <span class="content-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel saepe dicta quis tempora accusantium nihil sunt, ducimus corporis optio. Quia harum aperiam cumque quo est non distinctio ad vel!</span>
                        <div class="around-read-more">
                           <span class="read-more">Read More</span>
                           <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-slide">
                    <img class="item-slide-image" src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80" alt="">
                    <div class="content-item">
                        <span class="content-item-title">Title</span>
                        <span class="content-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel saepe dicta quis tempora accusantium nihil sunt, ducimus corporis optio. Quia harum aperiam cumque quo est non distinctio ad vel!</span>
                        <div class="around-read-more">
                           <span class="read-more">Read More</span>
                           <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-slide">
                    <img class="item-slide-image" src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                    <div class="content-item">
                        <span class="content-item-title">Title</span>
                        <span class="content-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel saepe dicta quis tempora accusantium nihil sunt, ducimus corporis optio. Quia harum aperiam cumque quo est non distinctio ad vel!</span>
                        <div class="around-read-more">
                           <span class="read-more">Read More</span>
                           <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-slide">
                    <img class="item-slide-image" src="https://images.unsplash.com/photo-1532198528077-0d9e4ca9bb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80" alt="">
                    <div class="content-item">
                        <span class="content-item-title">Title</span>
                        <span class="content-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel saepe dicta quis tempora accusantium nihil sunt, ducimus corporis optio. Quia harum aperiam cumque quo est non distinctio ad vel!</span>
                        <div class="around-read-more">
                           <span class="read-more">Read More</span>
                           <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="around-btn-head-blog">
            <button class="btn-tech">Tech</button>
            <button class="btn-Life">Life</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.blog-header{
    max-width: 1440px;
}
.container-blog{
    margin:100px 50px;
}
.container-header-blog{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.Blog-title{
    font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
letter-spacing: 0.374px;
}
.blog-tech{
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
}
.container-slider{
    margin-top: 50px;
    height: 600px;
}
.around-slider{
    width: 100%;
    height: 100%;
}
.mySwiper{
    width: 100%;
    height: 100%;
}
.item-slide{
  width: 100%;
  height: 100%;
}
.item-slide-image{
  width: 100%;
  height: 100%;
  position: relative;
}
.content-item{
  position: absolute;
  top: 60%;
  width: 700px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
}
.content-item-title{
  font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

letter-spacing: 0.38px;
}
.content-item-text{
  margin-top: 10px;
  font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
/* or 129% */

text-align: center;
letter-spacing: -0.408px;
color: rgba(255, 255, 255, 0.87);
}
.around-read-more{
  margin-top: 10px;
  font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 22px;
}
.read-more{
  margin-right: 10px;
}
.around-btn-head-blog{
  margin-top: 50px;
  text-align: center;
}
.around-btn-head-blog button{
  padding: 9px 32px;
  font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 22px;
border-radius: 20px;
}
.btn-tech{
   background: rgba(60, 60, 67, 0.18);
  margin-right: 10px;
}
.btn-Life{
background: rgba(235, 235, 245, 0.3);
}

@media screen and (max-width: 850px){
  .container-slider{
    height: 450px;
  }
}
@media screen and (max-width:450px) {
   .container-blog{
    margin: 80px 20px;
   }
   .container-slider{
    height: 250px;
    margin-top: 30px;
   }
   .content-item{
    width: 300px;
    top: 10%;
   }
}
</style>
