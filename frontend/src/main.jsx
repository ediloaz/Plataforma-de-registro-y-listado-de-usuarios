import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Helmet } from 'react-helmet';
import { Resources } from '@theme/Resources.jsx';

const { favicon, appName } = Resources();

createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <title>{appName}</title>
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <StrictMode>
      <App />
    </StrictMode>,
  </>
)
