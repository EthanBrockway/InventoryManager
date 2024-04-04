interface Home {
  id: string
  title: string
  // address: string
  // address2: string
  // street: string
  // state: string
  // postalCode: string
  rooms?: Room[]
  date: Date
  isStaged: boolean
  // furniture: Furniture[]
}
type Furniture = {
  src: string
}
type Room = {
  id: string
  homeId: string
  images?: string[]
  name: string
}
