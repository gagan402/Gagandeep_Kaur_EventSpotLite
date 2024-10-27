import React, { useState, useEffect } from 'react';
import eventsData from '../mockData';
import EventModal from './EventModal';
import '../styles/EventList.css';

const EventList = ({ searchTerm }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    const filtered = eventsData.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchTerm]);

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="event-list-container">
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div 
            className="event-card" 
            key={event.id} 
            onClick={() => openModal(event)}
          >
            <img src={event.image} alt={event.name} className="event-image" loading="lazy" />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default EventList;
