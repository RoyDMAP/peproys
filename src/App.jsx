import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     
     <Catalog />

      <Footer />


    </div>
  );
}

export default App; 
