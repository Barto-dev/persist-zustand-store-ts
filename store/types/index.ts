import { SetState, GetState } from 'zustand';

import { FeaturesType } from './featuresType';
import { InterfaceType } from './interfaceType';

export type StoreState =
  & InterfaceType
  & FeaturesType

export type StoreSlice<T> = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => T;

export type {
  FeaturesType,
  InterfaceType,
};
