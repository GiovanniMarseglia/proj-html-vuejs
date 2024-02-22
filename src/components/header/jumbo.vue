<script >
import NavHead from "./NavHead.vue";
import {store} from "../../store"
export default {
    name:"Jumbo",
  components:{
    NavHead
        },

  data() {
    return {
    store,
    
    }

  },
}

</script>


<template>
<div class="container-fluid">
  <div class="container ">
    <NavHead :lsnav="store.list"/>
    <div class="jumboInfo d-flex flex-column gap-4 text-center text-md-start align-items-center align-items-md-start">
      <h1>SEM Campaigns Made Simple With Avada</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at eaque iusto nostrum exercitationem</p>
      <div class="d-flex flex-column flex-md-row gap-2 align-items-center">
        <button class="btn rounded-5 py-2 px-5 d-none d-md-block"><a href="#plan" class="text-light text-decoration-none">BUY AVADA NOW</a></button>
        <button class="btn rounded-5 px-5 d-md-none d-block"><a href="#plan" class="text-light text-decoration-none">BUY</a></button>
        <button class="btn rounded-5 w-100 py-2 d-md-none d-block">CONTACT</button>
        <button class="btn rounded-5 py-2 px-5 d-none d-md-block">CONTACT</button>
        
      </div>
    </div>
  </div>

</div>

</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container-fluid{
    background-image: url("../../img/hero-image.webp");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 1050px;
    .jumboInfo{
      margin-top: calc(50% / 2);
      h1{
        color: $whiteAvada;
      }
      p{
        color: $whiteAvada;
      }
      button{
        transition: 1s ease-in-out;
        
        &:first-of-type,&:nth-of-type(2){
          background-color: $yellowAvada;
          color: $whiteAvada;
        }
        
        &:last-of-type,&:nth-of-type(3){
          background-color: $azureAvada;
          color: $whiteAvada;
        }
        &:hover{
          transform: scale(1.1);
        }
      }
    }
}


@media screen and (max-width:769px){

  .container-fluid{
    
    background-position-x: center;
    height: 700px;
  }
  
}
</style>
