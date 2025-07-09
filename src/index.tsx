import { render } from 'react-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';

import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';

import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
