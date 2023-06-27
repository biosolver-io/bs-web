import { cx } from "~/utils"

export default function Highlight({
  className = '',
  title,
  description,
  icon
}: {
  className?: string
  title?: string
  description?: string
  icon?: string
}) {
  return (
    <div className={cx(className, "flex flex-row")}>
      <img src={icon} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}