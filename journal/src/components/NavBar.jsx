import React, { useRef } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    // UseRef stores data and doesn't trigger a re-render
    const navBarRef = useRef()

    // Create a function called toggleHamburger and pass it a parameter (event)
    function toggleHamburger(evt) {
        // Toggle is-active on the events class
        evt.target.classList.toggle("is-active")
        // Toggle is-active on the useRef state
        navBarRef.current.classList.toggle("is-active")
    }

    return (
        <nav className="navbar has-background-info-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    {/* Word on NavBar linked back to home */}
                    <h1>Journal</h1>
                </Link>
                {/* For the hamburger nav */}
                <a role="button" onClick={toggleHamburger} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            {/* Navbar links to Home and /categories */}
            <div id="navbarBasicExample" onClick={toggleHamburger} ref={navBarRef} className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <Link to="/category" className="navbar-item">
                        Create Entry
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar