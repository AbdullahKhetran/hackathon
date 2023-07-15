"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignJustify, X, ShoppingCart } from 'lucide-react';


export default function Burger() {
  const [navbar, setNavbar] = useState(false)

  function changeState() {
    setNavbar(!navbar)
  }

  const linkStyle = "text-xl"

  return (
    <div className="z-50 ">

      {/* Hamburger menu wrapped in button */}
      <button onClick={changeState}>
        {navbar ? <X size={38} /> : <AlignJustify size={38} />}
      </button>

      {/* Links */}
      <div className={`${navbar ? "block" : "hidden"}
      flex flex-col justify-center items-center gap-y-4
      fixed top-[10vh] left-0 w-screen h-[90%]
      bg-white `}>

        {/* add circle icon here from shadcn */}
        <button className="flex flex-col relative items-end p-5 bg-socialIconbg rounded-[50%]">

          <span className="bg-[#f02d34] rounded-[50%] w-6 h-6 text-[#eee] text-center font-semibold  ">0</span>
          <ShoppingCart size={32} />

          {/* make the value dynamic */}
        </button>



        <Link href="/female" onClick={changeState} className={linkStyle}>Female</Link>
        <Link href="/male" onClick={changeState} className={linkStyle}>Male</Link>
        <Link href="/kids" onClick={changeState} className={linkStyle}>Kids</Link>
        <Link href="/products" onClick={changeState} className={linkStyle}>All Products</Link>
      </div>
    </div>
  )
}

