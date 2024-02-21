<script>
    export default {
        name:"seotemplate",
            data() {
                return {
                    

                }
            },        
    }
</script>



<template>
    <div class="container-fluid up px-0" id="are">
        <div class="container">
            <div class="d-flex flex-column gap-2 w-50 mx-auto pt-5">
                <h2 class="fw-bold text-center">Meet The New Agency SEO Template From The Avada Team</h2>
                <p class="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at perfer lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div class="row row-cols-md-4 row-cols-1  d-flex gap-3  justify-content-center">
                <div class="col d-flex flex-column p-3 align-items-center" style="background-color: white;">
                    <figure class="mb-0"> 
                        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffa737" d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
                    </figure>
                    <h2 class="text-center">Establish Goals</h2>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit cum iusto quibusdam ipsa facere laboriosam reprehender laboriosam reprehender</p>
                </div>
                <div class="col d-flex flex-column p-3 align-items-center" style="background-color: white;">
                    <figure class="mb-0"> 
                        <i class="bi bi-camera-video-fill"></i>
                    </figure>
                    <h2 class="text-center">Work With a Team</h2>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit cum iusto quibusdam ipsa facere laboriosam reprehender laboriosam reprehender</p>
                </div>
                <div class="a col d-flex flex-column p-3 align-items-center" style="background-color: white;">
                    <figure class="mb-0"> 
                        <i class="bi bi-droplet-fill"></i>
                    </figure>
                    <h2 class="text-center">Get Results</h2>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit cum iusto quibusdam ipsa facere laboriosam reprehender laboriosam reprehender</p>
                </div>
            </div>
            
        </div>
        <div class="down w-100 p-0 m-0">
        
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
    .up{
        background-color: $lgwhiteAvada;
        
        
        .row{
            margin-top: 100px;  
            figure{
                i{
                    color: $yellowAvada;
                    font-size: 30px;
                }
            }
            .svg{
                width: 30px;
                height: 40px;
            }

            .col{
                cursor: pointer;
                &:hover{
                    h2{
                        color: $yellowAvada!important;
                    }
                }
            }
        }
    }
    @media screen and (max-width:768px) {
        .down{
            background-image: url("../../img/agency-seo-desk-front-600x285.jpg");
            background-repeat: no-repeat;
            background-position: bottom;
            height: 300px;
        }
    }

    @media screen and (min-width:769px) {
        .down{
            background-image: url("../../img/agency-seo-desk-front.jpg");
            background-repeat: no-repeat;
            background-position: bottom;
            height: 800px;
        }
    }

    

</style>