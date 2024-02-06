import React, { useState } from "react"
import { useParams } from "react-router-dom"

// Recieve categories and addEntry from App.jsx
const NewEntry = ({ categories, addEntry }) => {
    // Use useParams hook to eventually fetch categories params
    const params = useParams()
    // useState hook to set entry to an empty string
    const [entry, setEntry] = useState('')

    function createEntry(e) {
        // Stops browser refreshing (default activity for a button)
        e.preventDefault()
        // Create a new entry using addEntry from App.jsx and params (useParams)
        addEntry(params.cat_id, entry)
        // Clear input textarea after submission
        setEntry('')
    }

    return (
        <>
            <h3>New entry in category {categories[params.cat_id]}</h3>
            <form className="section" onSubmit={createEntry}>
                <div className="field">
                    <label className="label">Content</label>
                    <div className="control">
                        <textarea className="textarea" value={entry} onChange={e => setEntry(e.target.value)} placeholder="Type your journal entry here"></textarea>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Create Entry</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default NewEntry