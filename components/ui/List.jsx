/**
 * @param {object} props - Component props
 * @param {Array} props.items - List of items (strings)
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.icon - Icon to display next to the item
 * @returns {JSX.Element} List component
 */
export default function List({ items, className, icon }) {

  console.log({items})

  return (
    <ul
      className={`
        list
        ml-2
        ${className}
      `}
    >
      {
        items.map((item, index) => (
          <li
            key={index}
            className={`
              hardware-item
              flex
              items-center
              gap-3
              my-2
            `}
          >
            {icon}
            {item}
          </li>
        ))
      }
    </ul>
  )
}