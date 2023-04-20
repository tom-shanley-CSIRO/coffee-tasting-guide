<template>
  <div class="page-header">
    <el-icon :size="40" @click="goBack" class="header-icon"><Back /></el-icon>
    <h1 class="header-title">{{ props.title }}</h1>
  </div>
</template>

<script setup>
import { Back } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  title: String
})

function goBack() {
  router.go(-1)
}
</script>

<style>
.page-header {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: left;
  margin: 3px;
}
.header-title {
  margin: 0px auto;
  font-size: xx-large;
}
.header-icon:hover {
  cursor: pointer;
}
</style>
