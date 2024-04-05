"use client"

import { useState } from "react"
import { homes } from "../../components/stages/stages"
import { format } from "date-fns"
import home from "../homes.module.css"
import Furniture from "../../components/furniture/furniture"
import PopUp from "../../components/image-popup/popup"
export default function Component({ params }: { params: { id: string } }) {
  const activeHome = homes.find((h) => h.id === params.id)
  const [activeRooms, setActiveRooms] = useState<number[]>([])
  const [activePopup, setActivePopup] = useState(false)
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [roomIndex, setRoomIndex] = useState<number>(0)
  if (!activeHome) return
  return (
    <div className={home.container} style={{ overflow: "auto" }}>
      {activePopup === true && (
        <PopUp
          setActivePopup={setActivePopup}
          activeHome={activeHome}
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
          setRoomIndex={setRoomIndex}
          roomIndex={roomIndex}
        />
      )}

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
                  <a
                    key={index}
                    onClick={() => {
                      setActivePopup(!activePopup)
                      setImageIndex(index)
                      setRoomIndex(i)
                    }}
                  >
                    <Furniture furniture={{ src: image }} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
