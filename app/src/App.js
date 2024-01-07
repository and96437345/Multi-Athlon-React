import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationForm />
      <ResultsList />
      <Footer />
    </div>
  );
}

export default App;
