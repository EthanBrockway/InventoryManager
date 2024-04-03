"use client"
import Link from "next/link"
import login from "./loginpage.module.css"
import Image from "next/image"
import backgroundImage from "../../public/organizeFiles.jpg"
import { motion } from "framer-motion"

export default function Login() {
  const MotionLink = motion(Link)
  return (
    <main>
      <Image
        src={backgroundImage}
        style={{
          zIndex: "-2",
        }}
        alt="background image"
        fill={true}
      ></Image>
      <section className={login.section}>
        <h1 className={login.h1}>Inventory Manager</h1>
        <div className={login.container}>
          <div className={login.loginbox}>
            <motion.input
              type="name"
              whileHover={{ scale: 1.1 }}
              whileFocus={{ scale: 1.1 }}
              className={login.input}
              placeholder="Username"
            ></motion.input>
            <motion.input
              type="password"
              whileHover={{ scale: 1.1 }}
              whileFocus={{ scale: 1.1 }}
              className={login.input}
              placeholder="Password"
            ></motion.input>
            <MotionLink
              whileTap={{ scale: 0.9 }}
              className={login.link}
              href="/homepage"
            >
              Login
            </MotionLink>
            <MotionLink
              whileTap={{ scale: 0.9 }}
              className={login.link2}
              href="/signup"
            >
              Signup
            </MotionLink>
          </div>
        </div>
      </section>
    </main>
  )
}
