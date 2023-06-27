import heroCirclePng from "~/assets/images/hero/hero-circle.png"
import heroCircle2Png from "~/assets/images/hero/hero-circle-2.png"
import heroSquarePng from "~/assets/images/hero/hero-square.png"
import heroSquare2Png from "~/assets/images/hero/hero-square-2.png"
import heroDotPng from "~/assets/images/hero/hero-dot.png"
import heroTrianglePng from "~/assets/images/hero/hero-triangle.png"

export default function HeroDecoration() {
  return (
    <div className="-z-10">
      <img className="absolute right-[5%] top-[25%] opacity-10" src={heroCirclePng} />
      <img className="absolute right-[10%] top-[50%] animate-bounce " src={heroCircle2Png} />
      <img className="absolute left-[52%] bottom-[25%] animate-slide-x" src={heroSquarePng} />
      <img className="absolute left-1/2 top-1/2 animate-rotate-360" src={heroSquare2Png} />
      <img className="absolute left-[60%] top-1/4 animate-slide-y" src={heroDotPng} />
      <img className="absolute left-[5%] top-1/3 animate-rotate-360" src={heroTrianglePng} />
    </div>
  )
}