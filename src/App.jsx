import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Menu from './components/Menu'
import Ambience from './components/Ambience'
import Features from './components/Features'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Menu />
        <Ambience />
        <Features />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}