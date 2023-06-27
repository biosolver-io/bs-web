export default function CallToAction({
  className = '',
  title,
  subtitle,
  description,
  linkSrc,
}: {
  className: string
  title?: string
  subtitle?: string
  description?: string
  linkSrc: string
}
) {
  return (
    <a href={linkSrc} className={className}>
      {
        title && <p className="text-2xl font-bold">{title}</p>
      }
      {
        subtitle && <p className="text-xl">{subtitle}</p>
      }
      {
        description && <p>{description}</p>
      }
    </a>
  )
}