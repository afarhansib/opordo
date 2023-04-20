<script setup>
import apexchart from "vue3-apexcharts"
const papa = defineProps(['app'])

papa.app.seriesCandle[0].data = [{
  x: new Date(1538778600000),
  y: [10, 10, 13, 13]
},
{
  x: new Date(1538780400000),
  y: [12, 12, 10, 10]
},
{
  x: new Date(1538782200000),
  y: [11, 11, 16, 16]
},
{
  x: new Date(1538783000000),
  y: [14, 14, 8, 8]
}]


</script>

<template>
  <div class="bg-white m-4 p-3 rounded-xl flex flex-col">
    <div class="flex justify-between">
      <div class="flex items-center gap-2 ml-1">
        <img class="w-8" src="../assets/logo.svg" alt="opordo-logo" />
        <h1 class="font-bold text-xl">Opordo</h1>
      </div>
      <div class="flex items-center gap-3">
        <p class=text-lg>Y:<span class="font-bold">{{ app.scrollPos }}</span></p>
        <!-- <button class="font-bold w-10 h-10 bg-green-100 rounded">☰</button> -->
        <button @click="app.resetPoint" class="font-bold px-3 h-10 bg-green-100 rounded">reset</button>
      </div>
    </div>
    <div class="p-4 bg-slate-100 mt-3 rounded-xl flex-1" v-if="false">
      <div class="w-full h-full">
        <apexchart width="100%" height="100%" type="candlestick" :options="app.chartOptionsCandle"
          :series="app.seriesCandle">
        </apexchart>
      </div>
    </div>
    <div class="p-4 bg-slate-100 mt-3 rounded-xl flex-1" v-if="false">
      <div class="w-full h-full">
        <apexchart width="100%" height="100%" type="line" :options="app.chartOptions" :series="app.series"></apexchart>
      </div>
    </div>
    <div class="p-4 bg-slate-100 mt-3 rounded-xl flex-1" v-if="true">
      <div class="w-full h-full">
        <apexchart width="100%" height="100%" type="bar" :options="app.chartOptions" :series="app.series"></apexchart>
      </div>
    </div>
  </div>
</template>
