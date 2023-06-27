import { cx } from "~/utils"
import Highlight from "./Highlight"

export default function FeatureHighlight({
  className = '',
  title,
  tag,
  description,
  highlights = [],
  ctas = [],
  image
}: {
  className?: string
  title?: string
  tag?: string
  description?: string
  highlights?: any[]
  ctas?: JSX.Element[]
  image?: string
}) {
  return (
    <div className={cx('flex flex-row text-start', className)}>
      <div className="w-2/3 h-auto flex flex-col">
        <p>{tag}</p>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-lg">{description}</p>
        {
          highlights.map((highlight, index) => (
            <Highlight
              key={index}
              className="flex flex-row"
              title={highlight.text}
              description={highlight.description}
              icon={highlight.icon} />
          ))
        }
        <div className="flex flex-row gap-5">
          {
            ctas.map((cta, index) => (
              <cta.type key={index} {...cta.props} />
            ))
          }
        </div>
      </div>
      <div className="w-1/3 h-auto flex flex-col">
        {
          image && (
            <img src={image} />
          )
        }
      </div>
    </div>
  )
}