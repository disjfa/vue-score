<template>
  <div v-if="updateExists" class="app-refresh bg-clouds text-center p-3 m-3 rounded border">
    {{ $t('reload.message')}}

    <a href="#" @click.prevent="refreshApp">
      {{ $t('reload.button')}}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppReload',
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
    };
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) {
        return;
      }

      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    updateAvailable(event) {
      this.registration = event.detail;
      this.updateExists = true;
    },
    refreshApp() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    },
  },
});
</script>

<style>
.app-refresh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
