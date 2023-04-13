<script setup>
import ScrollArea from './components/ScrollArea.vue';
import MonitorPanel from './components/MonitorPanel.vue';
import { useAppStore } from './stores/AppStore';

const app = useAppStore()
</script>

<template>
  <main class="overflow-hidden h-screen bg-green-100 grid grid-rows-[auto_416px]">
    <ScrollArea :app="app" class="order-last" />
    <MonitorPanel :app="app" class=""/>
  </main>
</template>

