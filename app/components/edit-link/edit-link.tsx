import Link from "next/link"
import EditIcon from "./edit-icon"
import editLink from "./edit-link.module.css"
export interface EditLinkProps {
  title: string
  date: Date
}

export default function EditLink({ title, date }: EditLinkProps) {
  return (
    <Link
      href={{
        pathname: "/homes",
      }}
      className={editLink.editIcon}
    >
      <EditIcon />
    </Link>
  )
}
