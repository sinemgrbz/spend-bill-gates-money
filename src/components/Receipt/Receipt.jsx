import './receipt.css';

export default function Receipt({ items }) {

    const totalAmount = items.reduce((acc, item) => acc + item.productAmountResult, 0);

    return (
        <div className="receipt-container">
            <h3 className="receipt">Your Receipt</h3>
            <div className="basket">
                {items.map((item, index) => (
                    <div key={index} className="basket-products">
                        <p className="basket-products-name" >{item.productName}</p>
                        <div className="basket-quantity">
                            <p className="basket-quantity-product"><span>x</span>{item.productQuantity}</p>
                            <p className="basket-quantity-amount"><span>$</span>{item.productAmount}</p>
                        </div>
                    </div>
                ))}
                <hr />
                <div className="basket-total">
                    <p className='basket-total-name'>TOTAL</p>
                    <p className='basket-total-amount'><span>$</span>{totalAmount}</p>
                </div>
            </div>
        </div>
    );
}
