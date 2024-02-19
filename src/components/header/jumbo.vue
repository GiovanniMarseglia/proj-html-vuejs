<script >
import navhead from "./navhead.vue";

export default {
    name:"jumbo",
  components:{
    navhead
        },

  data() {
    return {
    list:[
      "Home",
      "Who We Are",
      "What We do",
      "Where We Worker",
      "Careers",
      "News"
    ] 
    }

  },
}

</script>


<template>
<div class="container-fluid">
  <div class="container">
    <navhead :lsnav="list"/>
    <div class="jumboInfo d-flex flex-column gap-4 w-50">
      <h1>SEM Capmpaigns Made Simple With Avada</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at eaque iusto nostrum exercitationem</p>
      <div class="d-flex gap-2">
        <button class="btn rounded-5 py-2 px-5">BUY AVADA NOW</button>
        <button class="btn rounded-5 py-2 px-5">CONTACT US</button>
        
      </div>
    </div>
  </div>

</div>

</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container-fluid{
    background-image: url("../../img/hero-image.png");
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
        &:first-of-type{
          background-color: $yellowAvada;
          color: $whiteAvada;
        }
        &:last-of-type{
          background-color: $azureAvada;
          color: $whiteAvada;
        }
      }
    }
}
</style>
