<template>
  <div>
    <PageHeader title="Coffee Logs" />

    <h1>Coffee Logs View</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import { ref } from 'vue'

const route = useRoute()
const name = ref(route.params.coffee)
</script>
<style></style>
