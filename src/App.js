import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/newproject" element={<NewProject/>} />
        <Route path="/project/:id" element={<Projects/>} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
)}

export default App;
