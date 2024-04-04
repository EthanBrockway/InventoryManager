"use client"

import { useState } from "react"
import { homes } from "../../components/stages/stages"
import { format } from "date-fns"
import home from "../homes.module.css"
import Furniture from "../../components/furniture/furniture"
export default function Component({ params }: { params: { id: string } }) {
  const activeHome = homes.find((h) => h.id === params.id)
  const [activeRooms, setActiveRooms] = useState<number[]>([])
  if (!activeHome) return
  return (
    <div className={home.container} style={{ overflow: "auto" }}>
      <h1 className={home.h1}>
        {activeHome.title},{activeHome.id}, {format(activeHome.date, "MM/dd")}
      </h1>
      <div className={home.contentContainer}>
        {activeHome.rooms?.map((room, i) => (
          <div key={i} className={home.roomContainer}>
            <button
              className={home.label}
              onClick={() => {
                if (activeRooms.includes(i)) {
                  setActiveRooms((prev) => prev.filter((room) => room !== i))
                } else {
                  setActiveRooms((prev) => [...prev, i])
                }
              }}
            >
              {room.name}
            </button>
            {activeRooms.includes(i) && (
              <div className={home.images}>
                {room.images?.map((image, index) => (
                  <div key={index}>
                    <Furniture furniture={{ src: image }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
