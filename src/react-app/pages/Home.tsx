import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Stats from "../components/Stats"
import Services from "../components/Services"
import Projects from "../components/Projects"
import WhyUs from "../components/WhyUs"
import Process from "../components/Process"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home
