import { cx } from "~/utils"

export default function GridTile({
  className,
  imgSrc,
  imgAlt,
  title,
  description,
  linkSrc,
  linkText
}: {
  className?: string
  imgSrc?: string
  imgAlt?: string
  title: string
  description?: string
  linkSrc?: string
  linkText?: string
}) {
  return (
    <div className={
      cx(className, "flex flex-col mx-auto justify-center items-center bg-white hover:border-2 hover:shadow-lg hover:scale-105 transition-all ease-in-out shadow-sm rounded-md hover:border-purple-500 hover:text-purple-500")
    }>
      {
        imgSrc && <img src={imgSrc} alt={imgAlt} className="w-16 h-auto mb-5" />
      }
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{description}</p>
      <a href={linkSrc} className="mt-5">{linkText}</a>
    </div>
  )
}