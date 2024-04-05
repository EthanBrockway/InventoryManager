import styles from "../../page.module.css"
import { motion } from "framer-motion"

import leftarrow from "../../../public/left-arrow.png"
import Image from "next/image"
import stages from "./stages.module.css"
import Link from "next/link"
import { format } from "date-fns"

const today = new Date()
const currentDate = format(today, "mm/dd")
const yesterday = new Date(new Date().setDate(new Date().getDate() + 1))

export const homes: Home[] = [
  { id: "1", title: "Beth", date: today, isStaged: true },
  {
    id: "2",
    title: "Steve",
    date: yesterday,
    isStaged: true,
  },
  {
    id: "5",
    title: "Cara",
    date: today,
    isStaged: true,
    rooms: [
      {
        id: "1",
        homeId: "8",
        name: "Dining room",
        images: ["/couch.jpg"],
      },
      {
        id: "2",
        homeId: "8",
        name: "Living room",
        images: ["/couch.jpg", "/barstool.jpg"],
      },
    ],
  },

  {
    id: "6",
    title: "Ethan",
    date: today,
    isStaged: true,
  },
  {
    id: "7",
    title: "Rachel",
    date: today,
    isStaged: true,
  },
  {
    id: "8",
    title: "Martha",
    date: today,
    isStaged: false,
    rooms: [
      {
        id: "1",
        homeId: "8",
        name: "Dining room",
        images: [
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
        ],
      },
      {
        id: "2",
        homeId: "8",
        name: "Living room",
        images: [
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/couch.jpg",
          "/barstool.jpg",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Martha",
    date: today,
    isStaged: false,
  },

  { id: "11", title: "Martha", date: today, isStaged: false },
]

export default function Stages(props: { onClick: () => void }) {
  return (
    <motion.div
      transition={{ type: "Tween" }}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      className={styles.container2}
      style={{ overflow: "auto" }}
    >
      <button className={stages.backBtn} onClick={props.onClick}>
        <Image
          className={stages.leftarrow}
          width="15"
          height="15"
          alt="image of arrow"
          src={leftarrow}
        ></Image>
        Selection
      </button>
      <h1 className={stages.h1}>In Staging Process</h1>
      <div>
        {homes.map((stage, index) =>
          stage.isStaged === false ? (
            <div className={stages.stagedContainer} key={index}>
              <Link
                href={{
                  pathname: `/homes/${stage.id}`,
                }}
                className={stages.stgbtn}
              >
                <p className={stages.p}>
                  {stage.title} {format(stage.date, "MM/dd")}
                </p>
              </Link>
            </div>
          ) : null
        )}
      </div>
      <h1 className={stages.h1}>Staged</h1>

      {homes.map((stage, index) =>
        stage.isStaged === true ? (
          <div className={stages.stagedContainer} key={index}>
            <Link
              href={{
                pathname: `/homes/${stage.id}`,
              }}
              className={stages.stgbtn}
              prefetch={false}
            >
              {stage.title} {format(stage.date, "MM/dd")}
            </Link>
          </div>
        ) : null
      )}
    </motion.div>
  )
}
