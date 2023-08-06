// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
}

// 3. extend the theme
const darkTheme = extendTheme({ config })

export { darkTheme }