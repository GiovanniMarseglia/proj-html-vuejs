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
<div class="container">
    <navhead :lsnav="list"/>

</div>

</template>



<style lang="scss" scoped>
.container{
    background-image: url(../../img/hero-image.png);
}
</style>
