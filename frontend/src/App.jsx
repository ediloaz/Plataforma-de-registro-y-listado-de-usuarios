import { AlertMessageProvider } from '@components/AlertMessage/AlertMessage';
import { CustomThemeProvider } from './components/CustomThemeProvider/CustomThemeProvider';
import { Router } from './routes/Router';
import { LicenseInfo } from '@mui/x-data-grid-premium';
import { TansStankQueryProvider } from '@components/TanStackQueryProvider/TanStackQueryProvider';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

LicenseInfo.setLicenseKey(import.meta.env.VITE_API_MUIX_PREMIUM);

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
