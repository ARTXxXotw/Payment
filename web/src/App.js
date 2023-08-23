import logo from './logo.svg';
import './App.css';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';

function App() {

  const [showitem,setShowItem]=useState(false)

  return (
    <div className="App">
      <h1>The Spatula Store</h1>
     {showitem?<StripeContainer/>:<><h3>$10.00</h3><img src={logo} alt="" /><button onClick={()=>setShowItem(true)}>Purchase Spatula</button></>}
    </div>
  );
}

export default App;
