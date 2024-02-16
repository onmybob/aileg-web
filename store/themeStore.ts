import { create } from "zustand";

type State = {
  name: string;
};

type Action = {
  updateTheme: (name: string) => void;
};

const useThemeStore = create<State & Action>((set) => ({
  name: "",
  updateTheme: (themeName) => set(() => ({ name: themeName })),
}));

export default useThemeStore;
