<template>
  <div class="home app bg-dark text-light">
    <app-header/>
    <router-link :to="{name: 'BasicCounter'}">BasicCounter</router-link>
    <router-link :to="{name: 'About'}">About</router-link>
    <router-link :to="{name: 'Settings'}">About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AppHeader,
  },
});
</script>
