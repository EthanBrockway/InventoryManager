import styles from "../../page.module.css"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import arrow from "../../../public/right-arrow.png"

export default function Options(props: { onClick: () => void }) {
  const MotionLink = motion(Link)
  return (
    <motion.div
      transition={{ type: "Inertia", delay: 2 }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container1}
    >
      <button className={styles.btn2} onClick={props.onClick}>
        Stages
        <Image src={arrow} alt="image of arrow" width="15" height="15"></Image>
      </button>
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
    </motion.div>
  )
}
