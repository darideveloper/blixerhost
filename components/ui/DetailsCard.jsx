"use client"

import { useState } from 'react'

/**
 * Card with title that opens up to show more details
 * 
 * @param {props} props
 * @param {string} props.title - Title of the card
 * @param {string} props.icon - Icon of the card (react-icon)
 * @param {string} props.className - Additional classes
 * @param {string} props.children - Card content
 * @returns 
 */
export default function DetailsCard ({ title, icon, className, children }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <article
      className={`
        details-card
      `}
    >
      {children}
    </article>
  )
}