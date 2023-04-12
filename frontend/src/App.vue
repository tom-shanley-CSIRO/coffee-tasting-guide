<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>


    <div class="wrapper">


      <nav>
        <router-view></router-view>
      </nav>
    </div>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
:root {
  --main-bg-color: rgb(30, 30, 30);
  --text-color: rgba(255, 255, 255, 1);
  --el-text-color-primary: rgba(255, 255, 255, 1);


  background-color: var(--main-bg-color);
  color: var(--text-color);
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
