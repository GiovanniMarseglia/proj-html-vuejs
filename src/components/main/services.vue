
<script>
    
    export default {
        name:"services",
        data() {
            return {
                
            }
        },
    }
</script>




<template>
    <div class="container-fluid pt-5">
        
        <div class="container d-flex flex-column gap-5">
            <div class="d-flex flex-column gap-1 mx-auto w-50 align-items-center mt-5">
                <h1 class="text-center">See Our Top Notch Services</h1>
                <p class="text-center">Sit amet consectetur adipisicing elit. Consectetur, tempora laboriosam quasi qui in inventore obcaecati molestiae enim nostrum, doloremque ullam ea cor</p>
            </div>


            <div class="row row-cols-5 g-2 mt-5 gap-4 d-flex justify-content-center">
                <div class="d-flex flex-column col px-2 py-5 align-items-center gap-2">
                    <i class="bi bi-google"></i>
                    <h3 class="text-center">Google SEO</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora vitae nihil in magnam cumque assumenda illum ut mo</p>
                    <a class="text-decoration-none" href="#">Read more &gt;</a>
                </div>

                <div class="d-flex flex-column col px-2 py-5 align-items-center gap-2">
                    <i class="bi bi-gear-fill"></i>
                    <h3 class="text-center">Brand Strategy</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora vitae nihil in magnam cumque assumenda illum ut mo</p>
                    <a class="text-decoration-none" href="#">Read more &gt;</a>
                </div>



                <div class="d-flex flex-column col px-2 py-5 align-items-center gap-2"> 
                    <i class="bi bi-building"></i>
                    <h3 class="text-center">Local SEO</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora vitae nihil in magnam cumque assumenda illum ut mo</p>
                    <a class="text-decoration-none" href="#">Read more &gt;</a>
                </div>



                <div class="d-flex flex-column col px-2 py-5 align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffa737" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
                    <h3 class="text-center">SEO Analysis</h3>
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempora vitae nihil in magnam cumque assumenda illum ut mo</p>
                    <a class="text-decoration-none" href="#">Read more &gt;</a>
                </div>
            
            </div>
        </div>
        
    </div>
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
    .container-fluid{
        background-color: #0D1C44;
        color: $whiteAvada;
        background-image: url("../../img/pattern_background.png");
        background-repeat: no-repeat;
        background-position: center;
        padding-bottom: 170px;
        i{
            color: $yellowAvada;
            font-size: 30px;
        }
        a{
            color: $yellowAvada;
        }
        .col{
            background-color: #0F2151;
            &:hover{
                cursor: pointer;
                background-color: $blueAvada;
                h3{
                    color: $yellowAvada;
                }
            }
        }
       

            svg{
            width: 30px;
           
            }

        
    }

</style>