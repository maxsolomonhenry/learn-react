import './App.css';
import SideBar from './SideBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div className="flex">
      <SideBar/>
      <div className="mx-18 prose max-w-3xl">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects/' element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}