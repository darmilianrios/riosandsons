import * as React from "react"
import WatchGraphic from "../components/WatchGraphic"

const IndexPage = () => {
  return (
    <main className=" bg-gray-400 w-full h-full inset-0 flex justify-center items-center top-0 left-0">
      <div className=" grid grid-cols-[1fr_auto] bg-white">
        <div className=" w-[400px] aspect-square border-4">
          <WatchGraphic />
        </div>
        <div>
          <h1 className="text-4xl">Rios and Sons Watchmers</h1>
          <h2>Coming Soon</h2>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
