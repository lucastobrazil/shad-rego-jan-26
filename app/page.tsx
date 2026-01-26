import fs from "fs"
import path from "path"
import HomeContent from "./home-content"

export default function Home() {
  const globalsCss = fs.readFileSync(
    path.join(process.cwd(), "app/globals.css"),
    "utf-8"
  )

  return <HomeContent globalsCss={globalsCss} />
}
