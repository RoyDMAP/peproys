import Product from "../components/Product";
import "./Catalog.css";
import { catalog, categories } from '../services/DataService';

function Catalog(){
    return (
       <div className="catalog">
            <h1>Check our amazing Catalog</h1>

        <div className= 'filter-list'>
            {categories.map(cat => <button className='btn bt-sm btn-success'>{cat}</button>)}
        </div>
            {catalog.map(prod => <Product data={prod} />)}
       </div>
    );
}

export default Catalog;

/* Use Array defined by [] to transform each element for cleaner coding*/