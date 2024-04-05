import Image from "next/image"
import couch from "../../../public/couch.jpg"
import styles from "./popup.module.css"
import leftArrow from "../../../public/left-arrow.png"
import rightArrow from "../../../public/right-arrow.png"
import exitIcon from "../../../public/exitIcon.svg"
import { useState } from "react"
export default function PopUp({
  setActivePopup,
  activeHome,
  setImageIndex,
  imageIndex,
  setRoomIndex,
  roomIndex,
}: {
  setActivePopup: any
  activeHome: any
  imageIndex: number
  setImageIndex: any
  setRoomIndex: any
  roomIndex: number
}) {
  const rooms = activeHome?.rooms
  const images = activeHome?.rooms[roomIndex].images
  const selectedImage = images[imageIndex]
  return (
    <div className={styles.imageDiv}>
      <a
        className={styles.exitBtn}
        onClick={() => {
          setActivePopup(false)
        }}
      >
        <Image src={exitIcon} alt="exit" width={28} height={28}></Image>
      </a>
      <a className={styles.prevBtn} onClick={() => {}}>
        <Image src={leftArrow} alt="left arrow" width={25} height={25}></Image>
      </a>

      <Image
        src={selectedImage}
        alt="picture of couch"
        width={500}
        height={500}
      ></Image>
      <a
        className={styles.nextBtn}
        onClick={() => {
          if (imageIndex >= images.length - 1) {
            setRoomIndex(roomIndex + 1)
            setImageIndex(0)
            if (roomIndex >= rooms.length - 1) {
              setRoomIndex(0)
            }
          } else {
            setImageIndex(imageIndex + 1)
          }

          console.log(rooms.length)
          console.log(roomIndex)
        }}
      >
        <Image
          src={rightArrow}
          alt="right arrow"
          width={25}
          height={25}
        ></Image>
      </a>
    </div>
  )
}
