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


export default function MinecraftScale() {

  // App state
  const [selectedPlan, setSelectedPlan] = useState("Económico")

  // Use info from minecraftPlans to create a list of recommended plans
  const recomendedPlans = {
    "Económico": {
      ...minecraftPlans.find(plan => plan.name === "Dragón del End"),
      description: "Nuestra línea de hardware estándar es la opción perfecta para un servidor vanilla de 5 a 10 jugadores.",
      priceDetails: "Perfecto para un servidor vanilla",
    },
    "Premium": {
      ...minecraftPlans.find(plan => plan.name === "Esmeralda"),
      description: "Nuestra línea de hardware extrema es la opción perfecta para una red de servidores con 40 jugadores o más.",
      priceDetails: "Perfecto para una comunidad grande",
    }
  }


  return (
    <section
      className={`
        minecraft-scale
        relative
        my-6
      `}
    >
      <article
        className={`
          container
          max-w-7xl
          mx-auto
          flex
          flex-col-reverse md:flex-row-reverse
          items-center
          justify-between
          gap-12
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
          `}
        >

          <FaCheckCircle
            className={`
              check-icon
              text-4xl
            `}
          />

          <Subtitle
            className={`
              plan-name
              font-bold
            `}
          >
            {recomendedPlans[selectedPlan].name}
          </Subtitle>

          <p
            className={`
              plan-recommendet-tag
              w-[101%]
              bg-blue-dark
              rounded-lg
              text-grey
              flex
              items-center
              justify-center
              txt-xl
              font-bold
              py-2
              gap-2
              opacity-60
            `}
          >
            <FaStar />
            Plan recomendado
          </p>

          <p
            className={`
              plan-price
              text-3xl
              font-bold
              my-4
            `}
          >
            {recomendedPlans[selectedPlan].price} €
          </p>

          <p
            className={`
              price-details
              font-bold
            `}
          >
            {recomendedPlans[selectedPlan].priceDetails}
          </p>

          <List
            items={recomendedPlans[selectedPlan].hardwere.slice(3, 6)}
            icon={<FaBolt className="text-blue-dark text-2xl" />}
            className={`
              w-10/12
              mt-4
              my-5
            `}
          />

          <ButtonLink
            href={`/minecraft#${recomendedPlans[selectedPlan].name.toLowerCase().replaceAll(" ", "-")}`}
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

        <div
          className={`
            info
            w-full
            max-w-2xl
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
            {recomendedPlans[selectedPlan].description}
          </p>

          <List
            items={recomendedPlans[selectedPlan].hardwere.slice(0, 3)}
            icon={<FaBolt className="text-blue-medium text-2xl" />}
          />

        </div>


      </article>

    </section>
  )
}