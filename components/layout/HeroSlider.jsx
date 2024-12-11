"use client"

// Libs
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

// Components
import Title from '@/components/ui/Title'
import ButtonLink from '@/components/ui/ButtonLink'


import 'swiper/css'
import 'swiper/css/navigation'


export default function HeroSlider() {

  // Data
  const heroSlides = [
    {
      "title": "Alojamiento de Minecraft",
      "text": "Ofrecemos los mejores servidores para hosting de minecraft, disponibles 24/7 a costos accesibles desde $1.00 / mes",
      "ctaLink": "#minecraft-scale",
    },
    {
      "title": "Bots de Discord",
      "text": "Potencia tu servidor de Discord con bots personalizados que automatizan, interactúan y elevan tu comunidad al siguiente nivel.",
      "ctaLink": "/bots",
    },
  ]

  return (
    <section
      className={`
        hero-slider
        container
        mx-auto
      `}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {/* Render each slide */}
        {
          heroSlides.map((heroSlide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`
                  content
                  text-center
                  flex
                  flex-col
                  items-center
                  justify-center
                  py-36
                `}
              >
                <Title
                  className={`
                    my-2
                  `}
                  isH1={index === 0}
                >
                  {heroSlide.title}
                </Title>
                <p
                  className={`
                    max-w-xl
                    mx-auto
                    my-4
                  `}
                >
                  {heroSlide.text}
                </p>
                <ButtonLink
                  href={heroSlide.ctaLink}
                  className={`
                    primary
                    mt-4
                  `}
                >
                  Ver planes
                </ButtonLink>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}