import { create } from "zustand";

type ModalState = {
  isSignupModalOpen: boolean;
  handleSignup: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isSignupModalOpen: false,
  handleSignup: () =>
    set((state) => ({ isSignupModalOpen: !state.isSignupModalOpen })),
}));
