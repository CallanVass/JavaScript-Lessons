import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const navBarRef = useRef()

    function toggleHamburger(evt) {
        evt.target.classList.toggle("is-active")
        navBarRef.current.classList.toggle("is-active")
    }
  return (
    <nav class="navbar has-background-info-light" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link to="/">
        <h1>Journal</h1>
    </Link>
    <a role="button" onClick={toggleHamburger} class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" onClick={toggleHamburger} ref={navBarRef} class="navbar-menu">
    <div class="navbar-start">
      <Link to="/" class="navbar-item">Home</Link>
      <Link to="/category" class="navbar-item">Create Entry</Link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    
  )
}

export default NavBar