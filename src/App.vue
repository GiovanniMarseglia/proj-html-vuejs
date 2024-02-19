<script >
import jumbo from "./components/header/jumbo.vue";
import AppMain from "./components/main/AppMain.vue";
export default {
  components:{
    jumbo,
    AppMain,
        },

  data() {
       
        
    return {
    

    }

  },
}

</script>


<template>
<jumbo/>
<AppMain/>
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
