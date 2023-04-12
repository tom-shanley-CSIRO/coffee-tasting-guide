<template>
    <el-page-header @back="goBack()">
        <template #content>
            <span class="text-large font-600 mr-3 text-color">{{ title }}</span>
        </template>
    </el-page-header>
</template>
  
<script>
export default {
    props: ["title"],
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}

</script>
  
<style>
.text-color {
    color: var(--text-color);
}
</style>