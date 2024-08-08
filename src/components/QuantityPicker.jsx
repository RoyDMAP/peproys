import { useState } from 'react';
import "./QuantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        const val = quantity + 1;
        setQuantity(val);
    }

    function decrease() {
        const val = quantity - 1;
        if (val >= 1){
        setQuantity(val);
    }
}

    return (
       <div className="qt-picker">
           <button disabled={quantity == 1} onClick={decrease}>-</button>
           <label>{quantity}</label>
           <button onClick={increase}>+</button>
       </div>
    );
}

export default QuantityPicker;