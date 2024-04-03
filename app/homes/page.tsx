"use client"

import home from "./homes.module.css"
import Image from "next/image"

const images: Furniture[] = [{ src: "/couch.jpg" }, { src: "/barstool.jpg" }]

function Furniture({ furniture }: { furniture: any }) {
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
export default function Homes({
  searchParams,
}: {
  searchParams: {
    id: string
    title: string
    date: string
  }
}) {
  return (
    <div className={home.container}>
      <h1 className={home.h1}>
        {searchParams.title} {searchParams.date}
        {searchParams.id}
      </h1>
      <div className={home.diningContainer}>
        <button className={home.label}>Dining room</button>
        <div className={home.images}>
          <ul>
            {images.map((image, index) => (
              <div key={index}>
                <Furniture furniture={{ src: image.src }} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
