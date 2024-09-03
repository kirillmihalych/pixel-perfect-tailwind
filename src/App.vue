<script setup>
import MainLogo from './assets/logos/MainLogo.vue'
import logos from './assets/logos/logos'

const cols = {
  1: 'xl:col-start-1',
  2: 'xl:col-start-2',
  3: 'xl:col-start-3',
  4: 'xl:col-start-4',
  5: 'xl:col-start-5',
}

const rows = {
  1: 'xl:row-start-1',
  2: 'xl:row-start-2',
  3: 'xl:row-start-3',
  4: 'xl:row-start-4',
  5: 'xl:row-start-5',
  6: 'xl:row-start-6',
}

const findClass = (classes) => classes
</script>

<template>
  <div class="container grid min-h-dvh place-items-center px-4 py-16">
    <div class="layout grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24">
      <header class="grid place-items-center text-center xl:order-2 xl:place-items-start xl:text-left">
        <MainLogo class="size-20" />
        <h1 class="text-4xl font-medium mt-4 sm:text-4.5xl sm:mt-6 md:text-5xl md:mt-8 lg:text-5.5xl">
          The <span class="text-highlight">Epic</span> Stack
        </h1>
        <p class="text-slate-600 mt-4 max-w-md sm:text-lg md:text-xl md:mt-6">
          Check the
          <a
            href="#"
            class="text-black underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-highlight"
            >Getting Started</a
          >
          guide file for how to get your project off the ground!
        </p>
      </header>
      <ul
        class="flex justify-center flex-wrap gap-2 max-w-3xl sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-7 xl:grid xl:grid-cols-5 xl:grid-rows-6 xl:grid-flow-col"
      >
        <li v-for="logo in logos" :key="logo.href" :class="findClass([cols[logo.column], rows[logo.row]])">
          <a
            :href="logo.href"
            class="grid size-20 place-items-center rounded-2xl p-4 bg-highlight/[7%] hover:bg-highlight/[10%] hover:-rotate-6 transition focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 sm:size-24"
          >
            <img :src="logo.src" :alt="logo.alt" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
