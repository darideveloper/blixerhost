"use client"

import { useState } from "react"

import { MdOutlineNavigateNext } from "react-icons/md"

/**
 * Details card component
 *
 * @param {object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {React.ReactNode} props.icon - Card icon
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Details card component
 */
const DetailsCard = ({ title, children, icon, className, isOpen, onToggle }) => {

  // Toggle accordion / handle click event

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
          transition duration-300 ease-in-out`}
        onClick={onToggle}
      >
        <h3
          className={`
            text-lg
            font-medium`}
        >
          <span
            className={`
              p-0
              inline-block
              mr-2
              align-middle
              `}
          >
            {icon}
          </span>
          {title}
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
          ${isOpen ? "max-h-[100px] pb-4" : "max-h-0 pb-0"}
          transition-max-height
          duration-300
          ease-in-out
          mx-12
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default DetailsCard
