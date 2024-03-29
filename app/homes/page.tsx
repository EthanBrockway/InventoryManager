"use client"

import home from "./homes.module.css"

export default function Homes({
  searchParams,
}: {
  searchParams: {
    id: string
    title: string
    date: string
  }
}) {
  return (
    <div className={home.container}>
      <h1 className={home.h1}>
        {searchParams.title} {searchParams.date}
        {searchParams.id}
      </h1>
    </div>
  )
}
