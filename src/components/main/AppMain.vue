<script>
    import SeoTemplate from "./SeoTemplate.vue"
    import Services from "./Services.vue" 
    import OurWork from "./OurWork.vue" 
    import Plans from "./Plans.vue" 
    import News from "./News.vue" 
    import Review from "./Review.vue"
    import OtherService from "./OtherService.vue"
    export default {
        components:{
            SeoTemplate,
            Services,
            OurWork,
            Plans,
            News,
            Review,
            OtherService,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<template>
    <SeoTemplate/>
    <Services/>
    <OurWork/>
    <Plans/>
    <News/>
    <Review/>
    <OtherService/>
</template>


<style lang="scss" scoped>

</style>