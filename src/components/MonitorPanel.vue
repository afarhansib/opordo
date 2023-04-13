<script setup>
defineProps(['app'])
</script>

<template>
  <div class="bg-white m-4 p-3 rounded-xl flex flex-col">
    <div class="flex justify-between">
      <div class="flex items-center gap-2 ml-1">
        <img class="w-8" src="../assets/logo.svg" alt="opordo-logo" />
        <h1 class="font-bold text-xl">opordo</h1>
      </div>
      <div class="flex items-center gap-3">
        <p class=text-lg>scroll at: <span class="font-bold">{{ app.scrollPos }}</span></p>
        <button class="font-bold w-10 h-10 bg-green-100 rounded">☰</button>
      </div>
    </div>
    <div class="bg-slate-100 mt-3 rounded-xl flex-1 grid place-items-center">
    </div>
  </div>
</template>
