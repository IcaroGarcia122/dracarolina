import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// Seamless hydration when initial pre-rendered HTML is present (SSR/SSG),
// with clean fallback to createRoot for fresh client rendering.
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
