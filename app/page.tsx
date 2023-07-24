import Image from 'next/image'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import PetCollections from './components/PetCollections'
import SoulMate from './components/SoulMate'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className="flex flex-col space-y-16 bg-white text-[#17224D]">
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <PetCollections/>
      <SoulMate/>
      <Blogs/>
      <Footer/>
    </main>
  )
}
