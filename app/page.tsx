"use client"
import styles from "./page.module.css"
import { useState } from "react"
import Options from "./components/options/options"
import Stages from "./components/stages/stages"
import { AnimatePresence } from "framer-motion"
export default function Home() {
  const [isActive, setButtonActive] = useState(true)
  function toggleButton() {
    setButtonActive((prev) => !prev)
  }
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <AnimatePresence initial={false}>
          <Options onClick={() => toggleButton()} />
          <Stages onClick={() => toggleButton()} />
        </AnimatePresence>
      </section>
      <section className={styles.mediaContainer}>
        <AnimatePresence initial={false}>
          {isActive === true ? (
            <Options onClick={() => toggleButton()} />
          ) : (
            <Stages onClick={() => toggleButton()} />
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
