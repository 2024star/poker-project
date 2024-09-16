"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [events, setEvents] = useState([]);

  // Fetch data from Strapi API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/poker-tournaments`
        );
        setEvents(response.data.data); // Set the events from API response
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 bg-charcoal text-lightgray">
      <h1 className="text-4xl font-bold text-center text-gold mb-8 drop-shadow-lg">
        🎲 Poker Tournament Events
        <span className="text-white"> ♠️</span>
        <span className="text-red-500">♥️</span>
        <span className="text-red-500">♦️</span>
        <span className="text-white">♣️</span>
      </h1>

      {/* Event List */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-charcoal border-2 border-gold rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-emerald hover:bg-gray-900"
          >
            {/* Display Event Name */}
            <h2 className="text-2xl font-bold text-gold mb-2 transition-all duration-300 ease-in-out hover:text-emerald">
              {event.attributes.Event} 🏆
            </h2>

            <p className="text-lightgray">
              <span className="font-bold text-gold">Date:</span>{" "}
              {new Date(event.attributes.start_date).toLocaleDateString()} -{" "}
              {event.attributes.end_date
                ? new Date(event.attributes.end_date).toLocaleDateString()
                : "TBD"}
            </p>

            <p className="text-lightgray mt-2">
              <span className="font-bold text-gold">Start Time:</span>{" "}
              {event.attributes.Time
                ? event.attributes.Time.slice(0, 5)
                : "N/A"}
            </p>

            <p className="text-lightgray mt-2">
              <span className="font-bold text-gold">Buy-In + Entry 💰:</span>{" "}
              {event.attributes.Entry ? event.attributes.Entry : "N/A"}
            </p>

            <p
              className={`mt-4 font-bold text-center transition-all duration-300 ease-in-out ${
                event.attributes.Status === "Active"
                  ? "text-emerald"
                  : event.attributes.Status === "Canceled"
                  ? "text-ruby"
                  : "text-gold"
              }`}
            >
              {event.attributes.Status === "Active"
                ? "🔥 Active Event"
                : event.attributes.Status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
