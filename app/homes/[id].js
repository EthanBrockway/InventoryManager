import { useRouter } from "next/router"

const Component = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>{id}</p>
}

export default Component
