<template>
  <div>
    <div class="wrapper-intro">
        <div class="container-intro">
            <div class="around-title-top" data-aos="fade-right" data-aos-duration="2000">
                <span class="intro-title intro-word-one">Tầm nhìn</span>
                <span class="intro-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis enim, nisi quo beatae animi facere aliquid saepe laboriosam! Impedit voluptatum quia tempore sunt sapiente. Magni facere nobis illum provident?</span>
            </div>
            <div class="around-title-bottom" data-aos="fade-left" data-aos-duration="2000">
                <span class="intro-title intro-word-two">Sứ mệnh</span>
                <span class="intro-text text-mission">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit temporibus aut ut vel. Nam sit minima ipsum maxime, eveniet modi nisi eius soluta, ad distinctio ratione. Expedita aut eligendi ipsum.</span>
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
.wrapper-intro{
  margin:100px 100px 50px 100px;
}
.container-intro{
  display: flex;
  flex-direction: column;
  color: #000000;
}
.around-title-top{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.around-title-bottom{
   display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
}
.intro-title{
  font-weight: 700;
font-size: 34px;
line-height: 41px;
letter-spacing: 0.374px;
padding-bottom: 10px;
position: relative;
}
.intro-word-one::after{
  position: absolute;
  content: "";
  width: 100px;
  height: 1px;
  background: black;
  bottom: 0;
  left: 0;
}
.intro-word-two::after{
  position: absolute;
  content: "";
  width: 100px;
  height: 1px;
  background: black;
  bottom: 0;
  right: 0;
}
.intro-text{
  width: 700px;
  margin-top: 20px;
  font-weight: 400;
font-size: 17px;
line-height: 22px;
/* or 129% */

letter-spacing: -0.408px;
}
.text-mission{
  text-align: right;
}

@media screen and (max-width:850px){
   .wrapper-intro{
    margin: 100px 50px 50px 50px;
   }
}
@media screen  and (max-width:450px){
   .wrapper-intro{
    margin:100px 20px 50px 20px;
   }
   .container-intro{}
   .around-title-top{}
   .around-title-bottom{
    align-items: flex-start;
   }
   .intro-title{}
   .intro-word-one::after{}
   .intro-word-two::after{
    left: 0;
   }
   .intro-text{
    width: 300px;
   }
   .text-mission{
    text-align: left;
   }
}
</style>