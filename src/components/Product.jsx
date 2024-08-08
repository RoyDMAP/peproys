import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product() {
    return (
       <div className="product">

            <img src="/images/brakes.jpeg" alt=" " />

            <h3>I'm a product</h3>

        <div className="prices">
            <label>$ price</label>
            <label>$ total</label>
        </div>

        <div>
            <QuantityPicker />
            <button>Add</button>
        </div>

        </div>
    );
}

export default Product;