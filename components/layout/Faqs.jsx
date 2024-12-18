"use client"

// Icons
import {
  FaQuestionCircle,
  FaCreditCard,
  FaServer,
  FaHeadset,
} from "react-icons/fa"
import { BiSolidConversation } from "react-icons/bi"
import { GoDotFill } from "react-icons/go"

// Libs
import { useState } from "react"

// Components
import ButtonAction from "@/components/ui/ButtonAction"
import ButtonLink from "@/components/ui/ButtonLink"
import Title from "@/components/ui/Title"
import DetailsCard from "@/components/ui/DetailsCard"

export default function Faqs() {
  const faqsData = {
    "General Information": {
      icon: <FaQuestionCircle />,
      questions: [
        {
          title: "What is EasyMinecraftHosting?",
          answer:
            "EasyMinecraftHosting is a Minecraft server hosting platform that provides reliable, high-performance servers for all your Minecraft gaming needs.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "How do I create a new Minecraft server?",
          answer:
            "To create a new Minecraft server, simply sign up for an EasyMinecraftHosting account, select a plan that fits your needs, and follow the step-by-step instructions to set up your server.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "Can I host multiple Minecraft servers with one account?",
          answer:
            "Yes, you can host multiple Minecraft servers with a single EasyMinecraftHosting account. Our platform allows you to easily manage all your servers from a centralized dashboard.",
          icon: <FaQuestionCircle />,
        },
      ],
    },
    "Billing and Payments": {
      icon: <FaCreditCard />,
      questions: [
        {
          title: "What payment methods do you accept?",
          answer:
            "EasyMinecraftHosting accepts a variety of payment methods, including credit/debit cards, PayPal, and cryptocurrency. We strive to offer flexible payment options for our customers.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "Do you offer any discounts or promotions?",
          answer:
            "Yes, we frequently offer discounts and promotions, such as first-month discounts, annual billing discounts, and special offers for new customers. Be sure to check our website or contact our sales team for the latest deals.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "Can I cancel my subscription at any time?",
          answer:
            "Absolutely. Our Minecraft server hosting plans are month-to-month, and you can cancel your subscription at any time without any penalties or fees.",
          icon: <FaQuestionCircle />,
        },
      ],
    },
    "Server Features": {
      icon: <FaServer />,
      questions: [
        {
          title: "Do you offer custom server configurations?",
          answer:
            "Yes, we provide a wide range of server configurations and options to ensure your Minecraft server meets your specific needs. Our team can assist you in selecting the right hardware and software setup for your requirements.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "Can I install my own plugins and mods?",
          answer:
            "Yes, you can install your own plugins and mods on your EasyMinecraftHosting server. Our platform supports a wide range of Minecraft modifications to enhance your gaming experience.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "Do you provide automatic server backups?",
          answer:
            "Absolutely. We offer automatic daily backups of your Minecraft server data, allowing you to quickly restore your server in the event of an issue or data loss.",
          icon: <FaQuestionCircle />,
        },
      ],
    },
    "Customer Support": {
      icon: <FaHeadset />,
      questions: [
        {
          title: "What is your average support response time?",
          answer:
            "At EasyMinecraftHosting, we pride ourselves on our exceptional customer support. Our average support response time is within 30 minutes, ensuring that any issues or questions you have are addressed promptly.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "Do you offer 24/7 technical support?",
          answer:
            "Yes, our Minecraft server hosting platform is supported by a team of knowledgeable technicians who are available 24 hours a day, 7 days a week to assist you with any technical issues or questions you may have.",
          icon: <FaQuestionCircle />,
        },
        {
          title: "How can I contact your support team?",
          answer:
            "You can reach our support team through various channels, including our live chat, email, and a dedicated support ticket system. We strive to provide you with multiple options to get the assistance you need.",
          icon: <FaQuestionCircle />,
        },
      ],
    },
  }

  const [currentCategory, setCurrentCategory] = useState(
    Object.keys(faqsData)[0]
  )
  const [animating, setAnimating] = useState(false)

  const handleCategoryChange = (category) => {
    if (!animating) {
      setAnimating(true)
      setTimeout(() => {
        setCurrentCategory(category)
        setAnimating(false)
      }, 500)
    }
  }

  return (
    <section
      className={`
        faqs
        container
        mx-auto
        flex
        items-center
        md:gap-8
        flex-col
        w-full
    `}
    >
      <div
        className={`
          left
          w-full
          flex
          flex-col md:flex-row
          items-center
          justify-between
        `}
      >

        <div
          className={`
          left
          p-4
          w-full
          flex-col
          md:w-1/2
        `}
        >
          <Title
            isH1={true}
            className={`
              mb-4
              text-center
              md:text-start`}
          >
            Preguntas frecuentes
          </Title>

          <div
            className={`
              buttons
              flex
              flex-wrap
              justify-center
              md:justify-start
          `}
          >
            {/* Render ButtonAction */}
            {Object.keys(faqsData).map((category, index) => (
              <div className="p-2" key={index}>
                <ButtonAction
                  onClick={() => handleCategoryChange(category)}
                  href="#"
                  className={`
                    category-btn
                  `}
                  key={index}
                  active={currentCategory === category ? true : false}
                  icon={faqsData[category].icon}
                >
                  {category}
                </ButtonAction>
              </div>
            ))}
          </div>
          <div
            className={`
              help-wrapper
              flex
              flex-col
              items-center
              justify-center
              p-4
              md:items-start`}
          >
            <div>
              <p
                className={`
                block
                mb-2`}
              >
                ¿No encuentras lo que estás buscando? Escríbenos!
              </p>
            </div>
            <div
              className={`
              flex
              items-center`}
            >
              <div>
                <ButtonLink
                  href="https://discord.blixerhost.es/"
                  className=""
                  icon={<BiSolidConversation />}
                >
                  Discord
                </ButtonLink>
              </div>
              <div
                className={`
                p-4
                flex
                items-center`}
              >
                <GoDotFill
                  className={`
                  inline-block
                  text-xl
                  text-green-light
                  align-middle
                  me-1`}
                />
                <p
                  className={`inline-block
                    align-middle
                    text-2xl
                    text-green-light`}
                >
                  online
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`
          right
          faqs-wrapper
          w-full
          p-2
          md:w-1/2
          ${animating
              ? "opacity-0 transition-opacity duration-500"
              : "opacity-100 transition-opacity duration-500"
            }
        `}
        >
          {faqsData[currentCategory].questions.map((faq, index) => (
            <DetailsCard icon={faq.icon} key={index} title={faq.title}>
              <article>{faq.answer}</article>
            </DetailsCard>
          ))}
        </div>
      </div>
    </section>
  )
}
