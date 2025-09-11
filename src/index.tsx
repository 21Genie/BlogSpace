import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'app/providers/ThemeProviders';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'widgets/ErrorBoundary';
import { App } from './app/App';

import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const container = document.getElementById('root');

if (!container) throw new Error('Контейнер root не найден');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
