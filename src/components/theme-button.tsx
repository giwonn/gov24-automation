'use client'

import { useTheme } from 'next-themes'
import DarkMode from '@/icons/dark-mode'
import LightMode from '@/icons/light-mode'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="w-10 h-10 bg-transparent rounded"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <LightMode /> : <DarkMode />}
    </button>
  )
}

export default ThemeButton
