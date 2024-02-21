<script>
    export default {
        name:"ourwork",
        data() {
            return {
                
            }
        },       
    }
</script>




<template>
    <div class="container-fluid">
        <div class="container d-flex flex-column gap-4 align-items-center">
            <div class=" w-50 pt-5">
                <h2 class="text-center">Our Work</h2>
                <p class="text-center">Sit amet consectetur adipisicing elit. Non minus vero debitis voluptas, asperiores ipsum eum adipisci</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-2 gx-4 pt-5 d-flex justify-content-center">
                <div class="col position-relative">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case1.jpg" alt="">
                    </figure>
                    <div class="linkd d-none top-0 position-absolute align-items-center justify-content-center">
                        <a href="#" class="text-light h1"><i class="bi bi-link"></i></a>
                    </div>
                </div>

                <div class="col position-relative">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case2.jpg" alt="">
                    </figure>
                    <div class="linkd d-none top-0 position-absolute align-items-center justify-content-center">
                        <a href="#" class="text-light h1"><i class="bi bi-link"></i></a>
                    </div>
                </div>


                <div class="col position-relative">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case3.jpg" alt="">
                    </figure>
                    <div class="linkd d-none top-0 position-absolute align-items-center justify-content-center">
                        <a href="#" class="text-light h1"><i class="bi bi-link"></i></a>
                    </div>
                </div>


                <div class="col position-relative">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case4.jpg" alt="">
                    </figure>
                    <div class="linkd d-none top-0 position-absolute align-items-center justify-content-center">
                        <a href="#" class="text-light h1"><i class="bi bi-link"></i></a>
                    </div>
                </div>


                <div class="col position-relative">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case5.jpg" alt="">
                    </figure>
                    <div class="linkd d-none top-0 position-absolute align-items-center justify-content-center">
                        <a href="#" class="text-light h1"><i class="bi bi-link"></i></a>
                    </div>
                </div>


                <div class="col position-relative">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case6.jpg" alt="">
                    </figure>
                    <div class="linkd d-none top-0 position-absolute align-items-center justify-content-center">
                        <a href="#" class="text-light h1"><i class="bi bi-link"></i></a>
                    </div>
                </div>

                
            </div>
            <button class="btn rounded-5 text-light px-2 px-md-5 py-2">VIEW OUR WORK</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use "../../styles/partials/variables" as *;
    .container-fluid{
        padding-bottom: 100px;
        .col{
           
            &:hover{
                
                .linkd{
               
                background-color: #627AFE;
                background: linear-gradient(#627AFE 0%,#92A2F9 50%,#E2E5EF 100%);
                display: flex!important;
                width: calc(100% - 24px);
                height: calc(100% - 16px);
                cursor: pointer;
                a{
                    rotate: 45deg;
                }

                
            }
                }
            
           
        }
        figure{
            width: 100%;
        }
        button{
            
        background-color: $yellowAvada!important;    
        color: $whiteAvada!important;
        transition: 1s ease-in-out;
        &:hover{
            transform: scale(1.2);
        }
    
        }

    }

</style>