<script >
import jumbo from "./components/header/jumbo.vue";
import AppMain from "./components/main/AppMain.vue";
import AppFooter from "./components/footer/AppFooter.vue";

export default {
  components:{
    jumbo,
    AppMain,
    AppFooter,
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
<AppFooter/>
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
