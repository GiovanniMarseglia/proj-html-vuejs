<script>
    export default {
        name:"consultation"
    }
</script>


<template>
    <div class="container-fluid px-0">
        <div class="op py-5">
        <div class="container d-flex flex-column mx-auto w-100 align-items-center gap-4">
            <h1 class="text-light text-center">Start Yout Free Consultation</h1>
            <p class="text-light text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolores corrupti, corporis sunt quas aperiam! Ab dignissimos doloremque, quod</p>
            <button class="btn rounded-5 px-4 py-2 text-light">CONTACT US NOW</button>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container-fluid{
    background-image: url("../../img/workimg/case1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .op{
    background-color: rgba(0, 0, 0, 0.521);
        button{
            background-color: $yellowAvada;
        }
}
}

</style>