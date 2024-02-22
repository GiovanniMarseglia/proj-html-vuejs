<script>
    import Consultation from "./Consultation.vue"
    import NavFooter from "./NavFooter.vue"
    import {store} from "../../store"
    export default {
        name:"AppFooter",
    components:{
        Consultation,
        NavFooter,
    },
    data() {
        return {
            store,
        }
    },
}
</script>



<template>
    <Consultation/>
    <NavFooter :lsnav="store.list"/>
</template>

<style lang="scss" scoped>

</style>