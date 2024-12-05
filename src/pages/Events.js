// src/pages/Events.js
import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard"; // Import component EventCard để hiển thị sự kiện
import { eventsData } from "../data/eventsData"; // Import dữ liệu sự kiện
import "../styles/Events.css"; // Import CSS cho sự kiện

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set sự kiện mẫu vào state khi trang được load
    setEvents(eventsData); // Bạn có thể thay thế bằng API nếu cần
  }, []);

  return (
    <div className="events">
      <h2>Sự kiện Cosplay sắp tới tại Việt Nam</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
