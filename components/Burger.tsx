"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignRight } from 'lucide-react';

export default function Burger() {
  const [navbar, setNavbar] = useState(false)

  return (
    <div className="md:hidden lg:hidden">

      {/* Hamburger menu wrapped in button */}
      <button onClick={() => setNavbar(!navbar)}>

        <AlignRight />
      </button>

      {/* Links */}
      <div className={`${navbar ? "block" : "hidden"}
      flex flex-col justify-around items-center
      absolute top-[10vh] h-[90vh] w-screen left-0
      bg-gray-400`}>
        <Link href="/female">Female</Link>
        <Link href="/male">Male</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/products">All Products</Link>
      </div>
    </div>
  )
}

