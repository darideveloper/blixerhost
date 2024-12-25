"use client"

// Libs
import { useState } from "react"

// Components
import ButtonAction from "@/components/ui/ButtonAction"
import Title from "@/components/ui/Title"
import Image from "next/image"


export default function Locations() {
  const locations = [
    {
      name: "Miami",
      active: true,
      imageSrc: "/maps/map-miami.webp",
    },
    {
      name: "Próximamente",
      active: false,
      imageSrc: "",
    },
  ]

  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  const handleLocationChange = (location) => {
    setSelectedLocation(location)
  }

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
    >
      <div
        className={`
          location-right 
          flex-col
          w-full lg:w-1/3
        `}
        data-aos="fade-up"
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
              className={`mb-2 transition duration-300 transform ${
                selectedLocation.name === location.name ? "scale-105" : ""
              }`}
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
          transition duration-500 ease-in-out transform ${
            selectedLocation.embededLink ? "opacity-100" : "opacity-0"
          }
        `}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <Image 
          src={selectedLocation.imageSrc}
          alt={`mapa de ${selectedLocation.name}`}
          width={800}
          height={600}
        />
      </div>
    </section>
  )
}
