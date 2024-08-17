import { useContext, useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import GlobalContext from "../context/GlobalContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(GlobalContext).addProductToCart

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function add() {

        let prod = {
            ...props.data,
            quantity: quantity
        };
        addProductToCart(prod);

    }

    return (
       <div className="product">

            <img src={props.data.image} alt="" />

            <h3>{props.data.title}</h3>

        <div className="prices">
            <label>Price: $ {props.data.price.toFixed(2)}</label>
            <label>Total: $ {getTotal()}</label>
            
        </div>

        <div>
            <QuantityPicker onChange={handleQuantity}/>
            <button onClick={add} className='btn btn-sm btn-primary'>Add to cart</button>
        </div>

        </div>
    );
}

export default Product;

/* Use props communication to share with each component, controls each product display*/

/* multiple products can be added in the DataService.js */