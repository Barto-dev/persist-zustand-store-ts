import produce from 'immer';

import { StoreSlice, FeaturesType } from '../types';

const initialFeaturesState = {
  highlightTooltip: false,
};

/**
 * This slice is responsible for showing and render tooltips near new features
 */
export const createFeaturesSlice: StoreSlice<FeaturesType> = (set) => ({
  features: initialFeaturesState,
  toggleFeatureTooltip: (feature, flag) => {
    set(produce((prev) => {
      prev.features[feature] = flag;
    }));
  },
});

export default createFeaturesSlice;
