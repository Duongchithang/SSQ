<template>
  <div>
    <div class="wrapper-product">
      <div class="container-product">
        <div class="product-list">
          <div class="product-item" v-for="value in 20" :key="value">
            <router-link to="/Product/productdetail">
              <img class="product-item-img" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              <div class="around-info-product">
                <span class="product-name">Tên sản phẩm</span>
                <div class="around-live">
                  <div class="around-live-left">
                    <span class="material-symbols-outlined icon-mate"> favorite </span>
                    <span class="fovorite-number">10.2k</span>
                  </div>
                  <div class="around-live-right">
                    <span class="material-symbols-outlined icon-mate"> visibility </span>
                    <span class="view-number">5.2K</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-product{
    max-width: 1440px;
}
.container-product{
    margin: 0 20px 100px 20px;
}
.product-list{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 20px;
    row-gap: 20px;
}
.product-item{
    width: 100%;
    
}
.product-item-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all 0.3s linear;
    transform: scale(1);
    border-radius: 20px;
    overflow: hidden;
}
.product-item-img:hover{
  transform: scale(1.1);
}
.around-info-product{
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
.product-name{
font-weight: 500;
font-size: 17px;
line-height: 22px;
letter-spacing: -0.408px;

color: #000000;
}
.around-live{
 display: flex;
}
.around-live-left{
 display: inline-flex;
 margin-right: 20px;
 align-items: center;
}
.fovorite-number{

}
.around-live-right{
  display: inline-flex;
  align-items: center;
}
.view-number{

}
.icon-mate{
    font-size: 20px;
    color: black;
    margin-right: 2px;
}

@media screen and (max-width:850px){
    .product-list{
      grid-template-columns: repeat(3,1fr);
      column-gap: 40px;
    row-gap: 40px;
    }
    .around-live-left{
      margin-right: 5px;
    }
}
@media screen and (max-width:450px){
    .product-list{
      grid-template-columns: repeat(2,1fr);
      column-gap: 10px;
    row-gap: 10px;
    }
    .product-item-img{
      height: 150px;
    }
    .product-name{
      font-size: 12px;
    }
    .around-live{
      font-size: 8px;
    }
      .around-live-left{
      margin-right: 2px;
    }
}
</style>
