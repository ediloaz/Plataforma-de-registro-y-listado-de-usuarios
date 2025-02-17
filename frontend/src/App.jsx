import { AlertMessageProvider } from '@components/AlertMessage/AlertMessage';
import { CustomThemeProvider } from './components/CustomThemeProvider/CustomThemeProvider';
import { Router } from './routes/Router';
import { TansStankQueryProvider } from '@components/TanStackQueryProvider/TanStackQueryProvider';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <CustomThemeProvider>
      <ErrorBoundary>
        <TansStankQueryProvider>
          <AlertMessageProvider>
            <Router />
          </AlertMessageProvider>
        </TansStankQueryProvider>
      </ErrorBoundary>
    </CustomThemeProvider>
  );
}

export default App
