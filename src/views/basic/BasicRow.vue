<template>
  <div class="basic-row">
    <div class="basic-name p-3">
      <input type="text" placeholder="Player name" class="form-control form-control-lg"
             :value="player.name"
             @input="updateName"
      >
    </div>
    <div class="btn-group p-3">
      <button type="button" class="btn btn-lg btn-primary">-</button>
      <div class="score btn btn-lg btn-outline-primary disabled">
        0
      </div>
      <button type="button" class="btn btn-lg btn-primary">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BasicCounterPlayer } from '@/store/types';

export default defineComponent({
  name: 'BasicRow',
  props: {
    player: Object,
  },
  methods: {
    updateName(event: InputEvent) {
      const { value } = (event.target as HTMLInputElement);
      const { id } = (this.player as BasicCounterPlayer);
      this.$store.dispatch('basic/updateName', {
        id,
        name: value,
      });
    },
  },
});
</script>

<style lang="scss">
.basic-row {
  display: flex;
width: 100%;
  max-width: 960px;
  justify-content: space-evenly;
  margin: 0 auto;
}
.basic-name {
  flex: 1;
}
</style>
