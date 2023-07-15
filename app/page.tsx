import MainSection from '@/components/MainSection'
import Promotion from '@/components/Promotion'
import FeaturedProduct from '@/components/FeaturedProduct'
import Jewellry from '@/components/Jewellry'
import Footer from '@/components/Footer/Footer'
import Newsletter from '@/components/Newsletter'
import Navbar from '@/components/Navbar/Navbar'
import Copyright from '@/components/Footer/Copyright'



export default function Home() {
  return (
    <div className="mx-8 lg:mx-auto max-w-screen-xl">
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
