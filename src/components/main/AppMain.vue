<script>
    import seotemplate from "./seotemplate.vue"
    import services from "./services.vue" 
    import ourwork from "./ourwork.vue" 
    import plans from "./plans.vue" 
    import news from "./news.vue" 
    export default {
        components:{
            seotemplate,
            services,
            ourwork,
            plans,
            news,
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
</template>


<style lang="scss" scoped>

</style>