<template>
  <div>
    <Header title="coffee" />

    <h1>coffee</h1>

    <el-col v-for="coffee in coffeeArray" :key="coffee.id">
      <el-row>
        <h1>{{ coffee.name }}</h1>
        <p>
          <span>{{ coffee.beanType }}</span
          >{{ coffee.description }}
        </p>
      </el-row>
    </el-col>
  </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<script setup>
import API from '../api'
import Header from '../components/Header.vue'
import { ref } from 'vue'

const coffeeArray = ref([])

const fetchCoffee = async () => {
  const res = await API.getCoffee()
  coffeeArray.value = res
  console.log(coffeeArray.value)
}
fetchCoffee()
</script>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<style></style>
