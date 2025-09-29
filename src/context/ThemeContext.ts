import { createContext } from 'react'
import type { ThemeContextType } from '../types/ThemeTypes'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)