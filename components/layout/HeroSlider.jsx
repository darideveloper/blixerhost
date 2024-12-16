"use client"

// Libs
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'

// Components
import Title from '@/components/ui/Title'
import ButtonLink from '@/components/ui/ButtonLink'
import { FaArrowAltCircleRight } from "react-icons/fa"


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
                  px-16
                `}
              >
                <div 
                  classe={`
                    title-wrapper
                    w-full
                  `}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <Title
                    className={`
                      my-2
                    `}
                    isH1={index === 0}
                  >
                    {heroSlide.title}
                  </Title>
                </div>
                <p
                  className={`
                    text
                    max-w-xl
                    mx-auto
                    my-4
                  `}
                  data-aos="zoom-out"
                  data-aos-delay="800"
                >
                  {heroSlide.text}
                </p>
                <div
                  className={`
                    btn-wrapper
                  `}
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <ButtonLink
                    href={heroSlide.ctaLink}
                    className={`
                      primary
                      mt-4
                    `}
                    icon={<FaArrowAltCircleRight />}
                  >
                    Ver planes
                  </ButtonLink>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}