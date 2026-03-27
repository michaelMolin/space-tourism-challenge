"use client"
import Tab from "./Tab"
import React, { useState } from "react"
export default function MainMenu()
{
    const [isOpen, setOpen] = useState(false)
    const clickMenu = () => setOpen(!isOpen)
    return (
        <div>
            {/*MENU DESKTOP*/}
            <div className="hidden md:flex md:justify-around md:items-center">
                <Tab voice="HOME" url="https://www.google.com" index="00" is_menu={true}></Tab>
                <Tab voice="DESTINATION" url="https://www.google.com" index="01" is_menu={true}></Tab>
                <Tab voice="CREW" url="https://www.google.com" index="02" is_menu={true}></Tab>
                <Tab voice="TECHNOLOGY" url="https://www.google.com" index="03" is_menu={true}></Tab>
            </div>

            {/*MENU MOBILE */}
            <div className="md:hidden">
                <div onClick={clickMenu}>
                    <button className="bg-white">Hambuger</button>
                </div>

                <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed right-0 top-0 h-screen transition-transform duration-300 my-400`}>
                    <Tab voice="HOME" url="https://www.google.com" index="00" is_menu={true}></Tab>
                    <Tab voice="DESTINATION" url="https://www.google.com" index="01" is_menu={true}></Tab>
                    <Tab voice="CREW" url="https://www.google.com" index="02" is_menu={true}></Tab>
                    <Tab voice="TECHNOLOGY" url="https://www.google.com" index="03" is_menu={true}></Tab>
                </div>
            </div>
        </div>
    )
}