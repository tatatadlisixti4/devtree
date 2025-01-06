import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Router from './router'
import './index.css'
const queryCLient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider
            client={queryCLient}
        >
            <Router />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </StrictMode>,
)
