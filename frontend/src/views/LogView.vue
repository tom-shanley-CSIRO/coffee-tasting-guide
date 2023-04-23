<template>
    <PageHeader title="log" />
    <button @click="handleEvent">Cli</button>

    <div class="log-view">
        <el-row class="row-log">
            <baseForm
                class="log-item"
                label="Aroma"
                @changed="(n) => (form.aroma_quantity = n)"
            ></baseForm>
            <baseForm
                class="log-item"
                label="Acidity"
                @changed="(n) => (form.aroma_quantity = n)"
            ></baseForm>
            <baseForm
                class="log-item"
                label="Sweetness"
                @changed="(n) => (form.aroma_quantity = n)"
            ></baseForm>
            <baseForm
                class="log-item"
                label="Body"
                @changed="(n) => (form.aroma_quantity = n)"
            ></baseForm>
            <baseForm
                class="log-item"
                label="Finish"
                @changed="(n) => (form.aroma_quantity = n)"
            ></baseForm>
        </el-row>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import baseForm from '../components/baseForm.vue'
import PageHeader from '../components/PageHeader.vue'
const form = ref({
    aroma_quantity: Number
})

function handleEvent() {
    console.log(form.value)
}
</script>
<style>
.log-view {
    margin: auto;
    width: 70%;
    display: flex;
}
.log-item {
    width: 18%;
}
.row-log {
    width: 100%;
}
</style>
