import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { darkTheme } from './theme/theme.ts'
import { Provider } from 'react-redux';
import { store } from './redux/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { EstateContextProvider } from './Context/EstateContext'
import { QueryClient, QueryCache, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//Tworzymy klienta z konfiguracją
const queryClient = new QueryClient({
    queryCache: new QueryCache(),
    defaultOptions: {
        queries: {
            cacheTime: 60 * 60 * 5,
            staleTime: 60_000,
            retry: 1,
        },
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}> {/* redux */}
            <QueryClientProvider client={queryClient}>
                {process.env.NODE_ENV === "development" && (
                    <ReactQueryDevtools position="top-left" initialIsOpen={false} />
                )}
                <EstateContextProvider>
                    <ChakraProvider theme={darkTheme}> {/* chakra */}
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </ChakraProvider>
                </EstateContextProvider>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode >
)
