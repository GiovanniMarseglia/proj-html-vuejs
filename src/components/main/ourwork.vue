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
            <div class="row row-cols-3 g-1 pt-5 d-flex justify-content-center">
                <div class="col">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case1.jpg" alt="">
                    </figure>
                </div>

                <div class="col">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case2.jpg" alt="">
                    </figure>
                </div>


                <div class="col">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case3.jpg" alt="">
                    </figure>
                </div>


                <div class="col">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case4.jpg" alt="">
                    </figure>
                </div>


                <div class="col">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case5.jpg" alt="">
                    </figure>
                </div>


                <div class="col">
                    <figure>
                        <img class="w-100" src="../../img/workimg/case6.jpg" alt="">
                    </figure>
                </div>

                
            </div>
            <button class="btn rounded-5 text-light px-5 py-2">VIEW OUR WORK</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use "../../styles/partials/variables" as *;
    .container-fluid{
        padding-bottom: 100px;
        figure{
            width: 100%;
        }
        button{
            
        background-color: $yellowAvada!important;    
        color: $whiteAvada!important;
    
        }
    }

</style>