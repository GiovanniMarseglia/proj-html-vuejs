
<script>
export default{
    props:{
        ["lsnav"]:Array
    },
data() {
    
    return {
        name:"navhead",
    }
},
}
</script>

<template>
 
<ul class="d-flex li list-unstyled gap-3">
    <li v-for="element in lsnav">{{element}}</li>
</ul>

</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

</style>
