import Image from 'next/image'
import Header from '../components/Header'
import MainSection from '@/components/MainSection'
import Promotion from '@/components/Promotion'
import FeaturedProduct from '@/components/FeaturedProduct'
import Jewellry from '@/components/Jewellry'


export default function Home() {
  return (
    <div className="mx-10">
      <Header />
      <MainSection />
      <Promotion />
      <FeaturedProduct />
      <Jewellry />
    </div>
  )
}
