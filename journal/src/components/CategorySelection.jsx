import React from "react"
import { Link } from "react-router-dom"

// Recieve categories as a prop from App.jsx
const CategorySelection = ({ categories }) => {
    return (
        <>
            <h3>Please select a category:</h3>
            <ul>
                {
                    // Map over categories with two parameters, cat and index
                    categories.map((cat, index) => (
                        // Pass index as the key so React can keep track of them properly
                        <li key={index}>
                            {/* Create a Link using the /entry/new/ prefix with index on the end, then display cat for each one */}
                            <Link to={`/entry/new/${index}`}>{cat}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default CategorySelection