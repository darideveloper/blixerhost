
// Libs
import Link from "next/link"

// Components
import ButtonLink from "@/components/ui/ButtonLink"

/**
 *
 * @param {object} item - Navigation item details
 * @param {string} item.type - Type of navigation item ('link', 'icon', 'button')
 * @param {string} item.href - URL or path the item should link to
 * @param {React.Component} [item.icon] - Icon component to render if type is 'icon'
 * @param {string} item.label - Label text for the navigation item
 * @param {boolean} [isMobile=false] - If true, applies additional styles for mobile view
 * @param {string} [className=""] - Additional CSS classes for styling
 * @returns {JSX.Element|null} - Rendered navigation item or null if type is not recognized
 */
const NavItem = ({ item, isMobile = false, className = "" }) => {
  switch (item.type) {
    case "link":
      return (
        <Link
          href={item.href}
          className={`
            text-white
            font-bold
            hover:bg-blue-dark
            hover:text-white
            transition
            duration-300
            ease-in-out
            rounded-md
            px-2 py-2
            ${isMobile && "block w-full text-center"}
            ${className}`}
        >
          {item.label}
        </Link>
      )
    case "icon":
      const Icon = item.icon
      return (
        <Link
          href={item.href}
          className={`
            text-white
            hover:bg-blue-dark
            hover:text-white
            transition
            duration-300 ease-in-out
            rounded-md
            py-2
            px-2
            flex
            items-center
            justify-center
            ${className}`}
        >
          <Icon className="text-2xl" />
          {isMobile && <span className="ml-2">{item.label}</span>}
        </Link>
      )
    case "button":
      return (
        <ButtonLink
          href={item.href}
          active={false}
          className={`
            hover:bg-blue-dark
            hover:text-white
            ${isMobile && "w-full"}
            ${className}`}
        >
          {item.label}
        </ButtonLink>
      )
    default:
      return null
  }
}

export default NavItem
