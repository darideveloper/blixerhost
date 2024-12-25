"use client"

// Icons
import { FaQuestion } from "react-icons/fa"
import { MdOutlineNavigateNext } from "react-icons/md"

/**
 * Details card component
 *
 * @param {object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Details card component
 */
const DetailsCard = ({ title, children, className, isOpen, onToggle }) => {
  // Toggle accordion / handle click event

  return (
    <div
      className={`
        bg-blue-alternative
        text-black
        my-4 
        rounded-lg
        
        ${isOpen && "border-green-dark rounded-lg  border-b-4 cursor-default"}
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
          text-white
          focus:outline-none
          transition duration-300 ease-in-out`}
        onClick={onToggle}
      >
        <h3
          className={`
            text-lg
            font-bold`}
        >
          <div className="flex">
            <div className="mr-2">
              <span
                className={`
                  inline-block
                  mr-2
                  align-middle
                  bg-green-dark
                  text-black
                  p-[5px]
                  rounded
                  text-[12px]
                  `}
              >
                <FaQuestion />
              </span>
            </div>
            <div>{title}</div>
          </div>
        </h3>
        <span
          className={`
            text-2xl
            font-bold
            transition-transform
            ${isOpen && "rotate-90"}`}
        >
          <MdOutlineNavigateNext />
        </span>
      </button>
      <div
        className={`
          overflow-hidden
          transition-all
          duration-700
          ease-in-out
          mx-[55px]
          text-white
          text-lg
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        style={{
          maxHeight: isOpen ? "100vh" : "0",
          visibility: isOpen ? "visible" : "hidden",
          paddingBottom: isOpen ? "1rem" : "0",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default DetailsCard
