import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer'
import Button from './component/button/Button';
import Gto from './gtosint/gto';

function App() {
  return (
    <div className="App">
      <Header/>
      <Button/>
      <Gto/>
      <Footer/>
    </div>
  );
}

export default App;
