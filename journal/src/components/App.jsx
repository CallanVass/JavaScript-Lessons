import React, { useState } from "react"
import Home from "./Home"
import CategorySelection from "./CategorySelection"
import NewEntry from "./NewEntry"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"

const App = () => {
    // State to hold array of categories
    const [categories] = useState(["Food", "Gaming", "Coding", "Other"])
    // State to hold an empty array
    const [entries, setEntries] = useState([])


    function addEntry(cat_id, content) {
        // 1. Create a entry object from user input
        const newEntry = {
            category: cat_id,
            content: content,
        }
        // 2. Add new entry to the entries list
        setEntries([...entries, newEntry])
    }

    return (
        <>
            {/* Browser Router for routing paths */}
            <BrowserRouter>
                {/* Navbar outside of Routes so it's always displayed across pages */}
                <NavBar />
                <Routes>
                    {/* Home path contained the home component*/}
                    <Route path="/" element={<Home />} />
                    {/* Catgegory path containing CategorySelection component and passing categories as a prop */}
                    <Route path="/category" element={<CategorySelection categories={categories} />} />
                    {/* Set all routes below /entry to have the /entry prefix */}
                    <Route path="/entry">
                        {/* New entry with cat_id and NewEntry component passing categories and addEntry as props */}
                        <Route path="new/:cat_id" element={<NewEntry categories={categories} addEntry={addEntry} />} />
                    </Route>
                    {/* Wildcard page that pages will default to if url is incorrect */}
                    <Route path="*" element={<h3>Page not found</h3>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

// Exporting App for use in other components
export default App