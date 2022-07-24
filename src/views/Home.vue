<template>
  <div>
    <Header></Header>
    <HeaderBanner></HeaderBanner>
    <HistoryDevelopment></HistoryDevelopment>
    <HomeProduct></HomeProduct>
    <SliderMember></SliderMember>
    <Comment></Comment>
    <Icon></Icon>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import HeaderBanner from '../components/WrapperHome/HeaderBanner.vue'
import HistoryDevelopment from '../components/WrapperHome/HistoryDevelopment.vue'
import SliderMember from '../components/WrapperHome/SliderMember.vue'
import Comment from '../components/WrapperHome/Comment.vue'
import Footer from '../components/layout/Footer.vue'
import HomeProduct from '../components/WrapperHome/HomeProduct.vue'
import Icon from '../components/layout/Icon.vue'

export default {
    components: {
    Header,
    HeaderBanner,
    HistoryDevelopment,
    HomeProduct,
    SliderMember,
    Comment,
    Icon,
    Footer,
    HistoryDevelopment
},
}
</script>

<style scoped>

</style>
