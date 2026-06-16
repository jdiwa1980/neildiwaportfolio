
// import heroImg from './assets/hero.png'
// import NavBar from "./layout/navbar"
import Hero from "./sections/hero"
import NavBar from "./layout/navbar"
import Projects from "./sections/projects"
import Footer from "./layout/footer"
import Testimonials from "./sections/testimonials"
import Blogs from "./sections/blogs"
import ContactModal from "./components/ContactModal"
import { useState } from "react"

function App() {

  const [isContactOpen, setIsContactOpen] = useState(false);
  

  return (
      <div className="min-h-screen overflow-x-hidden">
        <NavBar onContactClick={() => setIsContactOpen(true)}/>
        <main>
          <Hero onContactClick={() => setIsContactOpen(true)} />
          <Projects />
          <Testimonials />
          <Blogs />
          <ContactModal 
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />

        </main>
        
        <Footer />
      </div>
      
  )
}

export default App
