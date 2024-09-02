<script setup>
import MainLogo from './assets/logos/MainLogo.vue'
import logos from './assets/logos/logos'
</script>

<template>
  <div class="container grid min-h-dvh place-items-center px-4 py-16">
    <div class="layout grid place-items-center gap-12">
      <header class="flex flex-col gap-4 items-center text-center">
        <!-- <header class="grid place-items-center gap-4 text-center"> -->
        <MainLogo class="size-20" />
        <h1 class="text-4xl font-medium">The <span class="text-highlight">Epic</span> Stack</h1>
        <p class="text-slate-600 max-w-md">
          Check the <a href="#" class="text-black underline">Getting Started</a> guide file for how to get your project
          off the ground!
        </p>
      </header>
      <ul class="grid grid-cols-3 justify-items-center gap-2 max-w-3xl">
        <li v-for="logo in logos" :key="logo.href">
          <a :href="logo.href" class="grid place-content-center size-20 p-4 rounded-2xl bg-highlight bg-opacity-[0.07]">
            <img :src="logo.src" :alt="logo.alt" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
