import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import 'animate.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
//Paypal Credentials
const initialOptions = {
  clientId: import.meta.env.VITE_PAYPAL_SANDBOX_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
}

root.render(
  <PayPalScriptProvider options={initialOptions}>
    <Provider store={store}>
      <App />
    </Provider>
  </PayPalScriptProvider>,
)
