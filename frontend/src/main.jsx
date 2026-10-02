import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Intercept fetch requests to prepend the API URL for production
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  let [resource, config] = args;
  const apiUrl = import.meta.env.VITE_API_URL || '';
  if (typeof resource === 'string' && resource.startsWith('/api')) {
    resource = apiUrl + resource;
  }
  return originalFetch(resource, config);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
