// src/components/EventCard.js
import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-image" />
      <h3>{event.name}</h3>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>{event.description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default EventCard;
