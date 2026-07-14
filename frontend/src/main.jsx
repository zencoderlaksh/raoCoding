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

import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>,
);
