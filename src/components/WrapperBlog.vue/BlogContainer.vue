<template>
  <div>
    <div class="wrapper-blog-container">
      <div class="container-blog-contain">
        <h1 class="blog-head" data-aos="fade-right" data-aos-duration="2000">Tên chủ đề</h1>
        <div class="list-group" data-aos="fade-left" data-aos-duration="2000">
          <div class="item-group">
            <img class="item-group-img" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span class="item-group-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Today</span
            >
            <span class="item-group-time">Mar 24, 2022 - 3 Comments</span>
          </div>
           <div class="item-group">
            <img class="item-group-img" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="" />
            <span class="item-group-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Today</span
            >
            <span class="item-group-time">Mar 24, 2022 - 3 Comments</span>
          </div>
           <div class="item-group">
            <img class="item-group-img" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="" />
            <span class="item-group-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Today</span
            >
            <span class="item-group-time">Mar 24, 2022 - 3 Comments</span>
          </div>
           <div class="item-group">
            <img class="item-group-img" src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span class="item-group-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Today</span
            >
            <span class="item-group-time">Mar 24, 2022 - 3 Comments</span>
          </div>
        </div>
        <div class="around-btn-load"><button class="Btn-load">Load more</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-blog-container {
  max-width: 1440px;
}
.container-blog-contain {
  margin: 0 100px;
}
.blog-head {
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  position: relative;
  padding-bottom: 8px;
}
.blog-head::after{
   position: absolute;
   content: "";
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   width: 120px;
   height: 1.5px;
   background: black;
}
.list-group {
  margin-top: 70px;
  column-gap: 50px;
  row-gap: 50px;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 460px 460px;
  grid-template-rows: repeat(2,1fr);
}
.item-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-group-img {
  width: 460px;
  height: 314px;
  object-fit: cover;
  border-radius: 20px;
}
.item-group-title {
  margin-top: 20px;
  font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.36px;

/* Default/SystemGray/06/Dark */

color: #1C1C1E;
}
.item-group-time {
  margin-top: 10px;
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 13px;
/* identical to box height, or 118% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.066px;

/* Default/SystemGray/02/Light */

color: #AEAEB2;
text-align: center;
}
.around-btn-load{
  width: 100%;
  display: flex;
}
.Btn-load {
  background: #1C1C1E;
border-radius: 10px;
  padding: 13px 20px;
  color:white;
  font-weight: 500;
  text-align: center;
  margin: 50px auto;
  transition: all 0.2s linear;
 box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px;
}
.Btn-load:hover{
  background: rgb(199, 199, 199);
  color: #1C1C1E;
}

@media screen and (max-width:850px){
  .item-group-img{
    height: 250px;
  }
  .list-group{
    grid-template-columns: 350px 350px;
  }
}
@media screen and (max-width:450px){
   .list-group{
    grid-template-columns: 1fr;
    margin-top: 40px;
   }
  .container-blog-contain {
    margin: 0 20px;
  }
  .item-group-img{
    height: 250px;
  }
  .Btn-load{
    margin: 30px auto;
  }
}
</style>
