import Image from 'next/image'
import Header from '../components/Header'
import MainSection from '@/components/MainSection'
import Promotions from '@/components/Promotions'


export default function Home() {
  return (
    <div className="mx-10">
      <Header />
      <MainSection />
      <Promotions />
    </div>
  )
}
