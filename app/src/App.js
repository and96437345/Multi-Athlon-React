import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ResultsPage from './components/ResultsPage';
import PerfomancesPage from './components/PerfomancesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <ResultsPage /> */}
        {/* <PerfomancesPage /> */}
        <Footer />
      </div>  
    </Router>       
  );
}

export default App;
