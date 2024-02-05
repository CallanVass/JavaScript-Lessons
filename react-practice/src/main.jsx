import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RedLight from './components/RedLight'
import OrangeLight from './components/OrangeLight'
import GreenLight from './components/GreenLight'
import Traffic from './components/Traffic'



ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <RedLight/>
    <OrangeLight/>
    <GreenLight/>
    <Traffic/>
    </>
)
