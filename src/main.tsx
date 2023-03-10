import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './componets/layout/layout'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </React.StrictMode>,
)
