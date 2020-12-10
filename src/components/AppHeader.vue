<template>
  <div class="p-3">
    <h2 class="mb-0 text-wet-asphalt d-flex justify-content-between">
      <router-link :to="{name: 'Home'}">
        <i class="fa fa-fw fa-home"></i>
      </router-link>
      <slot>
        {{ $t('app.title') }}
      </slot>
    </h2>
  </div>
</template>
<script type="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>
