// Libs
import { fontTitle } from "@/libs/fonts"

// Components
import Link from "next/link"

/**
 * Link with button style
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Button content (text)
 * @param {boolean} props.active - If true, renders an active button. Default is false
 * @param {string} props.href - Button link
 * @returns {JSX.Element} - Component template
 */
export default function ButtonLink({
  children,
  active = false,
  href,
  className = "",
  icon
}) {
  return (
    <Link
      className={`
        button
        border-2
        border-green-dark 
        ${active ? "bg-transparent" : "bg-green-dark hover:bg-transparent"}
        ${active ? "text-green-dark" : "text-blue-dark hover:text-green-dark"}
        font-weight-bold
        text-2xl
        font-bold
        rounded-md
        px-8
        py-2
        duration-300
        flex
        items-center
        justify-center
        scale-100
        ${fontTitle.className}
        ${className}
        flex
        items-center
        justify-center
        gap-2 hover:gap-6
      `}
      href={href}
    >
      {children}
      <span>{icon}</span>
    </Link>
  )
}