import { cx } from "~/utils"

export default function ListHighlight({
  title,
  subtitle,
  description,
  bullets = [],
  className
}: {
  title?: string,
  subtitle?: string,
  description?: string,
  className?: string,
  bullets?: string[]
}) {
  return (
    <div className={cx(className)}>
      {title && <h1 className="text-4xl font-bold">{title}</h1>}
      {subtitle && <h3 className="text-2xl font-semibold">{subtitle}</h3>}
      {description && <p className="text-lg">{description}</p>}
      {
        bullets.map((bullet, index) => (
          <div key={index} className="flex items-center mt-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
            <p className="text-lg">{bullet}</p>
          </div>
        ))
      }
    </div>
  )
}
