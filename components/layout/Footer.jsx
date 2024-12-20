import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className={`
        footer
        bg-blue-medium
        text-blue-dark
        font-bold
        text-sm
        py-2
        text-center md:text-left
      `}
    >
      <div
        className={`
          container
          mx-auto
          flex
          flex-col md:flex-row
          items-center
          justify-between
          gap-2
        `}
      >
        <div 
          className={`
            left
            flex
            flex-col md:flex-row
            items-center
            justify-center
            gap-2
          `}
        >

          <Link 
            href="/"
            className={`
              duration-200
              hover:opacity-75
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

          <p
            className={`
              slogan
              ml-4
            `}
          >
              Comienza tu aventura 
              <br 
                className={`
                  hidden md:block
                `}
              />
              a un click de distancia
          </p>
        </div>

        <p
          className={`
            copy
            right
          `}
        >
          &copy; 2025 BlixerHost - Todos los derechos reservados
          <br 
            className={`
              hidden md:block
            `}
          />
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
    </footer>
  )
}