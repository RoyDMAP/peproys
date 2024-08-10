import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
    return (
       <div className="product">

            <img src={props.data.image} alt="" />

            <h3>{props.data.title}</h3>

        <div className="prices">
            <label>Price: $ {props.data.price}</label>
            <label>Total: $ {props.data.price}</label>
            
        </div>

        <div>
            <QuantityPicker />
            <button>Add</button>
        </div>

        </div>
    );
}

export default Product;

/* Use props communication to share with each component, controls each product display*/

/* multiple products can be added in the DataService.js */