// Libs
import { fontTitle } from "@/libs/fonts"

/**
 * Subtitle text (h3)
 * 
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Subtitle content (text)
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Subtitle component
 */
export default function Subtitle({ children, className }) { 

  return (
    <h3
      className={`
        subtitle
        text-5xl
        ${fontTitle.className}
        my-4
        ${className}
      `}
    >

      {children}
    </h3>
  )
}