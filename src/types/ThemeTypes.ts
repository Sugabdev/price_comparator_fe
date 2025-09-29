export type ThemeType = 'light' | 'dark'

export type ThemeContextType = {
    theme: ThemeType
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}