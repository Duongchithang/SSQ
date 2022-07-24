<template>
  <div>
    <Header></Header>
    <ProductHeading></ProductHeading>
    <ProductContainer></ProductContainer>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue"
import ProductHeading from "../components/WrapperProduct/ProductHeading.vue"
import ProductContainer from '../components/WrapperProduct/ProductContainer.vue'
import Footer from  "../components/layout/Footer.vue"
export default {
  components:{
    Header,
    ProductHeading,
    ProductContainer,
    Footer
  }
}
</script>

<style>

</style>