import { StoreSlice, InterfaceType } from '../types';

export const createInterfaceSlice: StoreSlice<InterfaceType> = (set) => ({
  showInviteUser: false,
  showSubscriptionModal: false,
  toggleShowInviteUser: (toggle: boolean) => {
    set(() => ({ showInviteUser: toggle }));
  },
  toggleShowSubscriptionModal: (toggle: boolean) => {
    set(() => ({ showSubscriptionModal: toggle }));
  },
});

export default createInterfaceSlice;
