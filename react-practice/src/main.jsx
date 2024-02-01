import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'
import SearchMaterial from './components/SearchMaterial.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <SearchMaterial />
  </React.StrictMode>,
)
