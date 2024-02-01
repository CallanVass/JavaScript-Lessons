import React, { useState } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="nav-items">
          <a className="nav-item" href="#">Home</a>
          <div className="nav-item dropdown">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Dropdown</button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            )}
          </div>
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Search" aria-label="Search" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar