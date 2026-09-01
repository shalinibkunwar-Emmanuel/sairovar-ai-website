import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Ecosystem from './pages/Ecosystem'
import Learning from './pages/Learning'
import Create from './pages/Create'
import Connect from './pages/Connect'
import Initiatives from './pages/Initiatives'
import PunjabAI from './pages/PunjabAI'
import Teachers from './pages/Teachers'
import Stories from './pages/Stories'
import Resources from './pages/Resources'
import GetInvolved from './pages/GetInvolved'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/create" element={<Create />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/punjab-ai-excellence" element={<PunjabAI />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Route>
    </Routes>
  )
}