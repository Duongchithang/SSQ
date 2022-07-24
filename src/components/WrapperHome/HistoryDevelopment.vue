<template>
  <div class="around-dev">
    <h1 class="history-title" data-aos="fade-right" data-aos-duration="2000">Lịch sử phát triển</h1>
    <div class="wrapper-history" data-aos="fade-left" data-aos-duration="2000">
        <div class="history-list">
            <div class="history-row">
                <div class="row"></div>
                <div class="history-item">
                    <div class="around-item">
                        <div class="item-color-1 item-repons"></div>
                         <div class="history-content-item">
                            <img class="history-image" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                            <div class="text-info-item test-left">
                                <span class="text-info-title">Text</span>
                                <span class="text-info-year">2019</span>
                                <span class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptatem vitae libero quasi. Adipisci natus illo corporis. Molestias, non quaerat in eaque tempora a odit praesentium velit repudiandae error.</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
             <div class="history-row">
                <div class="history-item">
                    <div class="around-item">
                         <div class="history-content-item item2">
                            <img class="history-image" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                            <div class="text-info-item test-right">
                                <span class="text-info-title">Text</span>
                                <span class="text-info-year">2019</span>
                                <span class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptatem vitae libero quasi. Adipisci natus illo corporis. Molestias, non quaerat in eaque tempora a odit praesentium velit repudiandae error.</span>
                            </div>
                         </div>
                         <div class="item-color-2 item-repons"></div>
                    </div>
                </div>
                <div class="row"></div>
            </div>
             <div class="history-row">
                <div class="row"></div>
                <div class="history-item">
                    <div class="around-item">
                        <div class="item-color-3 item-repons"></div>
                         <div class="history-content-item">
                            <img  class="history-image" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                            <div class="text-info-item test-left">
                                <span class="text-info-title">Text</span>
                                <span class="text-info-year">2019</span>
                                <span class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptatem vitae libero quasi. Adipisci natus illo corporis. Molestias, non quaerat in eaque tempora a odit praesentium velit repudiandae error.</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
             <div class="history-row">
                <div class="history-item">
                    <div class="around-item">
                         <div class="history-content-item item2">
                            <img class="history-image" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                            <div class="text-info-item test-right"> 
                                   <span class="text-info-title">Text</span>
                                   <span class="text-info-year">2019</span>
                                <span class="text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit voluptatem vitae libero quasi. Adipisci natus illo corporis. Molestias, non quaerat in eaque tempora a odit praesentium velit repudiandae error.</span>
                            </div>
                         </div>
                          <div class="item-color-4 item-repons"></div>
                    </div>
                </div>
                <div class="row"></div>
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
  .history-title{
    text-align: center;
    margin-top : 80px;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.37px;
    position: relative;
    padding-bottom: 10px;
    cursor: pointer;
   
  }
  .history-title::after{
   content: "";
   position: absolute;
   bottom: 0;
   left: 40%;
   width: 50px;
   height: 1.5px;
   background: black;
    transition: all 0.3s linear;
  }
  .history-title:hover::after{
      width: 250px;
   }
 .wrapper-history{
    margin: 50px 100px;
    position: relative;
 }
 .history-list{
    display: flex;
    flex-direction: column;
 }
 .history-row{
    width: 100%;
    height: 160px;
 }
 .history-image{
    width: 250px;
    height: 160px;
    border-radius: 10px;
    object-fit: cover;
 }
 .history-content-item{
    display: flex;
 }
 .text-info-item{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 160px;
 }
 .history-row{
    display: flex;
    margin-top: 20px;
 }
 .row{
    width: 50%;
 }
 .history-item{
    width: 50%;
 }
 .item2{
    flex-direction: row-reverse;
 }
 .item2 span{
    text-align: right;
 }
 .around-item{
    width: 100%;
    height: 100%;
    display: flex;
 }
 .item-color-1{
    width: 4px;
    height: 100%;
    border-radius: 5px;
    background: #FF3B30;
    margin-right: 20px;
    transform: translateX(-3px);
 }
 .item-color-2{
    width: 3px;
    height: 100%;
    border-radius: 5px;
    background: #FF9500;
    margin-left: 20px;
 }
  .item-color-3{
    width: 4px;
    height: 100%;
    border-radius: 5px;
    background: #FFCC00;
    margin-right: 20px;
    transform: translateX(-3px);
 }
  .item-color-4{
    width: 3px;
    height: 100%;
    border-radius: 5px;
    background: #34C759;
    margin-left: 20px;
 }
 .text-content{
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0,41px;
    color: #636366;
    display: -webkit-box;
   -webkit-line-clamp: 4;  /* số dòng hiển thị */
  	-webkit-box-orient: vertical;
  	overflow: hidden;
 }
 .test-left{
    margin-left: 10px;
 }
 .test-right{
    margin-right: 10px;
 }
 .text-info-title{
    font-weight: 700;
    font-size: 28px;
    line-height: 33.41px;
    letter-spacing: 0.36px;
 }
 .text-info-year{
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
 }

 @media screen and (max-width:850px){
     .wrapper-history{
      margin: 50px;
     }
     .text-content{
      margin-top: 30px;
    display: -webkit-box;
   -webkit-line-clamp: 3;  /* số dòng hiển thị */
  	-webkit-box-orient: vertical;
  	overflow: hidden;
 }
.text-info-year{
   margin-top: 10px;
}
 }
  @media screen and (max-width: 450px) {
    .history-title{
        margin-top: 50px;
        text-align: left;
    }
    .around-dev{
        margin: 50px 20px;
    }
    .row{
        display: none;
    }
    .wrapper-history{
        margin: 10px 0;
    }
    .history-item{
        width: 100%;
    }
    .item-repons{
        display: none;
    }
    .history-image{
        height: 120px;
        width: 160px;
    }
    .text-content{
         -webkit-line-clamp: 2;  /* số dòng hiển thị */
  	-webkit-box-orient: vertical;
  	overflow: hidden;
   margin-top: 20px;
    }
    .item2{
        flex-direction: row;
    }
     .item2 span{
        text-align: left;
     }
    .test-right{
        margin-left: 10px;
    }
    .history-row{
        height: 120px;
    }
      .history-title::after{
   content: "";
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100px;
   height: 1.5px;
   background: black;
    transition: all 0.3s linear;
  }
 }
</style>