import './App.css'
import Hero from './components/heroSection/Hero'
import Nav from './components/navbar/nav'
import About from './components/aboutSection/About'
import Skills from './components/skillsSection/skills'
import Projects from './components/Projects/projects'
import Contact from './components/get-in-touch/GetInTouch'
function App() {

  return (
    <div className='relative  bg-slate-950'>
      <Nav />
        <div className=' overflow-x-hidden w-full min-h-screen'>
          <Hero />
        </div>
        <div className='md:px-20 px-5   w-full'>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <div className="w-full overflow-hidden relative  pt-10 h-[250px]">
          <div className="footerTriangle size-52 bg-blue-500 absolute bottom-[-50%] left-[50%] rotate-45 translate-x-[-50%] "
            style={{ boxShadow: '0px 0px 10px #2b7fff' }}
          ></div>
          <div className="footerTriangle size-44 bg-blue-500 absolute bottom-[-50%] left-[50%] rotate-45  " style={{ boxShadow: '0px 0px 10px #2b7fff' }}></div>
          <div className="footerTriangle size-44 bg-blue-500 absolute bottom-[-50%] right-[50%] rotate-45  " style={{ boxShadow: '0px 0px 10px #2b7fff' }}></div>
        </div>
      </div>
  )
}

export default App
