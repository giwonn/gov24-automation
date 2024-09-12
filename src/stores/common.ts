import { create } from 'zustand'

interface CommonStore {
  theme: 'light' | 'dark'
  isDarkMode: () => boolean
  toggleTheme: () => void
}

export const useCommonStore = create<CommonStore>((set, get) => ({
  theme: 'dark',
  isDarkMode: () => get().theme === 'dark',
  toggleTheme: () =>
    set((state) => ({
      ...state,
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),
}))
