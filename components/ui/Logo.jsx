// Components
import Link from "next/link"
import Image from 'next/image'

/**
 * Logo link
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes 
 * @returns 
 */
export default function Logo({ className }) {
  return (
    <Link 
      href="/"
      className={`
        duration-200
        hover:opacity-75
        ${className}
      `}
    >
      <Image 
        src="/images/logo.webp"
        alt="Logo"
        width={200}
        height={200}
        className={`
          w-24
          h-auto          
        `}
      />
    </Link>
  )
}