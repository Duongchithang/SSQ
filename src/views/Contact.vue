<template>
  <div>
    <Header></Header>
    <ContactInput></ContactInput>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import ContactInput from "../components/WrapperContact/ContactInput.vue"
import Footer from "../components/layout/Footer.vue"
export default {
   components:{
    Header,
    ContactInput,
    Footer,
}
}
</script>

<style scoped>

</style>