<script>
import Header from '../components/Header.vue';
import { Document } from '@element-plus/icons-vue'
import coffeeBean from '../assets/coffee-bean-icon.svg'
export default {
  components: {
    Header,
    Document
  },
  methods: {
    pushCoffee() {
      this.$router.push('/coffee')
    },
    pushLog() {
      this.$router.push('/log')
    }
  }
}
</script>

<template>
  <main>
    <h1 id="title">coffee.log( )</h1>
    <el-row class="menu-buttons">
      <el-button style="height: 4em; width: 4em;" color="rgb(217, 217, 217)" @click="pushCoffee">
        <img src="../assets/coffee-bean-icon.svg" alt="Coffee Bean" class="button-icon">
      </el-button>
      <el-button style="height: 4em; width: 4em;" color="rgb(217, 217, 217)" @click="pushLog" class="menu-button">
        <el-icon style="width: 20px;">
          <Document class="button-icon" style="width:52em;" />
        </el-icon>
      </el-button>
    </el-row>
  </main>
</template>

<style>
#title {
  text-align: center;
}

.menu-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.menu-button {
  width: 40px;
  height: 40em;
}

.button-icon {
  height: 1em;
}
</style>
