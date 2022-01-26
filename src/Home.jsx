import React from "react"
import web from "../src/image/home.png"
import Common from "./Common"

const Home = () => {
  return (
    <>
      <Common name='Grow your Business with' imgsrc={web} visit='/services' btnname='Get Start ' />
    </>
  )
}

export default Home
