"use client"

// Libs
import { useState } from "react"

// Components
import ButtonAction from "@/components/ui/ButtonAction"
import Title from "@/components/ui/Title"

export default function Locations() {
  const locations = [
    {
      name: "Miami",
      embededLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22786899.034852818!2d-109.60396502610932!3d34.800621334531336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1734736092058!5m2!1ses-419!2smx",
      active: true,
    },
    {
      name: "Próximamente",
      embededLink:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=34.0522,-118.2437&zoom=12",
      active: false,
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
  )
}
