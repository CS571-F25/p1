import { HashRouter, Route, Routes } from 'react-router'
import './App.css'

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ReactionButton from './components/ReactionButton';

import Home from './pages/Home';
import AboutWISE from './pages/AboutWISE';
import CommunityLife from './pages/CommunityLife';
import FacultyStaff from './pages/FacultyStaff';
import StayConnected from './pages/StayConnected';
import UpcomingEvents from './pages/UpcomingEvents';

function App() {
  return <HashRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutWISE/>}></Route>
      <Route path="/community" element={<CommunityLife/>}></Route>
      <Route path="/staff" element={<FacultyStaff/>}></Route>
      <Route path="/connect" element={<StayConnected/>}></Route>
      <Route path="/events" element={<UpcomingEvents/>}></Route>
    </Routes>
    <ReactionButton />
    <Footer/>
  </HashRouter>
 
}

export default App
