import './App.css'
import ParticleBackground from './components/common/ParticleBackground'
import ScrollButton from './components/common/ScrollButton'
import MainLayout from './components/layout/MainLayout'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
function App() {
  return (
    <div className='App font-poppins'>
      {/* <ParticleBackground /> */}
      <MainLayout>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </MainLayout>
      <ScrollButton />
    </div>
  )
}

export default App
