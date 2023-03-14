import './App.css'
import MainLayout from './components/layout/MainLayout'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Home from './components/sections/Home'
import Projects from './components/sections/Projects'

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
        <About />
        <Projects />
        <Contact />
      </MainLayout>
    </div>
  )
}

export default App
