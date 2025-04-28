import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from "./components/ContextApi.jsx"
import { store } from './store';
import { Provider } from 'react-redux'
import firebaseConfig from './firebase.config.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>            {/* For context API purpose */}
      <App />
    </ContextApi>
  </Provider>
);
