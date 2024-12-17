// Libs
import { fontTitle } from "@/libs/fonts";

// Components

/**
 * Button with action style
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Button content (text)
 * @param {boolean} props.active - If true, renders an active button. Default is false
 * @param {string} props.href - Button link
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.icon - Icon
 * @param {function} props.onClick - Callback function for click event
 * @param {boolean} props.disabled - If true, button is disabled. Default is false
 * @returns {JSX.Element} - Button component
 */

export default function ButtonAction({
  children,
  active = false,
  href,
  className = "",
  icon,
  onClick,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        button
        border-2
        border-blue-dark
        ${
          active
            ? "bg-transparent border-blue-medium text-blue-medium"
            : "bg-blue-medium hover:bg-transparent"
        }
        ${
          active
            ? "font-bold"
            : "text-blue-dark hover:text-blue-medium hover:border-blue-medium"
        }
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
        ${
          disabled
            ? "opacity-50 cursor-not-allowed border-blue-medium hover:bg-blue-medium hover:text-blue-dark"
            : ""
        }

      `}
      href={href}
      disabled={disabled}
    >
      {children}
      <p
        className={`
          ml-4
          hidden sm:inline-block
        `}
      >
        {icon}
      </p>
    </button>
  );
}
