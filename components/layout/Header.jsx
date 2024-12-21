"use client"

// Icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

// Libs
import { useState, useEffect } from "react"

// Components
import NavItem from "@/components/ui/NavItem"
import Logo from "@/components/ui/Logo"
import Socials from "@/components/ui/Socials"
import ButtonLink from "@/components/ui/ButtonLink"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigationItems = [
    {
      type: "link",
      href: "/#minecraft-scale",
      label: "Alojamiento de Minecraft",
    },
    {
      type: "link",
      href: "/bots",
      label: "Bots de Discord",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        bg-blue-alternative
        sticky 
        top-0
        z-50
        transition duration-300 ease-in-out
        ${isScrolled ? "bg-blue-alternative shadow-xl" : "lg:bg-transparent"}
        `}
    >
      <nav className={`py-4`}>
        <div
          className={`
            container
            mx-auto
            px-4
          `}
        >
          <div
            className={`
              flex
              justify-between
              items-center
            `}
          >
            <div
              className={`
                flex
                items-center
                space-x-6
              `}
            >
              <Logo
                className={`
                   transition-all
                    duration-500
                    ease-in-out
                    transform
                    ${isScrolled ? "w-14 scale-100" : "w-20 scale-100"}
                    
                `}
              />
              <div
                className={`
                hidden
                lg:flex
                space-x-4`}
              >
                {navigationItems
                  .filter((item) => item.type === "link")
                  .map((item, index) => (
                    <div key={index}>
                      <NavItem item={item} />
                    </div>
                  ))}
              </div>
            </div>

            <div
              className={`
              hidden
              lg:flex 
              items-center 
              space-x-2
              `}
            >
              <Socials />
              <ButtonLink
                className={`
                    hover:text-white
                    hover:bg-transparent
                    hover:border-white
                  `}
                href="#minecraft-scale"
              >
                Comenzar
              </ButtonLink>
            </div>
            <div
              className={`
              lg:hidden
              `}
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`
                  text-white
                  hover:bg-blue-dark
                  hover:text-white
                  transition
                  duration-300
                  ease-in-out
                  rounded-md
                  w-12 h-12
                  flex items-center
                  justify-center
                `}
              >
                {menuOpen ? (
                  <RiCloseLine
                    className={`
                      text-3xl
                    `}
                  />
                ) : (
                  <RiMenu3Line
                    className={`
                      text-3xl
                    `}
                  />
                )}
              </button>
            </div>
          </div>

          <div
            className={`
              lg:hidden
              transition-all
              duration-300
              ease-in-out 
              ${
                menuOpen
                  ? "opacity-100 max-h-96 mt-4"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
          >
            <ul
              className={`
                flex
                flex-col
                space-y-4
              `}
            >
              {navigationItems
                .filter((item) => item.type === "link")
                .map((item, index) => (
                  <li
                    key={index}
                    className={`
                    w-full
                  `}
                  >
                    <NavItem item={item} isMobile={true} />
                  </li>
                ))}
              <li
                className={`
                  w-full
                `}
              >
                <Socials
                  isMobile={true}
                  className={`
                    flex
                    items-start
                  `}
                />
              </li>
              <li
                className={`
                  w-full
                `}
              >
                <ButtonLink
                  className={`
                    hover:text-white
                    hover:bg-transparent
                    hover:border-white
                    `}
                  href="#minecraft-scale"
                >
                  Comenzar
                </ButtonLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
