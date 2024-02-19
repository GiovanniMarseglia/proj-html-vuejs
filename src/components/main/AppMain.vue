<script>
    import seotemplate from "./seotemplate.vue"
    import services from "./services.vue" 
    import ourwork from "./ourwork.vue" 
    import news from "./news.vue" 
    export default {
        components:{
            seotemplate,
            services,
            ourwork,
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
    <news/>
</template>


<style lang="scss" scoped>

</style>