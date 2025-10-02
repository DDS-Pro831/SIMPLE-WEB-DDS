import './App.css'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Hero from './components/Hero'
import MissionVision from './components/MissionVision'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Team from './components/Team'

function App() {

  return (
    <>
      <Navbar /> 
      <Hero />
      <About />
      <MissionVision />
      <Offers />
      <Team />
      <Clients />
      <Contact />
    </>
  )
}

export default App
