<template>
  <div>
     <div class="wrapper-headerbanner">
       <div class="container-banner">
         <div class="wrapper-header-content" data-aos="fade-right" data-aos-duration="2000">
          <div class="shop text-[22px] font-[700] leading-[28px]">Shop for College</div>
          <h1 class="text-banner font-[700] text-[35px] leading-[41px] tracking-[0.37px] mt-[10px]"><span>Save on Mac with an </span><span>education discount.{} </span></h1>
          <div class="around-btn mt-[30px] py-[14px] px-[20px] bg-[#1C1C1E] text-white rounded-[10px] flex justify-between items-center">
            <router-link to=""><span class="mr-[5px] text-[17px] leading-[22px]">Shop now</span></router-link>
            <span class="material-symbols-outlined"> chevron_right </span>
          </div>
         </div>
         <div class="wrapper-banner-image" data-aos="fade-left" data-aos-duration="2000">
          <img class="rounded-[20px]" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" alt="">
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
:root{
   --bg-color: hsl(49 37% 94%);
   --typewriterSpeed: 6s;
  --typewriterCharacters: 24;
}
   h1 span{
    display: block;
   }
   .wrapper-headerbanner{
    max-width: 1440px;
    background: #F2F2F2;
    position: relative;
    display: block;
   }
   .container-banner{
    padding:100px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   }
   .wrapper-header-content{
    width: 50%;
   }
   .wrapper-banner-image{
    width: 50%;
    height: 100%;
   }
   .wrapper-banner-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
   .around-btn{
    display: inline-flex;
    transition: all 0.2s linear;
   }
   .around-btn:hover{
    background: rgb(122, 120, 120);
    color: #1C1C1E;
   }
  
   @media screen and (max-width:850px){
    .container-banner{
      padding: 0 50px;
      height: 450px;
    }
    .text-banner{
      font-size: 30px;
      line-height: 35px;
    }
   .wrapper-banner-image{
    height: 300px;
   }
   }
    @media screen and (max-width:450px){
    .container-banner{
      flex-direction: column-reverse;
      height: 500px;
      padding: 0 20px;
      justify-content: space-around;
    }
    .wrapper-header-content{
      width: 100%;
    }
     .wrapper-banner-image{
      width: 100%;
      margin-top: 100px;
      height: 200px;
   }
   .text-banner{
    font-size: 30px;
   }
   .shop{
    margin-top: 30px;
   }
   .wrapper-headerbanner{
    padding-bottom: 50px;
   }
   }
</style>