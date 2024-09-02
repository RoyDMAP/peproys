import Product from "../components/Product";
import "./Catalog.css";
//import GlobalContext from '../context/GlobalContext';
import DataService, { catalog, categories } from '../services/DataService';
import { useEffect, useState } from "react";
//import { useEffect } from "react";

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    //const catalogGlobal = useContext(GlobalContext).catalog;

    async function loadProducts() {
        let prods = await DataService.getCatalog();
        setProducts(prods);

    }

    async function loadCategories() {
        let cats = await DataService.getCategories();
        setCategories(cats);

    }

    useEffect(function() {
        loadProducts();
        loadCategories();
    }, []);
   
    
    return (
       <div className="catalog">
            <h1>Check our amazing Catalog</h1>

        <div className= 'filter-list'>
            {categories.map(cat => <button className='btn bt-sm btn-success'>{cat}</button>)}
        </div>

        <div className='product-list'>
            {products.map(prod => <Product data={prod} />)}
        </div>
            
       </div>
    );
}

export default Catalog;

/* Use Array defined by [] to transform each element for cleaner coding*/