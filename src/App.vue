<template>
  <app-reload/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppReload from '@/components/AppReload.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppReload,
  },
});
</script>
