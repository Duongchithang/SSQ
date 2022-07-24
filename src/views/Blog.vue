<template>
  <div>
    <Header></Header>
     <BlogHeader></BlogHeader>
     <BlogContainer></BlogContainer>
     <BlogVote></BlogVote>
     <BlogNews></BlogNews>
     <BlogFooter></BlogFooter>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue"
import BlogHeader from  "../components/WrapperBlog.vue/BlogHeader.vue"
import BlogContainer from "../components/WrapperBlog.vue/BlogContainer.vue"
import BlogVote from "../components/WrapperBlog.vue/BlogVote.vue"
import BlogNews from "../components/WrapperBlog.vue/BlogNews.vue"
import BlogFooter from "../components/WrapperBlog.vue/BlogFooter.vue"
import Footer from "../components/layout/Footer.vue"

export default {
   components:{
    BlogHeader,
    Header,
    BlogContainer,
    BlogVote,
    BlogNews,
    BlogFooter,
    Footer
}
}
</script>

<style>

</style>