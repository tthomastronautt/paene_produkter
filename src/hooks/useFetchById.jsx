import { useEffect, useState } from "react";

const useFetchById = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProductById = async (id) => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductById(id);
  }, [id]);

    return {product, loading, error};
};


export default useFetchById