<script>
    export default {
        name:"plan",
        data() {
            return {
                
            }
        },
    }
</script>



<template>
    <div class="container-fluid py-5">
        <div class="container d-flex flex-column gap-4 ">
            <div class="mx-auto w-50">
                <h2 class="text-center text-light">Our Plans</h2>
                <p class="text-center text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eligendi tempore praesentium! Temporibus fugiat distinctio labo</p>
            </div>

            <div class="row row-cols-4 g-5 d-flex justify-content-center">
                <div class="col">
                    <div class="bg-light d-flex flex-column text-center gap-4 py-5 align-items-center">
                        <h3>Standard</h3>
                        <span class="fw-bold h1"><sup>$</sup>19<sup>99</sup><sub class="fs-6">monthly</sub></span>
                        <span>5 Projects</span>
                        <span>5 GB Storage</span>
                        <span>Unlimited User</span>
                        <button class="btn rounded-5 w-50">START TODAY</button>
                    </div>
                </div>


                <div class="col">
                    <div class="bg-light d-flex flex-column text-center gap-4 py-5 align-items-center">
                        <h3>Premium</h3>
                        <span class="fw-bold h1"><sup>$</sup>29<sup>99</sup><sub class="fs-6">monthly</sub></span>
                        <span>5 Projects</span>
                        <span>5 GB Storage</span>
                        <span>Unlimited User</span>
                        <button class="btn rounded-5 w-50">START TODAY</button>
                    </div>
                </div>



                <div class="col">
                    <div class="bg-light d-flex flex-column text-center gap-4 py-5 align-items-center">
                        <h3>Professional</h3>
                        <span class="fw-bold h1"><sup>$</sup>39<sup>99</sup><sub class="fs-6">monthly</sub></span>
                        <span>5 Projects</span>
                        <span>5 GB Storage</span>
                        <span>Unlimited User</span>
                        <button class="btn rounded-5 w-50">START TODAY</button>
                    </div>
                </div>



                <div class="col ">
                    <div class="bg-light d-flex flex-column text-center gap-4 py-5 align-items-center">
                    
                        <h3>Exstreme</h3>
                        <span class="fw-bold h1"><sup>$</sup>59<sup>99</sup><sub class="fs-6">monthly</sub></span>
                        <span>5 Projects</span>
                        <span>5 GB Storage</span>
                        <span>Unlimited User</span>
                        <button class="btn rounded-5 w-50">START TODAY</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

    .container-fluid{
        background-image: url("../../img/background1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        .container{
            background-color: rgba(245, 245, 220, 0);
            .row{
                button{
                    border: 1px solid $greyAvada;
                    color: $greyAvada;
                    &:hover{
                        color: white;
                        background-color: $yellowAvada;
                        border: 1px solid transparent;
                    }

                }
                .col{
                    .h1{
                        color: $azureAvada;
                        sub{
                            color: $greyAvada;
                        }
                    }
                    
                }
            }
        }
    }

</style>