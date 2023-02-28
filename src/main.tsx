import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// Element 型としてアサーション
const root = createRoot(document.getElementById('root') as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
