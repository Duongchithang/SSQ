<template>
  <div>
    <div class="wrapper-product-heading">
      <div class="container-product-heading">
        <div class="around-product-title">
          <div class="around-btn-follow">
            <span class="btn-follow">Following</span>
            <span class="material-symbols-outlined"> expand_more </span>
          </div>
          <ul class="list-menu-product">
            <li class="item-menu-product active">Discover</li>
            <li class="item-menu-product">Discover</li>
            <li class="item-menu-product">Discover</li>
            <li class="item-menu-product">Discover</li>
            <li class="item-menu-product">Discover</li>
            <li class="item-menu-product">Discover</li>
          </ul>
          <div class="around-btn-fillter">
            <span class="material-symbols-outlined"> filter_list </span>
            <span class="btn-filters">Filters</span>
          </div>
        </div>
        <div class="around-text-head">
          <h1 class="follow-head">You aren't following anyone yet</h1>
          <span class="find-head">Find friends you already know from Twitter</span>
          <span class="check-head">Check out some of today's popular shots</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {


};
</script>

<style scoped>
.wrapper-product-heading{
  max-width: 1440px;
}
.container-product-heading{
   margin: 100px 50px 50px 50px;
}
.around-product-title{
  display: flex;
   justify-content: space-between;
   align-items: center;
}
.around-btn-follow{
   display: inline-flex;
   letter-spacing: -0.408px;
   padding: 10px 18px;
   border: 1px solid rgba(60, 60, 67, 0.6);
   border-radius: 30px;

/* Label Color/Light/Secondary */

color: rgba(60, 60, 67, 0.6);
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 22px;
transition: all 0.3s linear;
}
.around-btn-follow:hover{
  background: #1C1C1E;
  color: white;
}
.btn-follow{

}
.list-menu-product{
 display: flex;
 gap: 50px;
 align-items: center;
 font-weight: 500;
font-size: 16px;
line-height: 16px;
}
.around-btn-fillter{
 display: inline-flex;
  display: inline-flex;
   letter-spacing: -0.408px;
   padding: 10px 18px;
   border: 1px solid rgba(60, 60, 67, 0.6);
   border-radius: 30px;

/* Label Color/Light/Secondary */

color: rgba(60, 60, 67, 0.6);
font-style: normal;
font-weight: 500;
font-size: 17px;
transition: all 0.3s linear;
line-height: 22px;
}
.around-btn-fillter:hover{
  background: #1C1C1E;
  color: white;
}
.btn-filters{
  margin-left: 8px;
}
.active{
  padding:10px 18px;
  background: rgba(60, 60, 67, 0.18);
border-radius: 100px;
}
.around-text-head{
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.follow-head{
  font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
letter-spacing: 0.374px;

color: #000000;

}
.find-head{
  font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
letter-spacing: -0.408px;
margin-top: 10px;
}
.check-head{
  letter-spacing: 0.38px;

color: #000000;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-top: 50px;
}
@media screen and (max-width:450px){
  .around-btn-follow{
    display: none;
  }
  .around-btn-fillter{
    display: none;
  }
  .list-menu-product{
    justify-content: space-between;
    flex-wrap: wrap;

  }
  .container-product-heading{
    margin: 100px 20px;
  }
  .wrapper-product-heading{
    width: 100%;
  }
}
@media screen and (max-width:850px){
  .around-btn-follow{
    display: none;
  }
  .around-btn-fillter{
    display: none;
  }
  .list-menu-product{
    width: 100%;
    justify-content: space-between;
  }
  .around-text-head{
    margin-top: 40px;
  }
}
</style>
