<template>
  <div class="basic-row">
    <div class="basic-name p-2">
      <input type="text" placeholder="Player name" class="form-control"
             :value="player.name"
             @input="updateName"
      >
    </div>
    <div class="basic-actions">
      <div class="input-group p-2">
        <div class="input-group-prepend">
          <button type="button" class="btn btn-wet-asphalt">
            <i class="fa fa-fw fa-minus"></i>
          </button>
        </div>
        <input type="number" step="1" placeholder="0"
               class="form-control basic-score"
               :value="player.score"
               @input="updateScore"
        >
        <div class="input-group-append">
          <button type="button" class="btn btn-wet-asphalt">
            <i class="fa fa-fw fa-plus"></i>
          </button>
        </div>
      </div>
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
      this.$store.commit('basic/updateName', {
        id,
        name: value,
      });
    },
    updateScore(event: InputEvent) {
      const { value } = (event.target as HTMLInputElement);
      const { id } = (this.player as BasicCounterPlayer);
      this.$store.commit('basic/updateScore', {
        id,
        score: value,
      });
    },
  },
});
</script>

<style lang="scss">
.basic-row {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  justify-content: space-evenly;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.basic-score {
  text-align: right;
}

.basic-name {
  flex: 2;
}

.basic-actions {
  flex: 1;
}
</style>
