"use client"

import Header from "./components/Header";
import Tab from "./components/Tab";
import React, { useState } from "react"

export default function Home() {
const [isMenuOpen, setMenuOpen] = useState(false)
const clickMenu = () => setMenuOpen(!isMenuOpen)
  return (
    <div>
      <div className="w-screen h-screen bg-black px-6 ">
        <Header isMenuOpen={isMenuOpen} clickMenu={clickMenu}/>  



        {/*MENU MOBILE */}
          <div className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed right-0 top-0 h-screen w-2/3 transition-transform duration-300 backdrop-blur-md bg-white/10 pr-6 pl-8 py-8 z-10`}>
              <div onClick={clickMenu} className="flex justify-end">
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
