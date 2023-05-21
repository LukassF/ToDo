import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './data/redux_store'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
