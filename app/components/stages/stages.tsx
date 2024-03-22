import styles from "../../page.module.css"
import { motion } from "framer-motion"
export default function Stages(props: { onClick: () => void }) {
  return (
    <motion.div
      transition={{ type: "Tween" }}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className={styles.container2}
    >
      <div>
        <button className={styles.btn1} onClick={props.onClick}>
          Selection
        </button>
      </div>
    </motion.div>
  )
}
