<script>
    export default {
        name:"news",
        data() {
            return {
                
            }
        },    
    }
</script>




<template>
    <div class="container-fluid py-5">
        <div class="container d-flex flex-column align-items-center gap-5">
            <div class="d-flex flex-column gap-2 w-50 ">
                <h2 class="text-center">Our News</h2>
                <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi earum est esse eveniet pariatur distinctio temporibus aliquid obcaecati recusandae.</p>
            </div>
            <div class="row row-cols-md-3 row-cols-1 g-5 g-md-3">
                <div class="col d-flex flex-column">
                    <figure>
                        <img class="w-100" src="../../img/newsimg/blog1.jpg" alt="">
                    </figure>
                    <h3 class="text-center">Why you need A SEO Agency Now</h3>
                    <h6 class="text-center">November 1st,2017</h6>
                    <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cum assumenda voluptas earum deserunt veritatis tempora illo expedita, min</p>
                </div>


                <div class="col d-flex flex-column">
                    <figure>
                        <img class="w-100" src="../../img/newsimg/blog2.jpg" alt="">
                    </figure>
                    <h3 class="text-center">SEO Tips fpr Your Startup</h3>
                    <h6 class="text-center">November 1st,2017</h6>
                    <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cum assumenda voluptas earum deserunt veritatis tempora illo expedita, min</p>
                </div>


                <div class="col d-flex flex-column">
                    <figure>
                        <img class="w-100" src="../../img/newsimg/blog3.jpg" alt="">
                    </figure>
                    <h3 class="text-center">Image Optimization For Your Site</h3>
                    <h6 class="text-center">November 1st,2017</h6>
                    <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cum assumenda voluptas earum deserunt veritatis tempora illo expedita, min</p>
                </div>
            </div>
            <button class="btn rounded-5 px-3 pt-2 text-light">GO TO NEWS</button>
        </div>
        
    </div>
</template>


<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
        .container{
            h3{
                color: $yellowAvada;
            }
            button{
                background-color: $yellowAvada!important;
            }
        }

</style>