<script>
export default{
    props:{
        ["lsnav"]:Array
    },
    name:"navhead",
data() {
    
    return {
        
    }
},
}
</script>

<template>
<div class="d-flex justify-content-between pt-3">
    <figure class="mb-0">
        <img class="w-100 " src="../../img/logo_seo_w_2x.png" alt="logo">
    </figure>

    <div class="d-flex gap-3 align-items-center">
    <ul class="d-md-flex d-none li list-unstyled gap-2 gap-lg-4 mb-0 text-center">
        <li v-for="element in lsnav">{{element}}</li>
    </ul>
    <button class="btn rounded-5 fs-6 fw-bold d-none d-sm-block">GET IN TOUCH NOW</button>
    <button class="btn rounded-5 fs-6 fw-bold py-0 px-1 d-sm-none">CONTACT</button>
    </div>
</div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

    
    button{
        background-color: $yellowAvada!important;    
        color: $whiteAvada!important;
        font-size: 12px!important;
        &:hover{
          scale: 110%;
        }
    }
    
       
    figure{
        width: 200px;
    }

    li{
        color: $whiteAvada;
        user-select: none;
        &:hover{
            color: $yellowAvada;
            cursor: pointer;
        }
    }

</style>
