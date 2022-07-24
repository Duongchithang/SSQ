<template>
  <div>
    <div class="wrapper-contact">
        <div class="container-contact" style="overflow-x: hidden">
            <h1 data-aos="fade-right" data-aos-duration="2000"><span class="contact-head-one">Love to hear from you</span><span class="contact-head-two">Get in touch</span><i class="fa-solid fa-hand-peace"></i></h1>
            <div class="list-input" data-aos="fade-left" data-aos-duration="2000">
                <div class="item-input">
                    <label for="username">Your name</label>
                    <input type="text" id="username" placeholder="Full your name" v-model="check.username">
                    <span class="check-validate">{{errors.username}}</span>
                </div>
                <div class="item-input">
                    <label for="Email">Your email</label>
                    <input type="email" id="Email" placeholder="Your email address" v-model="check.email">
                    <span class="check-validate">{{errors.email}}</span>
                </div>
                 <div class="item-input">
                    <label for="TypeSite">Type of site</label>
                    <select name="" id="TypeSite">
                        <option selected value="Fashion">Fashion</option>
                        <option value="value">Value</option>
                    </select>
                </div>
                <div class="item-input">
                    <label for="Field">Field</label>
                    <select name="" id="Field">
                        <option selected value="Fashion">Fashion</option>
                        <option value="value">Value</option>
                    </select>
                </div>
            </div>
            <div class="around-input-text"  data-aos="fade-left" data-aos-duration="2000">
                <label for="">Message</label>
                <textarea name="" id="area" cols="" rows="" placeholder="Let us know your question" v-model="check.message"></textarea>
                <span class="check-validate">{{errors.message}}</span>
            </div>
            <div @click="save" class="btn-send"  data-aos="fade-left" data-aos-duration="2000">Send</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      check:{
        username : '',
      email :'',
      message : ''
      },
      errors:{
         username : '',
      email :'',
      message : ''
      }
    }
  },
  mounted(){
    
  },
  methods:{
    validate(){
      this.errors = {
            username : '',
           email :'',
            message : ''
      }
      if(this.check.username == ""){
        this.errors.username = 'Username is required'
      }
      if(this.check.email == ""){
        this.errors.email = 'Email is required'
      }
      if(this.check.message ==""){
       this.errors.message = 'message is required'
      }
      
    },
 
    save(){
      this.validate();
      console.log(this.check);
    }
  }
}
</script>

<style scoped>
  .container-contact{
    margin: 100px 100px 100px 100px;
  }
  h1{
    font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
/* or 121% */

letter-spacing: 0.374px;

color: #000000;
  }
  .contact-head-one{
    display: block;
    margin-bottom: 5px;
  }
  .contact-head-two{
    margin-right: 5px;
  }
  h1 i{
    color: #FDD030;
  }
  .list-input{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 50px;
    row-gap: 20px;
  }
  .item-input{
    display: flex;
    flex-direction: column;
  }
  label{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
  }
  select{
    margin-top: 5px;
    padding: 13px 20px;
    outline: none;
    border-radius: 10px;
  }
  option{
    padding: 13px 20px;
  }
  input{
    outline: none;
    border: none;
    background: #F2F2F2;
    padding: 13px 20px;
    border-radius: 10px;
    margin-top: 5px;
    font-size: 18px;
  }
  .around-input-text{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
   #area{
    outline: none;
    background: #F2F2F2;
    border-radius: 10px;
    padding: 13px 20px;
    margin-top: 5px;
    height: 200px;
   }
   .btn-send{
    margin-top:30px;
    padding: 13px 20px;
    background: #1C1C1E;
    border-radius: 10px;
    color : white;
    text-align: center;
   }
   .check-validate{
    margin-top: 5px;
    color: #E12A2A;
   }
  
   @media screen and (max-width:850px){
    .container-contact{
      margin: 100px 50px;
    }
   }
    @media screen and (max-width:450px){
      .container-contact{
        margin: 100px 20px;
      }
      .list-input{
        grid-template-columns: 1fr;
        margin-top: 30px;
      }
      option{
        width: 100%;
      }
      #area{
        height: 100px;
      }
   }
</style>