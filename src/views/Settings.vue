<template>
  <div class="app settings bg-nephritis">
    <h1>{{ $t('page.settings') }}</h1>

    <div v-for="language in languages" :key="language" @click="setLanguage(language)">
      {{ $t(`language.${language}`) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import I

export default defineComponent({
  name: 'Home',
  data() {
    return {
      languages: ['en'],
    };
  },
  mounted() {
    this.languages = this.$i18n.availableLocales;
  },
  methods: {
    setLanguage(lang: string) {
      this.$i18n.locale = lang;
    },
  },
});
</script>
