import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/navigation/Nav';
import Header from './components/header/Header'
import Projects from './components/projects/Projects';
import Background from './components/background/Background';
import History from './components/history/History';
import Footer from './components/footer/Footer';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Background />
        <History />
        <Projects />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;