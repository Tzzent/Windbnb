import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StaysProvider from './context/StaysContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StaysProvider>
      <App />
    </StaysProvider>
  </React.StrictMode>,
)
