<script setup>
import MainLogo from './assets/logos/MainLogo.vue'
import logos from './assets/logos/logos'
</script>

<template>
  <div>
    <header>
      <MainLogo />
      <h1>The <span class="text-highlight">Epic</span> Stack</h1>
      <p>Check the <a href="">Getting Started</a> guide file for how to get your project off the ground!</p>
    </header>
    <ul>
      <li v-for="logo in logos" :key="logo.href">
        <a :href="logo.href">
          <img :src="logo.src" :alt="logo.alt" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
