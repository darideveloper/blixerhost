import { fontTitle } from "@/libs/fonts"

/**
 * Tabs buttons
 * 
 * @param {object} props - Component props
 * @param {object} props.tabs - tabs data
 * @param {string} props.tabs.title - tab name / visible text
 * @returns 
 */
export default function Tabs({ tabs, selectedTab, setSelectedTab, className }) {
  return (
    <div
      className={`
        tabs-container
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      <div
        className={`
          tabs
          bg-blue-medium
          flex
          flex-col sm:flex-row
          gap-3
          align-center
          justify-center
          rounded-lg
          p-2
        `}
      >
        {tabs.map((tab, index) => {

          const isActive = selectedTab.title === tab.title

          return (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`
                tab
                w-60
                py-3
                text-xl
                rounded-lg
                duration-300
                ${isActive ? "opacity-30" : "opacity-80"}
                bg-blue-dark ${!isActive && "hover:bg-green-dark"}
                text-white ${!isActive && "text-blue-dark"}
                ${isActive && "cursor-default"}
                ${fontTitle.className}
              `}
            >
              {tab.title}
            </button>
          )
        })}

      </div>
    </div>
  )

}