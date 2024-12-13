import { create } from "zustand";
import { TypeTextRes } from "@/types/types";

interface AppState {
  prompt: string;
  summary: string;
  data: TypeTextRes[];
  setData: (data: TypeTextRes[]) => void;
  setPrompt: (prompt: string) => void;
  setSummary: (text: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const useStore = create<AppState>((set) => ({
  prompt: "",
  summary: "",
  data: [],
  setData: (data) => set(() => ({ data })),
  setSummary: (text) => set(() => ({ summary: text })),
  setPrompt: (prompt) => set(() => ({ prompt })),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useStore;
