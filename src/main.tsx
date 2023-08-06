import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { darkTheme } from './theme/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={darkTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)
