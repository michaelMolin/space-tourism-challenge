"use client"

import Header from "./components/Header";
import MenuMobile from "./components/MenuMobile";
import React, { useState } from "react"

export default function Home() {
const [isMenuOpen, setMenuOpen] = useState(false)
const clickMenu = () => setMenuOpen(!isMenuOpen)
  return (
    <div>
      <div className="w-screen h-screen px-6 bg-page-rotated bg-page-mobile md:bg-page flex flex-col"
    style={{ '--page-bg': "url('/earth-bg.jpg')", '--page-bg-mobile': "url('/earth-bg-mobile.jpg')" } as React.CSSProperties}
      >
        <div>
          <Header isMenuOpen={isMenuOpen} clickMenu={clickMenu}/>  
          <MenuMobile isMenuOpen={isMenuOpen} clickMenu={clickMenu} />
        </div>
        <div className="p-300 text-blue-300  flex flex-1 flex-col">
          <div className="h-4/10 flex flex-col justify-center">
            <h2 className="text-preset-5">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className="my-300 text-preset-2 text-white">SPACE</h1>
            <p className="text-preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="h-6/10 flex justify-center items-center">
            <div className="h-[18rem] w-[18rem] flex justify-center items-center rounded-full bg-transparent has-[*:hover]:bg-white/10 transition-colors duration-700">
              <div className="rounded-full opacity-100 bg-white w-[9rem] h-[9rem] text-preset-4 flex justify-center items-center text-black hover:opacity-100" >
                EXPLORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
