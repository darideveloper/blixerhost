"use client"

// Libs
import { useState } from "react"

// Components
import { MdOutlineNavigateNext } from "react-icons/md"

/**
 * Details card component
 * 
 * @param {object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {React.ReactNode} props.icon - Card icon
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Component template
 */
const DetailsCard = ({ title, children, icon, className }) => {

  // Component state
  const [isOpen, setIsOpen] = useState(false)

  // Toggle accordion / handle click event
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={` 
        bg-grey
        text-black
        my-4
        rounded
        ${isOpen && "border-b-2"}
        ${className}
      `}
    >
      <button
        className={`
          flex
          justify-between
          items-center
          w-full
          py-4
          px-6
          text-left
          focus:outline-none
        `}
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">
          <span className="p-0 inline-block mr-2 align-middle">{icon}</span>
          {title}
        </h3>
        <span
          className={`
            text-2xl
            font-bold
            transition-transform
            ${isOpen && "rotate-90"}
          `}
        >
          <MdOutlineNavigateNext />
        </span>
      </button>
      {
        isOpen
        &&
        <div
          className={`
              px-6
              pb-4
              mx-8
            `}
        >
          {children}
        </div>
      }
    </div>
  )
}

export default DetailsCard
