import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.container1}>
          <Link href="/settings" className={styles.settingsImage}>
            <Image
              src="/settings.png"
              alt="Image of cog wheel"
              height="50"
              width="50"
            ></Image>
          </Link>
          <h1 className={styles.h1}>Welcome "username"</h1>
          <Link className={styles.link} href="/newStage">
            Start new Stage
          </Link>
          <Link className={styles.link} href="/addFurniture">
            Add Furniture
          </Link>
          <Link className={styles.link} href="/inventory">
            See Available Inventory
          </Link>
        </div>
        <div className={styles.container2}>Section 2</div>
      </section>
    </main>
  )
}
