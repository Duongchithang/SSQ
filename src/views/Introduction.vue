<template>
  <div>
    <Header></Header>
     <IntroHead></IntroHead>
     <ValueIntro></ValueIntro>
     <SologanIntro></SologanIntro>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import IntroHead from '../components/wrapperIntro/IntroHead.vue'
import ValueIntro from "../components/wrapperIntro/ValueIntro.vue"
import SologanIntro from "../components/wrapperIntro/SologanIntro.vue"
export default {
   components:{
    Header,
    Footer,
    IntroHead,
    ValueIntro,
    SologanIntro
}
}
</script>

<style>

</style>