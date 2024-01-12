import './App.css';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Navigation/Navigation';
import HomePage from './Customer/Pages/HomePage';
function App() {
  return (
    <div>
      <Navigation />
      <div>
      <HomePage/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
