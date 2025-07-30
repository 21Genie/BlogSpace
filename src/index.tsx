import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProviders';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'widgets/ErrorBoundary';
import { App } from './app/App';

import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
