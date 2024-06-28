import { useEffect, useState } from "react";

const useFetch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products || []);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const rating = products.filter((product) => product.rating > 4.8);
    const beauty = products.filter((product) => product.category.includes("beauty"));
    const fragrances = products.filter((product) => product.category.includes("fragrances"));
    const furniture = products.filter((product) => product.category.includes("furniture"));
    const groceries = products.filter((product) => product.category.includes("groceries"));

    if (!products) {
        return { products: [], rating: [], beauty: [], fragrances: [], furniture: [], groceries: [], loading, error };
    }



    return { products, rating, beauty, fragrances, furniture, groceries, loading, error };
};

export default useFetch;