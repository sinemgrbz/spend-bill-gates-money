import './receipt.css';

export default function Receipt({ items }) {

    const totalAmount = items.reduce((acc, item) => acc + item.productAmountResult, 0);

    return (
        <div className="receipt-container">
            <h3 className="receipt">Your Receipt</h3>
            <div className="basket">
                {items.map((item, index) => (
                    <div key={index} className="basket-products">
                        <p className="basket-products-name" style={{ fontSize: '20px', fontWeight: '400', color: '#333' }}>{item.productName}</p>
                        <div className="basket-quantity">
                            <p style={{ fontSize: '20px', fontWeight: '400', color: '#333' }}><span>x</span>{item.productQuantity}</p>
                            <p style={{ color: '#24c486', fontSize: '20px' }}><span>$</span>{item.productAmount}</p>
                        </div>
                    </div>
                ))}
                <hr />
                <div className="basket-total">
                    <p style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>TOTAL</p>
                    <p style={{ color: '#24c486', fontSize: '20px' }}><span>$</span>{totalAmount}</p>
                </div>
            </div>
        </div>
    );
}
