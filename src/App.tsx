import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Error404 from './components/Error/Error404';
import ItemDetailContainer from './components/Containers/ItemListContainer/ItemDetailContainer';

function App() {

  // const [quantityProduct, setQuantityProduct] = useState<number>(0);
  const quantityProduct = 0;

  return (
    <div className="App">
      <NavBar quantityProduct={quantityProduct} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Navigate to={"/"} replace />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail:id' element={<ItemDetailContainer />} /> 
        <Route path='/*' element={<Error404 />} />        
      </Routes>
      <footer className='App-footer'>
        Footer
      </footer>
    </div>
  );
} 
export default App;
