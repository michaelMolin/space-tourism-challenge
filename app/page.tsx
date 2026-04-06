"use client"

import Header from "./components/Header";
import Tab from "./components/Tab";
import React, { useState } from "react"

export default function Home() {
const [isMenuOpen, setMenuOpen] = useState(false)
const clickMenu = () => setMenuOpen(!isMenuOpen)
  return (
    <div>
      <div className="w-screen h-screen px-6 bg-page-rotated bg-page-mobile md:bg-page"
    style={{ '--page-bg': "url('/earth-bg.jpg')", '--page-bg-mobile': "url('/earth-bg-mobile.jpg')" } as React.CSSProperties}
  >
        <Header isMenuOpen={isMenuOpen} clickMenu={clickMenu}/>  
        <div className="p-300 text-blue-300 text-center">
          <h2 className="text-preset-5">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="my-300 text-preset-2 text-white">SPACE</h1>
          <p className="text-preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>


        {/*MENU MOBILE */}
          <div className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed right-0 top-0 h-screen w-2/3 transition-transform duration-300 backdrop-blur-md bg-white/10 pr-6 pl-8 py-8 z-10`}>
              <div onClick={clickMenu} className="flex justify-end mb-1000">
                  <img src="close.svg" alt="close logo" />
              </div>
              <div className="text-left">
                <Tab voice="HOME" url="https://www.google.com" index="00" is_menu={true}></Tab>
                <Tab voice="DESTINATION" url="https://www.google.com" index="01" is_menu={true}></Tab>
                <Tab voice="CREW" url="https://www.google.com" index="02" is_menu={true}></Tab>
                <Tab voice="TECHNOLOGY" url="https://www.google.com" index="03" is_menu={true}></Tab>
              </div>
          </div>
      </div>
    </div>
  );
}
