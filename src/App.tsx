import './App.css'
import GrainEffect from './components/common/Grain'
import GlareEffect from './components/common/Glare'
// import ParticleBackground from './components/common/ParticleBackground'
// import ScrollButton from './components/common/ScrollButton'
import StarsCanvas from './components/common/StarsCanvas'
import MainLayout from './components/layout/MainLayout'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Tools from './components/sections/Tools'

function App() {
  return (
    <div className='font-poppins'>
      <StarsCanvas />
      {/* <ParticleBackground /> */}
      {/* <GlareEffect /> */}
      {/* <GrainEffect /> */}
      <MainLayout>
        <About />
        <Projects />
        <Experience />
        <Tools />
        <Contact />
      </MainLayout>
    </div>
  )
}

export default App
