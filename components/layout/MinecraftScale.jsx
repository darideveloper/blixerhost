"use client"

// Libs
import { useState } from "react"
import { fontBody } from "@/libs/fonts"

// Data
import { minecraftPlans } from "@/data/minecraft-plans"

// Components
import { FaBolt, FaCheckCircle, FaStar } from "react-icons/fa"
import Subtitle from "@/components/ui/Subtitle"
import List from "@/components/ui/List"
import ButtonLink from "@/components/ui/ButtonLink"
import Tabs from "@/components/ui/Tabs"
import Title from "@/components/ui/Title"


export default function MinecraftScale() {

  
  // Use info from minecraftPlans to create a list of recommended plans
  const recomendedPlans = [
    {
      title: "Económico",
      ...minecraftPlans.find(plan => plan.name === "Dragón del End"),
      description: "Nuestra línea de hardware estándar es la opción perfecta para un servidor vanilla de 5 a 10 jugadores.",
      priceDetails: "Perfecto para un servidor vanilla",
    },
    {
      title: "Premium",
      ...minecraftPlans.find(plan => plan.name === "Esmeralda"),
      description: "Nuestra línea de hardware extrema es la opción perfecta para una red de servidores con 40 jugadores o más.",
      priceDetails: "Perfecto para una comunidad grande",
    }
  ]

  // App state
  const [selectedPlan, setSelectedPlan] = useState(recomendedPlans[0])

  const [animating, setAnimating] = useState(false)

  const handleSelectedPlanChanged = (planId) => {
    if (!animating) {
      setAnimating(true)
      setTimeout(() => {
        setSelectedPlan(planId)
        setAnimating(false)
      }, 500)
    }
  }


  return (
    <section
      className={`
        minecraft-scale
        relative
      `}
    >

      <Title
        className={`
          text-center
        `}
      >
        Conoce nuestros planes
      </Title>

      <p
        className={`
          text-sm
          text-center
          text-green-dark
        `}
      >
        Minecraft Hosting
      </p>

      {/* plans tabs */}
      <div
        className={`
          tabs-wrapper
        `}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Tabs 
          tabs={recomendedPlans}
          selectedTab={selectedPlan}
          setSelectedTab={handleSelectedPlanChanged}
          className={`
            my-8
          `}
        />
      </div>


      {/* Plan info */}
      <article
        className={`
          container
          mx-auto
          flex
          flex-col-reverse md:flex-row-reverse
          items-center
          justify-between
          gap-12
          duration-300
          ${animating 
            ?
              'opacity-0'
            :
              'opacity-100'
          }
        `}
      >

        <div
          className={`
            cta-wrapper
            pt-6
            w-full
            max-w-xl
            mx-auto
            bg-blue-medium
            rounded-lg
            flex
            flex-col
            items-center
            justify-center
            my-4
            text-blue-dark
            duration-300
            ${animating && '-translate-x-[-300px]'}
          `}
        >

          <FaCheckCircle
            className={`
              check-icon
              text-4xl
            `}
          />

          <div
            className={`
              subtitle-wrapper
            `}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Subtitle
              className={`
                plan-name
                font-bold
              `}
            >
              {selectedPlan.name}
            </Subtitle>
          </div>

          <div 
            className={`
              recommended-wrapper
              w-full
            `}
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <p
              className={`
                recommended
                w-[101%]
                bg-blue-dark
                text-grey
                flex
                items-center
                justify-center
                txt-xl
                font-bold
                py-2
                gap-2
                opacity-70
              `}
            >
              <FaStar />
              Plan recomendado
            </p>
          </div>

          <p
            className={`
              plan-price
              text-3xl
              font-bold
              my-4
            `}
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            {selectedPlan.price} €
          </p>

          <p
            className={`
              price-details
              font-bold
            `}
            data-aos="fade-down"
            data-aos-delay="1400"
          >
            {selectedPlan.priceDetails}
          </p>

          <List
            items={selectedPlan.hardwere.slice(3, 6)}
            icon={<FaBolt className="text-blue-dark text-2xl" />}
            className={`
              w-10/12
              mt-4
              my-5
            `}
          />

          <div 
            className={`
              cta-wrapper
              w-full
            `}
            data-aos="zoom-in"
            data-aos-delay="2100"
          >
            <ButtonLink
              href={`/minecraft#${selectedPlan.name.toLowerCase().replaceAll(" ", "-")}`}
              className={`
                w-full
                rounded-t-none
                hover:!border-blue-light
                hover:!bg-blue-light
                hover:!text-blue-dark
                py-4
                text-2xl
              `}
            >
              Comenzar
            </ButtonLink>
          </div>

        </div>

        <div
          className={`
            info
            w-full
            max-w-2xl
            duration-300
            ${animating && 'translate-x-[-300px]'}
          `}
        >
          <h4
            className={`
              info-title
              text-2xl
              font-bold
              ${fontBody.className}
              text-blue-medium
              my-4
            `}
          >
            Hardware
          </h4>
          <p
            className={`
              description
              my-4
            `}
          >
            {selectedPlan.description}
          </p>

          <List
            items={selectedPlan.hardwere.slice(0, 3)}
            icon={<FaBolt className="text-blue-medium text-2xl" />}
          />

        </div>


      </article>

    </section>
  )
}