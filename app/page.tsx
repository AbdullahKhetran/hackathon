import MainSection from '@/components/MainSection'
import Promotion from '@/components/Promotion'
import FeaturedProduct from '@/components/FeaturedProduct'
import Jewellry from '@/components/Jewellry'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Copyright from '@/components/Copyright'
import Newsletter from '@/components/Newsletter'



export default function Home() {
  return (
    <div className="mx-8 max-w-screen-2xl">
      <Navbar />
      <MainSection />
      <Promotion />
      <FeaturedProduct />
      <Jewellry />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  )
}
