import './product.css';

export default function Product ({product}) {
    return (
        <>
        <div className="product-container">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <div className="btn-container">
                <button style={{background:'linear-gradient(180deg, #f53b82, #f53b57)'}}>Sell</button>
                <input type="number" />{product.quantity}
                <button style={{background:'linear-gradient(180deg, #2ecc71, #1abc9c)'}}>Buy</button>
            </div>
        </div>
        </>
    )
};