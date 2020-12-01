<template>
  <div class="app basic bg-nephritis">
    <div class="p-3 text-right">
      <h2 class="mb-0 text-wet-asphalt">{{ $t('page.basicCounter') }}</h2>
    </div>
    <div class="basic-content bg-sunflower">
      <basic-row v-for="player in players" :key="player.id" :player="player"/>
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
import BasicRow from './basic/BasicRow.vue';

export default defineComponent({
  name: 'BasicCounter',
  components: {
    BasicRow,
  },
  methods: {
    addPlayer() {
      this.$store.commit('basic/addPlayer');
    },
    reset() {
      this.$store.dispatch('basic/reset');
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
