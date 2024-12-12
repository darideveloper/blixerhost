import { fontTitle } from "@/libs/fonts"

/**
 * Title text (h1 or h2)
 * 
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Title content (text)
 * @param {boolean} props.isH1 - If true, renders an h1 tag. Default is false
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Title component
 */
export default function Title({ children, isH1 = false, className }) {  
  
  const classes = `
    title
    text-5xl sm:text-7xl
    ${fontTitle.className}
    ${className}
  `
  
  return (
    <>
      {
        isH1 
          ? <h1 className={classes}>{children}</h1>
          : <h2 className={classes}>{children}</h2>
      }
    </>
  )
}