<template>
  <div>
    <div class="wrapper-Product">
      <div class="slider" data-aos="fade-right" data-aos-duration="2000">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="">
            <div class="product-content">
                <h1 class="product-head">Products</h1>
                <div class="product-text">
                 <span class="product-text-head">Title</span>
                <span class="product-text-long">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas nulla nihil incidunt odio eaque quo ipsum hic quae, earum architecto sequi saepe deserunt adipisci? Omnis doloremque harum amet officiis.</span>
              <div class="see-more">
              <span>See more</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
      </div>
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="">
                 <div class="product-content">
                <h1 class="product-head">Products</h1>
                <div class="product-text">
                 <span class="product-text-head">Title</span>
                <span class="product-text-long">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas nulla nihil incidunt odio eaque quo ipsum hic quae, earum architecto sequi saepe deserunt adipisci? Omnis doloremque harum amet officiis.</span>
              <div class="see-more">
              <span>See more</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
      </div>
              </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80"
              alt="">
                 <div class="product-content">
                <h1 class="product-head">Products</h1>
                <div class="product-text">
                 <span class="product-text-head">Title</span>
                <span class="product-text-long">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas nulla nihil incidunt odio eaque quo ipsum hic quae, earum architecto sequi saepe deserunt adipisci? Omnis doloremque harum amet officiis.</span>
              <div class="see-more">
              <span>See more</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
      </div>
              </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="">
                 <div class="product-content">
                <h1 class="product-head">Products</h1>
                <div class="product-text">
                 <span class="product-text-head">Title</span>
                <span class="product-text-long">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas nulla nihil incidunt odio eaque quo ipsum hic quae, earum architecto sequi saepe deserunt adipisci? Omnis doloremque harum amet officiis.</span>
              <div class="see-more">
              <span>See more</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
      </div>
              </swiper-slide>
          <swiper-slide>
            <img
              src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80"
              alt="">
                 <div class="product-content">
                <h1 class="product-head">Products</h1>
                <div class="product-text">
                 <span class="product-text-head">Title</span>
                <span class="product-text-long">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas nulla nihil incidunt odio eaque quo ipsum hic quae, earum architecto sequi saepe deserunt adipisci? Omnis doloremque harum amet officiis.</span>
              <div class="see-more">
              <span>See more</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
      </div>
              </swiper-slide>
        </swiper>
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
.wrapper-Product {
  margin-top: 50px;
  max-width: 1440px;
  display: block;
  position: relative;
}

.slider {
  width: 100%;
  height: 600px;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
swiper-slide{
  /* position: relative; */
}
.product-content{
  position: absolute;
  top: 50px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-head{
  text-align: center;
  top: 20px;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: white;
}
.product-text{
  bottom: 100px;
  display: flex;
  flex-direction: column;
  margin:0 400px 50px 400px;
  color: white;
}
.product-text-head{
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  text-align: center;
  margin-bottom:10px;
}
.see-more{
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
}
.see-more span{
  margin-right: 10px;
}

@media screen and (max-width:850px){
  .slider{
    height: 450px;
  }
  .product-content{
    height: 350px;
  }
  .product-text{
    margin: 50px 100px;
  }
}
@media screen and (max-width:450px) {
  .slider{
    height: 300px;
  }
  .product-content{
    height: 280px;
    width: 300px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .product-text{
    margin: 0;
  }
  .product-head{
     font-size: 25px;
     font-weight: 600;
  }
  .see-more{
    margin-top: 5px;
    margin-bottom: 20px;
  }
  .product-text-long{
       display: -webkit-box;
   -webkit-line-clamp: 2;  /* số dòng hiển thị */
  	-webkit-box-orient: vertical;
  	overflow: hidden;
  }
}
</style>
