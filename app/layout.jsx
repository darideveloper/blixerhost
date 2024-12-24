// Fonts
import { fontBody } from "@/libs/fonts"

// Global components
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AOSInit from '@/components/utils/AOSInit'

// css
import "@/css/globals.sass"

// Metadata
export const metadata = {
  title: "BlixerHost | Tu mejor opción en hosting de Minecraft",
  description: "Descubre BlixerHost, la mejor opción para hosting de Minecraft. Servidores rápidos y estables desde $1/mes, soporte 24/7, almacenamiento NVMe y panel intuitivo. ¡Comienza tu aventura ahora!",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          antialiased
          ${fontBody.className}
        `}

      >
        <AOSInit />
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
