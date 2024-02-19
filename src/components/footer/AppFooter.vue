<script>
    import consultation from "./consultation.vue"
    import navfooter from "./navfooter.vue"
    import {store} from "../../store"
    export default {
        name:"AppFooter",
    components:{
        consultation,
        navfooter,
    },
    data() {
        return {
            store,
        }
    },
}
</script>



<template>
    <consultation/>
    <navfooter :lsnav="store.list"/>
</template>

<style lang="scss" scoped>

</style>