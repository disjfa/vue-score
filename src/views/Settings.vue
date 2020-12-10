<template>
  <div class="app settings bg-nephritis">
    <app-header>{{ $t('page.settings') }}</app-header>
    <div class="bg-silver flex-grow-1">
      <h3>{{ $t('settings.language') }}</h3>
      <div v-for="language in languages" :key="language" @click="setLanguage(language)">
        {{ $t(`language.${language}`) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  name: 'Settings',
  components: {
    AppHeader,
  },
  data() {
    return {
      languages: ['en'],
      locale: 'en',
    };
  },
  mounted() {
    this.languages = this.$i18n.availableLocales;
    this.locale = this.$i18n.locale;
  },
  methods: {
    setLanguage(lang: string) {
      this.$i18n.locale = lang;
      this.locale = this.$i18n.locale;
      window.localStorage.setItem('_locale', lang);
    },
  },
});
</script>

<style lang="scss">
.settings {
  display: flex;
  flex-direction: column;
}
</style>
