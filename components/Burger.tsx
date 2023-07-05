"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignJustify, X } from 'lucide-react';


export default function Burger() {
  const [navbar, setNavbar] = useState(false)

  return (
    <div className="z-50 ">

      {/* Hamburger menu wrapped in button */}
      <button onClick={() => setNavbar(!navbar)}>
        {navbar ? <X size={38} /> : <AlignJustify size={38} />}
      </button>

      {/* Links */}
      <div className={`${navbar ? "block" : "hidden"}
      flex flex-col justify-around items-center
      fixed top-[10vh] left-0 w-screen h-[90%]
      bg-gray-400 `}>
        <Link href="/female" onClick={() => setNavbar(!navbar)}>Female</Link>
        <Link href="/male" onClick={() => setNavbar(!navbar)}>Male</Link>
        <Link href="/kids" onClick={() => setNavbar(!navbar)}>Kids</Link>
        <Link href="/products" onClick={() => setNavbar(!navbar)}>All Products</Link>
      </div>
    </div>
  )
}

