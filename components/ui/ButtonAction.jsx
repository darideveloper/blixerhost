// Libs
import { fontTitle } from "@/libs/fonts";

// Components
import { FaArrowAltCircleRight } from "react-icons/fa";

/**
 * Link with button style
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Button content (text)
 * @param {boolean} props.active - If true, renders an active button. Default is false
 * @param {string} props.className - Additional CSS classes
 * @param {function} props.onClick - Button click event
 * @returns {JSX.Element} - Component template
 */
export default function ButtonAction({
  children,
  active = false,
  className = "",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        button
        border-2
        border-blue-dark
        ${active ? "bg-transparent border-blue-medium text-blue-medium" : "bg-blue-medium hover:bg-transparent"}
        ${active ? "font-bold" : "text-blue-dark hover:text-blue-medium hover:border-blue-medium"}
        font-weight-bold
        text-2xl
        font-bold
        rounded-md
        px-2
        py-2
        duration-300
        flex
        items-center
        justify-center
        scale-100
        ${fontTitle.className}
        ${className}
      `}
    >
      {children}
      <p
        className={`
          ml-4
          hidden sm:inline-block
        `}
      >
        <FaArrowAltCircleRight />
      </p>
    </button>
  );
}
