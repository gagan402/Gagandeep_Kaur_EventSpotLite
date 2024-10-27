import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Call onSearch with the new search term
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">EventSpot Lite</h1>
        <div className={`navbar-search ${isMenuOpen ? 'active' : ''}`}>
          <form>
            <input
              type="text"
              placeholder="Search events by name or location..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            {/* <button className="search-button">
              <i className="fas fa-search"></i>
            </button> */}
          </form>
        </div>
        {/* {isMobile && (
          <div 
            className={`menu-icon ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
