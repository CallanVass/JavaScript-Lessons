import React from 'react'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                
                <Route path="/" element={<Home />}/>
                <Route path="/category" element={<CategorySelection />}/>
                {/* Nested route */}
                <Route path="/entry">
                    {/* route will be /entry/new */}
                    <Route path="new/:cat_id" element={<NewEntry />}/>
                </Route>
                <Route path="*" element={<h3>Page Not Found 404</h3>}/>
                
            </Routes>
        </BrowserRouter>
        {/* <Home />
        <CategorySelection />
        <NewEntry /> */}
    </>
  )
}

export default App