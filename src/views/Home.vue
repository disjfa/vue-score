<template>
  <div class="home">
    <h1>{{ $t('app.title') }}</h1>
    <router-link :to="{name: 'BasicCounter'}">BasicCounter</router-link>
    <router-link :to="{name: 'About'}">About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
