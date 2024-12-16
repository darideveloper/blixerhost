"use client";

import { useState } from "react";
import ButtonAction from "@/components/ui/ButtonAction";
import Title from "../ui/Title";

export default function Locations() {
  // !Very Important: never hardcode api keys this is for dev env only. also this api key is scrapped from github.
  // use your own api key - this is not my api key
  const map_api_key = "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao";

  const locations = [
    { name: "Miami", coordinates: { lat: 25.7741728, lng: -80.19362 } },
    { name: "Location 2", coordinates: { lat: 34.0522, lng: -118.2437 } },
    { name: "Location 3", coordinates: { lat: 40.7128, lng: -74.006 } },
  ];

  const [selectedLocation, setSelectedLocation] = useState(
    locations[0].coordinates
  );

  const handleLocationChange = (coordinates) => {
    setSelectedLocation(coordinates);
  };

  return (
    <section
      className={`
        locations
        container
        mx-auto
        mt-16
        p-4
        flex flex-col sm:flex-col md:flex-row
        items-center
        gap-4
      `}
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div
        className={`
        location-right 
        flex-col
        w-full lg:w-1/3
        `}
      >
        <Title
          className={`
            title
            mb-8 
            text-center md:text-left
            `}
          isH1={false}
        >
          Locations
        </Title>
        <p
          className={`
            mb-8
            text-xl
            text-blue-medium
            font-bold 
            text-center md:text-left
            `}
        >
          Conoce nuestras ubicaciones
        </p>
        <div
          className={`
          buttons-wrapper
          flex
          flex-wrap
          md:flex-row
          justify-center md:justify-start
          gap-4 sm:gap-2 md:gap-4
          `}
        >
          {locations.map((location, index) => (
            <ButtonAction
              key={index}
              onClick={() => handleLocationChange(location.coordinates)}
              className={`mb-2`}
              active={
                selectedLocation.lat === location.coordinates.lat &&
                selectedLocation.lng === location.coordinates.lng
              }
            >
              {location.name}
            </ButtonAction>
          ))}
        </div>
      </div>
      <div
        className={`
          location-left
          w-full lg:w-2/3
          
        `}
      >
        <iframe
          className={`rounded-md`}
          src={`https://www.google.com/maps/embed/v1/place?key=${map_api_key}&zoom=12&q=${selectedLocation.lat},${selectedLocation.lng}`}
          width="100%"
          height="400"
          // style={{ border: 0 }}

          // allowFullScreen
        />
      </div>
    </section>
  );
}
