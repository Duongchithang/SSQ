<template>
  <div>
    <span class="material-symbols-outlined icon-arrow">expand_less</span>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    var icon = document.querySelector('.icon-arrow');
    var Body = document.body.scrollHeight;
    console.log(Body);
   icon.onclick = function(){
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   window.onscroll = function(){
    console.log(window.scrollY);
    if(window.scrollY < 600){
        icon.style.display = 'none'
    }
    else{
        icon.style.display = 'block'
    }
   }
  }
}
</script>

<style>
.icon-arrow{
    position: fixed;
    bottom: 50px;
    z-index: 100;
    right: 30px;
    font-size: 30px;
    padding: 6px;
    border-radius: 100%;
    background: #57BB55;
    color: white;
    transition: all 0.2s linear;
    cursor: pointer;
}
.icon-arrow:hover{
    color: white;
    background: #00BED6;
}
</style>