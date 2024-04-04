import Image from "next/image"
import home from "../../homes/homes.module.css"
export default function Furniture({ furniture }: { furniture: any }) {
  return (
    <Image
      src={furniture.src}
      alt={furniture.src}
      width={100}
      height={100}
      className={home.furniture}
    ></Image>
  )
}
