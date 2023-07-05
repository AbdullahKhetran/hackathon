import Image from 'next/image'
import MainSection from '@/components/MainSection'
import Promotion from '@/components/Promotion'
import FeaturedProduct from '@/components/FeaturedProduct'
import Jewellry from '@/components/Jewellry'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Copyright from '@/components/Copyright'



export default function Home() {
  return (
    <div className="mx-10 max-w-screen-2xl">
      <Navbar />
      <MainSection />
      <Promotion />
      <FeaturedProduct />
      <Jewellry />
      <Footer />
      <Copyright />
    </div>
  )
}
