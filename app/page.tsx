"use client"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
export default function Home() {
  const MotionLink = motion(Link)
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.container1}>
          <MotionLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/settings"
            className={styles.settingsImage}
          >
            <Image
              className={styles.settingsIcon}
              src="/settings.png"
              alt="Image of cog wheel"
              height="50"
              width="50"
            ></Image>
          </MotionLink>
          <h1 className={styles.h1}>Welcome "username"</h1>
          <MotionLink
            whileTap={{ scale: 0.9 }}
            className={styles.link}
            href="/newStage"
          >
            Start new Stage
          </MotionLink>
          <MotionLink
            whileTap={{ scale: 0.9 }}
            className={styles.link}
            href="/addFurniture"
          >
            Add Furniture
          </MotionLink>
          <MotionLink
            whileTap={{ scale: 0.9 }}
            className={styles.link}
            href="/inventory"
          >
            See Available Inventory
          </MotionLink>
        </div>
        <div className={styles.container2}>Section 2</div>
      </section>
    </main>
  )
}
