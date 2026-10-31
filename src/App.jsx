import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import AchiveMents from './AchiveMents';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Home />
        <Skills />
        <Project />
        <AchiveMents />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
