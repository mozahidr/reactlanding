import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Question } from './components/Question';
import { Pricing } from './components/Pricing';
import { GetStarted } from './components/GetStarted';
import { Seperator } from './components/Seperator';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Social } from './components/Social';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Seperator />
      <About />
      <Pricing />
      <Question />
      <FAQ />
      <GetStarted />
      <Seperator />
      <Footer />
    </>
  )
}
