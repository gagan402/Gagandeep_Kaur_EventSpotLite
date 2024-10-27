import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';
import './AnimatedBackground.css'; // Import the new CSS file

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <div className="animated-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
      <Navbar onSearch={handleSearch} />
      <EventList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
