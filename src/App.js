import './App.css';

import Home from './components/title/title.jsx';
import Navbar from './components/title/navbar/navbar.jsx';
import Products from './components/products/products.jsx';

function App() {
  return (
      <div>
        <Navbar/>
        <Home/>
        <Products/>
      </div>   
  );
}

export default App;
