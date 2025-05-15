import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './shared/state/store.js'; 
import App from './modules/App/App.jsx';
import './shared/styles/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

