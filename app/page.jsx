// Page sections
import AnimatedBg from "@/components/layout/AnimatedBg"
import HeroSlider from "@/components/layout/HeroSlider"
import MinecraftScale from "@/components/layout/MinecraftScale"
import Faqs from "@/components/layout/Faqs"
import Locations from "@/components/layout/Locations"
import Locations2 from "@/components/layout/Locations2"
import TailwindColorPalette from "@/components/layout/TailwindColorPalette "

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MinecraftScale />
      <Faqs />
      <Locations />
      <Locations2 />
    </>
  )
}
