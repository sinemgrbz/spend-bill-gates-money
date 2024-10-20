import {useEffect, useState } from 'react';
import './App.css'
import Budget from './components/Budget'
import Header from './components/Header'
import Product from './components/Product';
import data from './data.json';

function App() {
  
  const [myBudget, setMyBudget] = useState(100000000000);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    // Burada, verileri yükleyebilirsin (örneğin, bir API'den).
    setProduct(data); // JSON verisini state'e ayarla
}, []);

  return (
    <>
     <div className="container">
      <Header/>
      <Budget myBudget={myBudget}/>
      {
        products.map((item) => (<Product key={item.id} product={item}/>))
      }
     </div>
    </>
  )
}

export default App
