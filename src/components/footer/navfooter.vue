<script>
    export default {
        name:"navfooter",
        props:{
        ["lsnav"]:Array
    },
    }
</script>


<template>
    <div class="container-fluid py-5 d-flex align-items-center">
        <div class="container d-flex flex-column gap-5 align-items-center">
            <figure>
            <a href="#"><img class="w-100" src="../../img/logo_seo_2x.png" alt="logo"></a>
                
            </figure>

            <ul class="d-flex li list-unstyled gap-4 flex-column flex-md-row">
                <li class="text-center" v-for="element in lsnav"><a :href="`#${element.ref}`">{{ element.name }}</a></li>
            </ul>
            <div class="d-flex gap-3 flex-column flex-md-row">
                <a href="#" class="text-decoration-none text-center">Copyright 2012-2020 |</a>
                <a href="#" class="text-decoration-none text-center">Avada Theme by <span class="h5">ThemeFusion |</span></a>
                <a href="#" class="text-decoration-none text-center">All Rights Reserved | </a>
                <a href="#" class="text-decoration-none text-center">Powered by <span class="h5">Vue</span></a>
            </div>

            <div class="d-flex gap-md-5 gap-2">
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

figure{
    cursor: pointer;
    transition: 1s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
}

i{
    color:$greyAvada;
    font-size: 30px;
    cursor: pointer;
    transition: transform 1s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
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
    &:hover{
        color: black;
    }
    span{
        color: $blackAvada;
    }
}



</style>