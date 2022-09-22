import create, { GetState, SetState } from 'zustand';
import { persist, StoreApiWithPersist } from 'zustand/middleware';

import { StoreState } from './types';

import {
  featuresSlice,
  interfaceSlice,
} from './slices';

// Store without persist
/* const useStore = create<StoreState>((set, get) => ({
  ...createInterfaceSlice(set, get),
})); */

export const useStore = create(persist<StoreState, SetState<StoreState>, GetState<StoreState>, StoreApiWithPersist<StoreState>>(
  (set, get) => ({
    ...interfaceSlice(set, get),
    ...featuresSlice(set, get),
  }), {
    name: 'zustand-state',
    // parts that will be synchronized in local storage
    partialize: ((state) => ({
      features: state.features,
    })),
  },
));

export default useStore;
