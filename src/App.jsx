import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Directory from './app/root-page'
import Home from './app/home/home-page'
import ReubenPage from './app/student/reuben-page'
import TahirPage from './app/student/tahir-page'
import CrystalPage from './app/student/crystal-page'
import JamesPage from './app/student/james-page'
import JamesKevinPage from './app/james-kevin/james-kevin-page'
import AaronPage from './app/james-kevin/aaron-page'
import MaxwellPage from './app/james-kevin/maxwell-page'
import EmilyPage from './app/james-kevin/emily-page'
import EthanPage from './app/james-kevin/ethan-page'
import AllenPage from './app/james-kevin/allen-page'
import AnnieTudorPage from './app/annie-tudor/annie-tudor-page'
import JuniorPage from './app/annie-tudor/junior-page'
import ScottPage from './app/annie-tudor/scott-page'
import KatePage from './app/annie-tudor/kate-page'
import LucasPage from './app/annie-tudor/lucas-page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/reuben" element={<ReubenPage />} />
        <Route path="/home/tahir" element={<TahirPage />} />
        <Route path="/home/crystal" element={<CrystalPage />} />
        <Route path="/home/james" element={<JamesPage />} />
        <Route path="/james-kevin" element={<JamesKevinPage />} />
        <Route path="/james-kevin/aaron" element={<AaronPage />} />
        <Route path="/james-kevin/maxwell" element={<MaxwellPage />} />
        <Route path="/james-kevin/emily" element={<EmilyPage />} />
        <Route path="/james-kevin/ethan" element={<EthanPage />} />
        <Route path="/james-kevin/allen" element={<AllenPage />} />
        <Route path="/annie-tudor" element={<AnnieTudorPage />} />
        <Route path="/annie-tudor/junior" element={<JuniorPage />} />
        <Route path="/annie-tudor/scott" element={<ScottPage />} />
        <Route path="/annie-tudor/kate" element={<KatePage />} />
        <Route path="/annie-tudor/lucas" element={<LucasPage />} />
      </Routes>
    </Router>
  )
}

export default App
