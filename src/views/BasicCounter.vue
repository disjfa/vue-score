<template>
  <div class="app basic">
    <div class="p-3 text-right">
      <h1 class="mb-0">Basic counter</h1>
    </div>
    <div class="basic-content ">
      <basic-row v-for="player in players" :key="player.id" :player="player"/>
    </div>
    <div class="p-3 d-flex justify-content-between">
      <div class="text-left">
        <div class="btn-group">
          <button type="button" @click="addPlayer" class="btn btn-secondary">
            Add player
          </button>
          <button type="button" @click="addPlayer" class="btn btn-secondary">
            Add player
          </button>
        </div>
      </div>
      <div class="text-right">
        <button type="button" @click="reset" class="btn btn-danger">
          Reset
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
      this.$store.dispatch('basic/addPlayer');
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
  background: yellow;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  justify-content: space-evenly;
}
</style>
