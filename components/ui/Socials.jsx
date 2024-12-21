// Icons
import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

// Components
import Link from "next/link"


/**
 * Social links icons
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Socials
 */
export default function Socials ({ className }) {

  const socialsData = [
    {
      "href": "https://discord.gg/kFZ5DaD",
      "icon": FaDiscord,
      "className": "text-3xl",
    },
    {
      "href": "https://twitter.com/",
      "icon": FaXTwitter,
      "className": "",
    },
  ]

  return (
    <div
      className={`
        socials
        flex
        gap-1
        items-center
        ${className}
      `}
    >
      {
        socialsData.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={`
              social
              text-white
              hover:text-blue-medium
              transition
              duration-300
              ease-in-out
              rounded-md
              px-2 py-2
              ${social.className}
              text-2xl
            `}
          >
            <social.icon />
          </Link>
        ))
      }
    </div>
  )
}