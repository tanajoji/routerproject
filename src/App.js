import './App.css';
import {NavLink, Routes, Route} from 'react-router-dom'
import { useState } from 'react';


//PAGES
import Home from './components/Home/Home';
import About from './components/About/About';
import Info from './components/About/Info/Info';
import Offers from './components/About/Offers/Offers';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Button from './components/Button/Button';


const App = () => { // 3 app has 2 parts -> navigation and routes -- dont use anchor tags in nav with react router dom since it refreshes the page
  const [loggedIn,setLoggedIn] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  
  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setLoggedIn(!loggedIn)
      setIsLoading(false)
    }, 1500);
  }

  return (
    <div className="App" data-testid="App">
      <nav data-testid="Nav">
        <h1 data-testid="Brand">The Clothing Company</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <Button 
          isUserLoggedIn={loggedIn}
          handleLogin={handleLogin}
          isLoading={isLoading}
          ifUserLoggedIn={"Logout"}
          ifUserLoggedOut={"Login"}
        />
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='info' element={<Info/>}/>
          <Route path='offers' element={<Offers/>}/>
        </Route>
        <Route path='/products' element={<Products isUserLoggedIn={loggedIn} isLoading={isLoading}/>} />
        <Route path='/products/:id/:name' element={<ProductDetails/>} />


        {/* Wildcard route - handle unavailable routes */}
        <Route path='*' element={<h4 className='error'>Route Not Found</h4>}/>
      </Routes>
    </div>
  );
}

export default App;
