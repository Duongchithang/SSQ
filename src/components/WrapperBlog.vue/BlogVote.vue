<template>
  <div>
    <div class="wrapper-blog-vote">
      <div class="container-blog-vote">
        <h1 class="head-blog-vote">Tên chủ đề</h1>
        <div class="list-blog-vote">
          <div class="item-blog-vote">
            <img class="item-blog-img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span class="item-blog-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Day</span
            >
            <span class="item-blog-time">Mar 24, 2022 - 3 Comments</span>
          </div>
          <div class="item-blog-vote">
            <img class="item-blog-img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span class="item-blog-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Day</span
            >
            <span class="item-blog-time">Mar 24, 2022 - 3 Comments</span>
          </div>
          <div class="item-blog-vote">
            <img class="item-blog-img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span class="item-blog-title"
              >How To Pull Off Vintage Interior Design That Still Works
              Day</span
            >
            <span class="item-blog-time">Mar 24, 2022 - 3 Comments</span>
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
.wrapper-blog-vote {
  max-width: 1440px;
  background: #1c1c1e;
}
.container-blog-vote {
  padding: 50px 10px 50px 10px;
}
.head-blog-vote {
  text-align: center;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.374px;
  padding-bottom: 10px;
  position: relative;
}
.head-blog-vote::after{
    position: absolute;
    content: "";
    width: 100px;
    height: 1.5px;
    background: white;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.list-blog-vote {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 20px;
}
.item-blog-vote {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item-blog-img {
    width: 100%;
    height: 260px;
    border-radius: 20px;
    object-fit: cover;
}
.item-blog-title {
    margin-top: 20px;
    font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
letter-spacing: 0.36px;
text-align: center;
color: #F2F2F7;
}
.item-blog-time {
    margin-top: 10px;
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 13px;
letter-spacing: 0.066px;
color: #C7C7CC;
}

@media screen and (max-width:850px){
  .container-blog-vote{
    padding: 50px 50px;
  }
  .list-blog-vote{
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
  }
  .item-blog-title{
    text-align: left;
    font-size: 22px;
  }
  .item-blog-vote{
    align-items: flex-start;
  }
}
@media screen and (max-width:450px){
  .list-blog-vote{
    grid-template-columns: 1fr;
  }
  .item-blog-img {
    height: 230px;

  }
  .item-blog-vote{
    margin-bottom: 30px;
  }
}
</style>
