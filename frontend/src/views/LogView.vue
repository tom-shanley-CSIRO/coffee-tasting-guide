<template >
    <Header title="log"/>
    <div class="log-view">
        <h1>log view</h1>
        <el-form :model="form">
            <el-form-item>
                <el-input/>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>
<style>
    
</style>