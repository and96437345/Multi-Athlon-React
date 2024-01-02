import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Results />
      <ResultsList />
      <Footer />
    </div>
  );
}

export default App;
