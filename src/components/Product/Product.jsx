import { useState } from 'react';
import './product.css';

export default function Product ({product,onBuy}) {

    const [productQuantity,setProductQuantity ]=useState(0)
    


    const handleBuy = () => {
        const newQuantity = productQuantity + 1;
        setProductQuantity(newQuantity);
        const amountResult = newQuantity * product.price;
        onBuy(product.name, newQuantity, product.price, amountResult, true); 
    };

    const handleSell = () => {
        if (productQuantity > 0) {
            const newQuantity = productQuantity - 1;
            setProductQuantity(newQuantity);
            const amountResult = newQuantity * product.price;
            onBuy(product.name, newQuantity, product.price, amountResult, false);
        }
    };
    return (
        <>
            <div className="product-container">
                <img src={product.img} alt={product.name} />
                <p className='product-name'>{product.name}</p>
                <p className='product-price'>${product.price}</p>
                <div className="btn-container">
                    <button style={{background: productQuantity > 0 ? 'linear-gradient(180deg, #f53b82, #f53b57)' : '#f1f2f6', 
                            color: productQuantity > 0 ? '#fff' : '#333'}} onClick={handleSell}>Sell</button>
                    <input type="number" value ={productQuantity} readOnly />
                    <button style={{background:'linear-gradient(180deg, #2ecc71, #1abc9c)'}} onClick={handleBuy}>Buy</button>
                </div>
            </div>
        </>
    )
};