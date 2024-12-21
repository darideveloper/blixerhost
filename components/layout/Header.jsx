"use client"

// Icons
import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

// Libs
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Components
import NavItem from "@/components/ui/NavItem"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
    {
      type: "icon",
      href: "https://discord.gg/kFZ5DaD",
      icon: FaDiscord,
      label: "Discord",
    },
    {
      type: "icon",
      href: "",
      icon: FaXTwitter,
      label: "Twitter",
    },
    {
      type: "button",
      href: "#minecraft-scale",
      label: "Comenzar",
    },
  ]

  // for mobile
  const renderMobileIcons = (iconItems) => (
    /* this style will be specific for mobile icons. i will try to refactor it later */
    <div
      className={`
            flex
            justify-center
            space-x-4`}
    >
      {iconItems.map((item, index) => (
        <div key={index}>
          <NavItem className="" item={item} isMobile={true} />
        </div>
      ))}
    </div>
  )

  return (
    <header
      className={`
      header`}
    >
      <nav
        className={`
        bg-blue-medium
        py-4`}
      >
        <div
          className={`
          container
          mx-auto
          px-4`}
        >
          <div
            className={`
            flex
            justify-between
            items-center`}
          >
            <div
              className={`
              flex
              items-center
              space-x-6`}
            >
              <Link href={"/"}>
                <Image
                  src="/images/logo.webp"
                  alt="BlixerHost Logo"
                  width={200}
                  height={45}
                  className={`
                    w-16`}
                />
              </Link>
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
              space-x-2`}
            >
              {navigationItems
                .filter(
                  (item) => item.type === "icon" || item.type === "button"
                )
                .map((item, index) => (
                  <div className="" key={index}>
                    <NavItem item={item} />
                  </div>
                ))}
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
                  justify-center`}
              >
                {menuOpen ? (
                  <RiCloseLine className="text-3xl" />
                ) : (
                  <RiMenu3Line className="text-3xl" />
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
            {/*Mobile Navigation -- if you change anything please be careful*/}
            <ul
              className={`
              flex
              flex-col
              items-center
              space-y-4`}
            >
              {/*Text Links -- this is text links only in mobile*/}
              {navigationItems
                .filter((item) => item.type === "link")
                .map((item, index) => (
                  <li key={index} className="w-full">
                    <NavItem item={item} isMobile={true} />
                  </li>
                ))}

              {/*Icons Group -- this is group of icons only in mobile */}
              <li className="w-full">
                {renderMobileIcons(
                  navigationItems.filter((item) => item.type === "icon")
                )}
              </li>

              {/* Button -- this is button only in mobile */}
              {navigationItems
                .filter((item) => item.type === "button")
                .map((item, index) => (
                  <li
                    key={index}
                    className={`
                  w-full
                  max-w-xs`}
                  >
                    <NavItem item={item} isMobile={true} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
