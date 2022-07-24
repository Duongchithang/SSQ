<template>
  <div>
    <div class="wrapper-footer">
        <div class="container-footer">
            <div class="wrapper-footer-left">
               <span>icon</span>
               <span class="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex iure nemo animi culpa ipsum sunt odio aperiam non repudiandae, unde ullam, et velit qui rem corporis quos! Sapiente, suscipit!</span>
               <ul class="list-social">
                 <li class="item-social">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                 </li>
                 <li class="item-social">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                 </li>
                 <li class="item-social">
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                 </li>
                 <li class="item-social">
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                 </li>
               </ul>
               <span class="footer-end">Team Software Solution Application</span>
            </div>
            <div class="wrapper-footer-right">
                 <div class="footer-list">
                    <div class="footer-item">
                        <span class="footer-item-title">Sẩn phẩm</span>
                        <ul class="footer-around-list">
                            <li class="footer-item">Home</li>
                            <li class="footer-item">Marketplace</li>
                            <li class="footer-item">Sitemap</li>
                            <li class="footer-item">Creator Program</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <span class="footer-item-title">Thông tin</span>
                        <ul class="footer-around-list">
                            <li class="footer-item">Players</li>
                            <li class="footer-item">Alloances</li>
                            <li class="footer-item">Analytics</li>
                            <li class="footer-item">Leaderboards</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <span class="footer-item-title">Thông tin</span>
                        <ul class="footer-around-list">
                            <li class="footer-item">Players</li>
                            <li class="footer-item">Alloances</li>
                            <li class="footer-item">Analytics</li>
                            <li class="footer-item">Leaderboards</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <span class="footer-item-title">Thông tin</span>
                        <ul class="footer-around-list">
                            <li class="footer-item">Players</li>
                            <li class="footer-item">Alloances</li>
                            <li class="footer-item">Analytics</li>
                            <li class="footer-item">Leaderboards</li>
                        </ul>
                    </div>
                 </div>
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
   .wrapper-footer{
    max-width: 1440px;
    background: black;
    position: relative;
   }
   .container-footer{
    margin:0 100px;
    padding: 50px 0;
    color: white;
    display: flex;
   }
   /* footer left */
   .wrapper-footer-left{
    width: 40%;
    display: flex;
    flex-direction: column;
   }
   .footer-text{
    margin-top: 40px;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
    transition: all 0.3s linear;
   }
   .list-social{
    margin-top: 30px;
    display: flex;
    column-gap: 20px;
   }
   .item-social{
    
   }
   .footer-end{
    margin-top: 30px;
   }
   .item-social i{
     font-size: 25px;
   }
   /* end footer left  */
   /* footer right  */
   .wrapper-footer-right{
      width: 60%;
      margin-left: 50px;
   }
   .footer-list{
      display: flex;
      width: 100%;
      justify-content: space-between;
   }
   .footer-item{
     padding-bottom: 20px;
     font-weight: 400;
font-size: 15px;
line-height: 18px;
transition: all 0.3s linear;
cursor: pointer;
/* identical to box height, or 138% */

letter-spacing: -0.078px;
   }
   .footer-item-title{
      font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

letter-spacing: 0.38px;
   }
   .footer-around-list{
     margin-top: 40px;
   }
   .footer-item:hover{
    color: #02A4CB;
   }
   .footer-text:hover{
    color: #02A4CB;
   }
   /* end footer right  */
   @media screen and (max-width:450px) {
       .container-footer{
        flex-direction: column;
        margin: 0 20px;
       }
       .wrapper-footer-left{
         width: 100%;
       }
       .wrapper-footer-right{
         width: 100%;
         margin-left:0;
       }
       .footer-text{
        margin-top: 20px;
       }
       .footer-list{
        margin-top: 50px;
        display: grid;
        row-gap: 40px;
        grid-template-columns: repeat(2,1fr);
       }
       .footer-item{
        text-align: center;
        padding-bottom: 10px;
       }
       .footer-around-list{
        margin-top: 20px;
       }
   }
   @media screen and (max-width:850px){
     .container-footer{
      margin : 0 20px;
     }
     .wrapper-footer-right{
      margin-left: 0;
     }
   }
</style>