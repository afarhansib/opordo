<template>
  <main class="min-h-screen bg-gray-100 flex flex-col">
    <ScrollArea class="flex-1" />
    <MonitorPanel />
  </main>
</template>

<script setup>
import ScrollArea from './components/ScrollArea.vue';
import MonitorPanel from './components/MonitorPanel.vue';
</script>
