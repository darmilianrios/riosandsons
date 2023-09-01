import * as React from "react"
import WatchGraphic from "../components/WatchGraphic"
import RASLogo from "../components/icons/Icons"

const IndexPage = () => {
  return (
    <main className="absolute bg-gray-400 w-full h-full inset-0 flex justify-center items-center top-0 left-0">
      <div className=" grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-xl">
        <div className="md:-translate-x-8 w-[400px] aspect-square">
          <WatchGraphic />
        </div>
        <div className="text-[#E1B900] gap-4 text-center flex justify-center items-center flex-col py-10 md:py-0 w-full">
          <RASLogo className={"w-10/12 mx-auto"} />
          <h2>Coming Soon</h2>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
