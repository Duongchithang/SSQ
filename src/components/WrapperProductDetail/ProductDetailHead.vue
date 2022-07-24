<template>
  <div>
    <div class="wrapper-detail-head">
      <div class="container-detail-head">
        <h1 class="head-name">Product name</h1>
        <div class="container-slider">
          <div class="around-slider">
              <div class="around-img-main">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
              </div>
              <ul class="list-img">
                <li class="item-img">
                    <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="">
                </li>
                <li class="item-img">
                    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="">
                </li>
                <li class="item-img">
                    <img src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                </li>
                <li class="item-img">
                    <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    mounted(){
       var ImgMain = document.querySelector('.around-img-main img');
       var ListImg = document.querySelectorAll('.item-img img');
       ListImg.forEach((value,index)=>{
        value.onclick = function(){
             ShowImg(value.src);
        }
       });
       function ShowImg(value){
           ImgMain.src = value;
       }
    }
}
</script>

<style scoped>
.wrapper-detail-head{
    max-width: 1440px;
}
.container-detail-head{
    margin:100px 100px 50px 100px;
}
.head-name{
    font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
text-align: center;
letter-spacing: 0.374px;

}
.container-slider{
    margin-top: 50px;
}
.around-img-main{
    width: 100%;
    height: 550px;
}
.around-img-main img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.around-slider{}
.list-img{
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 20px;
}
.item-img{
    width: 100%;
    height: 200px;
}
.item-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>
