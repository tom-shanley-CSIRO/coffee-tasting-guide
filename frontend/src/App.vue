<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <router-view></router-view>
    </nav>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
:root {
  --main-bg-color: rgb(30, 30, 30);
  --text-color: rgba(255, 255, 255, 1);
  --el-text-color-primary: rgba(255, 255, 255, 1);

  background-color: var(--main-bg-color);
  color: var(--text-color);

  --el-slider-main-bg-color: green;
}
body {
  font-family: 'Comfortaa', cursive;
  background-color: var(--main-bg-color);
  color: var(--text-color);
}

.override {
  background-color: var(--main-bg-color);
  color: var(--text-color);
}
</style>
