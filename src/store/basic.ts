import { Module } from 'vuex';
import { v4 } from 'uuid';
import { BasicCounterPlayer, BasicCounterState, RootState } from './types';

const baseState: BasicCounterState = {
  players: [],
};

const basic: Module<BasicCounterState, RootState> = {
  namespaced: true,
  state: baseState,
  mutations: {
    reset(state) {
      state.players = [];
    },
    updateName({ players }, userData) {
      const { id, name } = userData;
      const player = players.find((p: BasicCounterPlayer) => p.id === id) as BasicCounterPlayer;
      player.name = name;
    },
    addPlayer({ players }) {
      players.push({
        id: v4(),
        name: '',
        score: 0,
      });
    },
  },
  actions: {
    addPlayer({ commit }) {
      commit('addPlayer');
    },
    updateName({ commit }, userData) {
      commit('updateName', userData);
    },
    reset({ commit }) {
      commit('reset');
      commit('addPlayer');
    },
  },
};

export default basic;
