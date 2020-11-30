import Vuex, { StoreOptions } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { RootState } from '@/store/types';
import basic from './basic';

const store: StoreOptions<RootState> = {
  plugins: [createPersistedState()],
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    basic,
  },
};

export default new Vuex.Store<RootState>(store);
