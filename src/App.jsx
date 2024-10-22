import {useEffect, useState } from 'react';
import './App.css'
import Budget from './components/Budget'
import Header from './components/Header'
import Product from './components/Product';
import data from './data.json';
import Receipt from './components/Receipt';

function App() {
  
  const [myBudget, setMyBudget] = useState(100000000000);
  const [products, setProduct] = useState([]);
  const [receipt, setReceipt] = useState([]);

  useEffect(() => {
    setProduct(data); 
}, []);

const handleReceiptUpdate = (productName, productQuantity, productPrice, productAmountResult, isBuy)  => {
  setReceipt(prevReceipt => {
    const existingItemIndex = prevReceipt.findIndex(item => item.productName === productName);
    

    if (productQuantity === 0) {
      return prevReceipt.filter(item => item.productName !== productName);
    }

    if (existingItemIndex !== -1) {

      const updatedReceipt = [...prevReceipt];
      updatedReceipt[existingItemIndex].productQuantity = productQuantity;
      updatedReceipt[existingItemIndex].productAmountResult = productAmountResult;
      updatedReceipt[existingItemIndex].productAmount = productPrice; 
      return updatedReceipt;
    } else {

      return [...prevReceipt, { productName, productQuantity, productAmount: productPrice, productAmountResult }];
    }
  });

  const amountChange = isBuy ? -productPrice : productPrice; 
  const newBudget = myBudget + amountChange; 

  if (newBudget < 0) {
      alert("Bütçenizi aşıyorsunuz!");
  } else {
      setMyBudget(newBudget); 
  }
};




  return (
    <>
     <div className="container">
      <Header/>
      <Budget myBudget={myBudget}/>
      <div className='products-container'>
      {
        products.map((item) => (
             <Product 
                key={item.id} 
                product={item}
                onBuy={(name, quantity, price, amountResult, isBuy) => handleReceiptUpdate(name, quantity, price, amountResult, isBuy)} 
               />))
      }
      </div>
      {receipt.length > 0 && (
        <div>
        <Receipt items={receipt} /> 
        </div>
)}
     </div>
    </>
  )
}

export default App
