<template>
  <div>
    <Game></Game>
    <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
      <div class="message">
        <span v-if="offlineReady"> App ready to work offline </span>
        <span v-else>
          New content available, click on reload button to update.
        </span>
      </div>
      <button v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
      <button @click="close">Close</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";
import Game from "./components/Game.vue";
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

async function close() {
  offlineReady.value = false;
  needRefresh.value = false;
}
</script>
