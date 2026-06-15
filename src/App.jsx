
// import heroImg from './assets/hero.png'
// import NavBar from "./layout/navbar"
import Hero from "./sections/hero"
import NavBar from "./layout/navbar"
import Projects from "./sections/projects"
import Footer from "./layout/footer"
import Testimonials from "./sections/testimonials"
import Blogs from "./sections/blogs"

function App() {
  

  return (
      <div className="min-h-screen overflow-x-hidden">
        <NavBar />
        <main>
          <Hero />
          <Projects />
          <Testimonials />
          <Blogs />
        </main>
        
        <Footer />
      </div>
      
  )
}

export default App
