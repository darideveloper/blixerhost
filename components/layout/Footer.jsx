// Components
import Link from 'next/link'
import Socials from '@/components/ui/Socials'
import Logo from '@/components/ui/Logo'

export default function Footer() {

  const links = [
    {
      "category": "Alojamiento de minecraft",
      "links": [
        {
          "text": "Plan Económico",
          "href": "/minecraft/#economico"
        },
        {
          "text": "Plan Premium",
          "href": "/minecraft/#premium"
        }
      ]
    },
    {
      "category": "Bots de Discord",
      "links": [
        {
          "text": "300MB Discord Bot",
          "href": "/bots/#300mb-bot"
        },
        {
          "text": "500MB Discord Bot",
          "href": "/bots/#500mb-bot"
        },
        {
          "text": "1GB Discord Bot",
          "href": "/bots/#1gb-bot"
        },
        {
          "text": "Discord Bot Unlimited",
          "href": "/bots/#unlimited-bot"
        }
      ]

    }
  ]

  return (
    <footer
      className={`
        footer
        bg-blue-alternative
        text-white
        font-bold
        text-sm
        py-6
        text-center md:text-left
        rounded-t-3xl
        border-t-2 border-green-dark
      `}
    >
      <div
        className={`
          container
          mx-auto
          flex
          flex-col-reverse lg:flex-row
          items-center
          justify-between
          gap-2
        `}
      >
        <div 
          className={`
            left
            mt-8 lg:mt-0
            flex
            flex-col
            items-center sm:items-start
            justify-center
            gap-10
          `}
        >

          <div
            className={`
              content
              flex
              flex-col sm:flex-row
              items-center
              justify-center
              gap-4 sm:gap-20
            `}
          >
            <Logo />

            <p
              className={`
                slogan
                ml-4
                text-md
              `}
            >
                Llevamos tus ideas {" "}
                <br 
                  className={`
                    hidden md:block
                  `}
                />
                a PRODUCCIÓN
            </p>

            <Socials />
          </div>

          <p
            className={`
              copy
              text-sm
              font-normal
              text-center
            `}
          >
            &copy; 2025 BlixerHost - Todos los derechos reservados
            &nbsp;|&nbsp;
            <Link 
              href="https://linktr.ee/daridev"
              target="_blank"
              className={`
                duration-200
                hover:opacity-75
              `}
            >
              Powered by DariDev Team
            </Link>
          </p>
        </div>

        <div
          className={`
            nav
            flex
            flex-col sm:flex-row
            items-start
            justify-center
          `}
        >
          {
            links.map((category, index) => (
              <div 
                key={index}
                className={`
                  category
                  w-full
                  max-w-xs
                  text-center lg:text-left
                `}
              >
                <h3
                  className={`
                    category-title
                    text-lg
                    my-2
                  `}
                >
                  {category.category}
                </h3>
                <ul className="category-links">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="category-link">
                      <Link 
                        href={link.href}
                        className={`
                          font-normal
                          my-1
                          inline-block
                          duration-200
                          hover:text-blue-medium
                        `}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }

        </div>

      </div>
    </footer>
  )
}