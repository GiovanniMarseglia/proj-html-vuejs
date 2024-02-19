
<script>
export default{
    props:{
        ["lsnav"]:Array
    },
data() {
    
    return {
        name:"navhead",
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
    <ul class="d-flex li list-unstyled gap-4 mb-0">
        <li v-for="element in lsnav">{{element}}</li>
    </ul>
    <button class="btn rounded-5 fw-bold">GET IN TOUCH NOW</button>
    </div>
</div>
</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;
    button{
        background-color: $yellowAvada;
        color: $whiteAvada;
    }

    figure{
        width: 200px;
    }

    li{
        color: $whiteAvada;
    }

</style>
