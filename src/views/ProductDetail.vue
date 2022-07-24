<template>
  <div>
     <Header></Header>
     <ProductDetailHead></ProductDetailHead>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import ProductDetailHead from '../components/WrapperProductDetail/ProductDetailHead.vue'
import Footer from '../components/layout/Footer.vue'
export default {
  components:{
    Header,
    ProductDetailHead,
    Footer
  }
}
</script>

<style>

</style>