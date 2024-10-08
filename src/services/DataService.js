import axios from 'axios';

export const catalog = [
    {
        "title": "Brakes",
        "price": 42.00,
        "image": "/images/brakes.jpeg",
        "category": "Breaking system",
        "_id": 123232,
    },
    {
        "title": "Motor",
        "price": 125.00,
        "image": "/images/motor.jpeg",
        "category": "Engine",
        "_id": 123232,
    },
    {
        "title": "Turbo",
        "price": 1500.00,
        "image": "/images/turbo.jpeg",
        "category": "Engine",
        "_id": 123232,
    },
    {
        "title": "AC Compressor",
        "price": 300.00,
        "image": "/images/A:C Compressor.webp",
        "category": "Engine",
        "_id": 123232,
    },
    {
        "title": "Spark Plug",
        "price": 25.00,
        "image": "/images/Spark Plug.jpeg",
        "category": "Ignition",
        "_id": 123232,
    },
    {
        "title": "Radiator",
        "price": 125.00,
        "image": "/images/radiator.jpeg",
        "category": "Cooling system",
        "_id": 123232,
    },
    {
        "title": "Muffler",
        "price": 250.00,
        "image": "/images/muffler.jpeg",
        "category": "Exhaust",
        "_id": 123232,
    },
    {
        "title": "Camshaft",
        "price": 300.00,
        "image": "/images/camshaft.jpeg",
        "category": "Engine",
        "_id": 123232,
    },
]

export const categories = ["Engine", "Breakingsystem", "ignition", "Cooling system", "Exhaust"];

class DataService {

    async getCatalog() {
        const resp = await axios.get("https://127.0.0.1:5000/api/products");
        return resp.data;
    }

    async getCategories() {
        const resp = await axios.get("https://127.0.0.1:5000/api/categories");
        return resp.data;
    }

    async saveProduct(product) {
        const resp = await axios.post("https://127.0.0.1:5000/api/products", product);
        return resp.data;
    }
}

export default new DataService();