<script>
    import seotemplate from "./seotemplate.vue"
    import services from "./services.vue" 
    import ourwork from "./ourwork.vue" 
    import plans from "./plans.vue" 
    import news from "./news.vue" 
    import review from "./review.vue"
    import otherservice from "./otherservice.vue"
    export default {
        components:{
            seotemplate,
            services,
            ourwork,
            plans,
            news,
            review,
            otherservice,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<template>
    <seotemplate/>
    <services/>
    <ourwork/>
    <plans/>
    <news/>
    <review/>
    <otherservice/>
</template>


<style lang="scss" scoped>

</style>