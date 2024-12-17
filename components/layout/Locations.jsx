"use client";

import { useState } from "react";
import ButtonAction from "@/components/ui/ButtonAction";
import Title from "@/components/ui/Title";

export default function Locations() {
  const locations = [
    {
      name: "Miami",
      embededLink:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=25.7741728,-80.19362&zoom=12",
      active: true,
    },
    {
      name: "Próximamente",
      embededLink:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=34.0522,-118.2437&zoom=12",
      active: false,
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
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
              onClick={() => handleLocationChange(location)}
              className={`mb-2`}
              active={selectedLocation.name === location.name}
              disabled={!location.active}
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
          className={`
            rounded-md
            h-[600px]
          `}
          src={selectedLocation.embededLink}
          width="100%"
        />
      </div>
    </section>
  );
}
