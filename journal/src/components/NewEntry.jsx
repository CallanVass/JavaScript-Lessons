import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const NewEntry = ({ categories, setEntries, entries }) => {
    const params = useParams()
    const [entry, setEntry] = useState("")

    function createEntry(e) {
        e.preventDefault()
        // Create a new entry
        // 1. Create a entry object from the user input
        const newEntry = {
            category: params.cat_id,
            content: entry
        }
        // 2. Add new entry to the entries list
        setEntries([...entries, newEntry])
    }
  return (
    <>
        <h3>New entry in category {categories[params.cat_id]}</h3>
        <form className="writing-form" onSubmit={createEntry}>
            <b>Content</b>
            <textarea className="textarea is-primary" value={entry} onChange={e => setEntry(e.target.value)} placeholder="Write your innermost thoughts her, Goose..."></textarea>
            <button className="button is-dark journal-submit">Create Entry</button>
        </form>
    </>
  )
}

export default NewEntry