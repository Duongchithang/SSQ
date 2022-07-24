<template>
  <div>
      <div class="wrapper-blog-footer">
        <div class="container-blog-footer">
            <h1 class="title-blog-footer">Tên chủ đề</h1>
            <div class="around-blog-contain">
                <div class="blog-contain-left">
                    <img class="blog-left-img" src="https://images.unsplash.com/photo-1658244071055-ec01a2571c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
                    <span class="blog-title-left">How To Pull Off Vintage Interior Design That Still Works Today</span>
                    <span class="blog-left-time">MAY 14, 2018 - 3 COMMENTS</span>
                    <span class="blog-text">More off this less hello salamander lied porpoise much over tightly circa…</span>
                </div>
                <div class="blog-contain-right">
                    <div class="blog-contain-item">
                        <img class="blog-right-img" src="https://images.unsplash.com/photo-1658195676245-a6d3d3ef5f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="">
                        <span class="blog-title-right">How To Pull Off Vintage Interior Design That Still Works Today</span>
                        <span class="blog-right-time">MAY 14, 2018 - 3 COMMENTS</span>
                    </div>
                    <div class="blog-contain-item">
                        <img class="blog-right-img" src="https://images.unsplash.com/photo-1658195676245-a6d3d3ef5f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="">
                        <span class="blog-title-right">How To Pull Off Vintage Interior Design That Still Works Today</span>
                        <span class="blog-right-time">MAY 14, 2018 - 3 COMMENTS</span>
                    </div>
                    <div class="blog-contain-item">
                        <img class="blog-right-img" src="https://images.unsplash.com/photo-1658195676245-a6d3d3ef5f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="">
                        <span class="blog-title-right">How To Pull Off Vintage Interior Design That Still Works Today</span>
                        <span class="blog-right-time">MAY 14, 2018 - 3 COMMENTS</span>
                    </div>
                    <div class="blog-contain-item">
                        <img class="blog-right-img" src="https://images.unsplash.com/photo-1658195676245-a6d3d3ef5f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="">
                        <span class="blog-title-right">How To Pull Off Vintage Interior Design That Still Works Today</span>
                        <span class="blog-right-time">MAY 14, 2018 - 3 COMMENTS</span>
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
.wrapper-blog-footer{
    max-width: 1440px;
}
.container-blog-footer{
    margin: 20px 20px;
}
.title-blog-footer{
    text-align: center;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.374px;
    padding-bottom: 10px;
    position: relative;
}
.title-blog-footer::after{
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1.5px;
    background: black;
    width: 100px;
}
.around-blog-contain{
    column-gap: 30px;
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
}
.blog-contain-left{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.blog-left-img{
    width: 100%;
    height: 400px;
    border-radius: 10px;
}
.blog-title-left{
    font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
letter-spacing: 0.36px;
text-align: center;
margin-top: 20px;
}
.blog-left-time{
    font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
letter-spacing: 0.066px;
color: #AEAEB2;
margin-top: 10px;
}
.blog-text{
    color: rgba(60, 60, 67, 0.6);
    font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
margin-top: 10px;
/* or 129% */
text-align: center;
letter-spacing: -0.408px;
}
.blog-contain-right{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
}
.blog-contain-item{
    display: flex;
    flex-direction: column;
}
.blog-right-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}
.blog-title-right{
    margin-top: 10px;
    font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
text-align: center;
letter-spacing: 0.38px;
color: #1C1C1E;
}
.blog-right-time{
    margin-top: 10px;
    text-align: center;
letter-spacing: 0.066px;
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #AEAEB2;
}

@media screen and (max-width:850px){
    .around-blog-contain{
        grid-template-columns: 1fr;
    }
   .blog-contain-left{
    align-items: flex-start;
   }
   .blog-title-left{
    text-align: left;
   }
   .blog-contain-right{
    margin-top: 50px;
   }
}
@media screen and (max-width:450px){
    .around-blog-contain{
        grid-template-columns: 1fr;
    }
    .blog-contain-right{
        margin-top: 50px;
    }
    .blog-left-img{
        height: 250px;
    }
    .blog-title-left{
        text-align: left;
        font-size: 24px;
        font-weight: 600;
    }
    .blog-left-time{
        text-align: left;
        display: block;
    }
    .blog-title-right{
        text-align: left;
         display: -webkit-box;
   -webkit-line-clamp: 3;  /* số dòng hiển thị */
  	-webkit-box-orient: vertical;
  	overflow: hidden;
    }
    .blog-contain-left{
        align-items: flex-start;
    }
    .blog-text{
        text-align: left;
    }
    .blog-contain-item{
        align-items: flex-start;
    }
}
</style>