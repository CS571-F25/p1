import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutWISE/>}></Route>
      <Route path="/community" element={<CommunityLife/>}></Route>
      <Route path="/staff" element={<FacultyStaff/>}></Route>
      <Route path="/connect" element={<StayConnected/>}></Route>
      <Route path="/events" element={<UpcomingEvents/>}></Route>
    </Routes>
  </HashRouter>
 
}

export default App
