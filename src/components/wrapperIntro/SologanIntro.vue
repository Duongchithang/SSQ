<template>
  <div>
     <div class="wrapper-sologan">
        <div class="container-sologan">
            <div class="sologan-top">
                <h1 class="sologan-head">Triết lí kinh doanh</h1>
                <span class="sologan-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, vero voluptate. Quasi cumque placeat tempora, odit sed excepturi corrupti necessitatibus officiis hic minima? Officiis totam optio, molestiae nobis soluta facere.</span>
            </div>
            <div class="sologan-bottom">
                <h1 class="sologan-title">Chính sách kinh doanh</h1>
                <span class="sologan-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis odio suscipit neque repellat? Pariatur, quas eligendi, ullam voluptates eum perspiciatis dolore reprehenderit voluptate quasi blanditiis dignissimos vitae fuga. Corporis.</span>
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
  .wrapper-sologan{
     max-width: 1440px;
  }
  .container-sologan{
    margin: 50px 100px;
  }
  .sologan-head{
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    padding-bottom: 5px;
    position: relative;
  }
  .sologan-head::after{
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 150px;
    height: 1.5px;
    background: black;
  }
  .sologan-text{
      font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
display: inline-block;
/* or 129% */

letter-spacing: -0.408px;
margin-top:20px;
  }
  .sologan-bottom{

  }
  .sologan-title{
    margin-top: 20px;
    font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

letter-spacing: 0.38px;
  }
 
  @media screen and (max-width:850px){
    .container-sologan{
      margin: 50px;
    }
  }
   @media screen and (max-width:450px){
    .container-sologan{
      margin: 40px 20px;
    }
    .sologan-top{

    }
    .sologan-head{
       font-size: 30px;
    }
    .sologan-text{

    }
    .sologan-bottom{

    }
    .sologan-title{

    }
  }
</style>