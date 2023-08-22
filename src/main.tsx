import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { darkTheme } from './theme/theme.ts'
import { Provider } from 'react-redux';
import { store } from './redux/index.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}> {/* redux */}

            <ChakraProvider theme={darkTheme}> {/* chakra */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
)
