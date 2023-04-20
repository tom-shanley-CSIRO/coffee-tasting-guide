<template>
  <div>
    <PageHeader title="coffee" />

    <div class="coffee-list">
      <el-row
        v-for="coffee in coffeeArray"
        :key="coffee.id"
        class="coffee-list-item"
        @click="pushCoffeeLogsView(coffee.name)"
      >
        <el-col class="coffee-col">
          <div class="coffee-roast-icon" v-if="coffee.roastType === 'Dark'">
            <img src="../assets/coffee-dark.svg" alt="coffee-bean" class="coffee-roast-icon" />
          </div>
          <div class="coffee-roast-icon" v-else-if="coffee.roastType === 'Medium-Dark'">
            <img
              src="../assets/coffee-medium-dark.svg"
              alt="coffee-bean"
              class="coffee-roast-icon"
            />
          </div>
          <div class="coffee-roast-icon" v-else-if="coffee.roastType === 'Light'">
            <img src="../assets/coffee-light.svg" alt="coffee-bean" />
          </div>
          <div class="coffee-roast-icon" v-else>
            <img src="../assets/coffee-medium.svg" alt="coffee-bean" />
          </div>
          <div class="coffee-item">
            <h1>{{ coffee.name }}</h1>
            <p>
              <span>{{ coffee.beanType }} - {{ coffee.beanOrigin }} - </span
              >{{ coffee.description }}
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<script setup>
import API from '../api'
import PageHeader from '../components/PageHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const coffeeArray = ref([])

const fetchCoffee = async () => {
  const res = await API.getCoffee()
  coffeeArray.value = res
  console.log(coffeeArray.value)
}
fetchCoffee()

function pushCoffeeLogsView(name) {
  router.push(`/coffee-logs/${name}`)
}
</script>
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<style lang="scss">
.coffee-roast-icon {
  width: 50px;
  margin: 5px;
}

.coffee-item {
  margin: 5px;
}

.coffee-list {
  margin: auto;
  width: fit-content;
  margin-top: 100px;
  .coffee-list-item {
    border-bottom: 1px solid #ffffff;
    :hover {
      background-color: #282828;
      border-radius: 30px;
      cursor: pointer;
    }
  }
}
.coffee-col {
  display: flex;
  align-items: center;
}
</style>
