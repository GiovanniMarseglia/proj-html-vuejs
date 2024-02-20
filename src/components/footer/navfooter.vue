<script>
    export default {
        name:"navfooter",
        props:{
        ["lsnav"]:Array
    },
    }
</script>


<template>
    <div class="container-fluid py-5">
        <div class="container d-flex flex-column gap-5 w-50 align-items-center">
            <figure>
                <img src="../../img/logo_seo_2x.png" alt="logo">
            </figure>

            <ul class="d-flex li list-unstyled gap-4">
                <li v-for="element in lsnav">{{ element }}</li>
            </ul>
            <div class="d-flex gap-3">
                <a href="#" class="text-decoration-none">Copyright 2012-2020 |</a>
                <a href="#" class="text-decoration-none">Avada Theme by <span class="h5">ThemeFusion</span> | </a>
                <a href="#" class="text-decoration-none">All Rights Reserved | </a>
                <a href="#" class="text-decoration-none">Powered by <span class="h5">Vue</span></a>
            </div>

            <div class="d-flex gap-5">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-youtube"></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
i{
    color:$greyAvada;
    font-size: 30px;
}

ul{
    li{
        &:hover{
            color:$yellowAvada;
            cursor: pointer;
        }
    }
}

a{
    color: $greyAvada;
    span{
        color: $blackAvada;
    }
}



</style>