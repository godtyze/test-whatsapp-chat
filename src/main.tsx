import { setupListeners } from '@reduxjs/toolkit/query';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from 'store';

const store = setupStore();

setupListeners(store.dispatch);

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
