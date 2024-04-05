import Image from "next/image"
import Link from "next/link"
import home from "../../homes/homes.module.css"
export default function Furniture({ furniture }: { furniture: any }) {
  return (
    <div>
      <Image
        src={furniture.src}
        alt={furniture.src}
        width={100}
        height={100}
        className={home.furniture}
      ></Image>
    </div>
  )
}
