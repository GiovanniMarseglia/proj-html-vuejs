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
  </div>

</div>

</template>



<style lang="scss" scoped>
.container-fluid{
    background-image: url("../../img/hero-image.png");
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    height: 1050px;
}
</style>
