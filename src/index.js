import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './globalize.css';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
