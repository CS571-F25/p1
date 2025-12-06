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
import WISEEvents from './pages/WISEEvents';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutWISE />} />
          <Route path="/community" element={<CommunityLife />} />
          <Route path="/staff" element={<FacultyStaff />} />
          <Route path="/connect" element={<StayConnected />} />
          <Route path="/events" element={<WISEEvents />} />
        </Routes>
        <ReactionButton />
        <Footer />
      </HashRouter>
    </div>
  );
} export default App
