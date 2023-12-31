import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './componets/redux/store';
// import { store } from './componets/redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provider tag used to make store globaly accessible */}
<Provider store={store}>
      <App />
  
</Provider>  
</React.StrictMode>
);

