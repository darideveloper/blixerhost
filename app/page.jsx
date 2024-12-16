// Page sections
import HeroSlider from "@/components/layout/HeroSlider"
import MinecraftScale from "@/components/layout/MinecraftScale"
import Faqs from "@/components/layout/Faqs"
import Locations from "@/components/layout/Locations"
import TailwindColorPalette from "@/components/layout/TailwindColorPalette "

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MinecraftScale />
      {/* <Faqs /> */}
      <Locations />
      <TailwindColorPalette/>
    </>
  )
}
