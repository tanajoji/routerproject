import './App.css';
import {NavLink} from 'react-router-dom'
const App = () => { // 3 app has 2 parts -> navigation and routes -- dont use anchor tags in nav with react router dom since it refreshes the page
  return (
    <div className="App">
      <nav>
        <h1>The Clothing Company</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </div>
  );
}

export default App;
