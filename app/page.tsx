"use client"

import Header from "./components/Header";
import MenuMobile from "./components/MenuMobile";
import React, { useState } from "react"

export default function Home() {
const [isMenuOpen, setMenuOpen] = useState(false)
const clickMenu = () => setMenuOpen(!isMenuOpen)
  return (
    <div>
      <div className="w-screen h-screen px-6 bg-page-mobile flex flex-col md:bg-page md:p-0"
    style={{ '--page-bg-desktop': "url('/earth-bg.jpg')", '--page-bg-mobile': "url('/earth-bg-mobile.jpg')" } as React.CSSProperties}
      >
        <div>
          <Header isMenuOpen={isMenuOpen} clickMenu={clickMenu}/>  
          <MenuMobile isMenuOpen={isMenuOpen} clickMenu={clickMenu} />
        </div>
        <div className="p-300 text-blue-300  flex flex-1 flex-col md:flex-row md:py-1600 md:px-2000">
          <div className="h-4/10 flex flex-col justify-center md:h-full md:items-baseline md:justify-end md:w-1/2 md:max-w-[33.75rem]">
            <h1 className="text-preset-5-mobile md:text-preset-5 text-center md:text-left"> SO, YOU WANT TO TRAVEL TO </h1>
            <h2 className="my-300 text-preset-2 text-white">SPACE</h2>
            <p className="text-preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="h-6/10 flex justify-center items-center md:h-full md:items-end md:justify-end md:w-1/2 md:max-w-[33.75rem]">
            <div className="rounded-full bg-white w-[9rem] h-[9rem] text-preset-4 flex justify-center items-center text-black md:w-[17rem] md:h-[17rem] transition-shadow duration-700 hover:shadow-[0_0_0_6rem_rgba(255,255,255,0.1)]" >
              EXPLORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
