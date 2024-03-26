import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'; // Import moment

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 0, 1),
      end: new Date(2023, 0, 2),
    },
    // Add more events as needed
  ];

  return (
    <section className="cyber-security-section overflow-hidden">
         <div className="container">
    <div>
      <h1>Event Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div></div>
    </section>
  );
};

export default EventCalendar;
