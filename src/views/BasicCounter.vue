<template>
  <div class="app basic bg-nephritis">
    <app-header class="text-wet-asphalt">
      {{ $t('page.basicCounter') }}
    </app-header>
    <div class="basic-content bg-sunflower">
      <template v-if="players.length">
        <basic-row v-for="player in players" :key="player.id" :player="player"/>
      </template>
      <template v-else class="text-center">
        <div class="text-center">
          <button type="button" @click="addPlayer" class="btn btn-peter-river">
            <i class="fa fa-fw fa-user-plus"></i>
            {{ $t('button.addPlayer') }}
          </button>
        </div>
      </template>
    </div>
    <div class="p-3 d-flex justify-content-between">
      <div class="text-left">
        <div class="btn-group">
          <button type="button" @click="addPlayer" class="btn btn-peter-river">
            <i class="fa fa-fw fa-user-plus"></i>
            {{ $t('button.addPlayer') }}
          </button>
        </div>
      </div>
      <div class="text-right">
        <button type="button" @click="reset" class="btn btn-pomegranate">
          <i class="fa fa-fw fa-trash"></i>
          {{ $t('button.reset') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicRow from '@/views/basic/BasicRow.vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  name: 'BasicCounter',
  components: {
    BasicRow,
    AppHeader,
  },
  methods: {
    addPlayer() {
      this.$store.commit('basic/addPlayer');
    },
    reset() {
      this.$store.commit('basic/reset');
    },
  },
  computed: {
    players: (el) => el.$store.state.basic.players,
  },
});
</script>

<style lang="scss">
.basic {
  display: flex;
  flex-direction: column;
}

.basic-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  justify-content: space-evenly;
}
</style>
