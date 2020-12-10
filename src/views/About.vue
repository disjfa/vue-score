<template>
  <div class="app about bg-midnight-blue">
    <app-header>{{ $t('page.about') }}</app-header>
    <div class="bg-asbestos flex-grow-1">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  name: 'BasicCounter',
  components: {
    AppHeader,
  },
});
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
}
</style>
