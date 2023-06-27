import { cx } from "~/utils"

export default function SimpleHighlight({
  title,
  subtitle,
  description,
  className
}: {
  title?: string,
  subtitle?: string,
  description?: string,
  className?: string
}) {
  return (
    <div className={cx(className)}>
      {title && <h1 className="text-4xl font-bold">{title}</h1>}
      {subtitle && <h3 className="text-2xl font-semibold">{subtitle}</h3>}
      {description && <p className="text-lg mt-5">{description}</p>}
    </div>
  )
}
