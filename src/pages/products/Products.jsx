import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/button/Button";
import styles from "./products.module.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import ProductCard from "../../components/productCard/ProductCard";

const Products = () => {
    const { products, product, rating, beauty, fragrances, furniture, groceries, loading, error } = useFetch();
    const [filteredProducts, setFilteredProducts] = useState([...beauty, ...fragrances, ...furniture, ...groceries]);
    const [activeFilter, setActiveFilter] = useState("All");

    
     
            /* switch (activeFilter) {
                case "All":
                    setFilteredProducts(products);
                    break;
                case "Beauty":
                    setFilteredProducts(beauty);
                    break;
                case "Fragrances":
                    setFilteredProducts(fragrances);
                    break;
                default:
                    setFilteredProducts([]);
                    break;
            } */
        
    const filters = {
        All: products,
        Beauty: beauty,
        Fragrances: fragrances,
        Furniture: furniture,
        Groceries: groceries,
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setFilteredProducts(filters[filter]);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const productsArray = 
        filteredProducts?.length > 0 ? filteredProducts : products;

    return (
        <section className={styles.products}>
            <PageHeader 
            title="Products" 
            subTitle="" 
            headerImg={product?.thumbnail}
            />
            <div className={styles.filterButtons}>
                <Button 
                    title="All" 
                    className={activeFilter === "All" ? styles.active : ""} 
                    onClick={() => handleFilterChange("All")} 
                />
                <Button 
                    title="Beauty" 
                    className={activeFilter === "Beauty" ? styles.active : ""} 
                    onClick={() => handleFilterChange("Beauty")} 
                />
                <Button 
                    title="Fragrances" 
                    className={activeFilter === "Fragrances" ? styles.active : ""} 
                    onClick={() => handleFilterChange("Fragrances")} 
                />
                <Button 
                    title="Furniture" 
                    className={activeFilter === "Furniture" ? styles.active : ""} 
                    onClick={() => handleFilterChange("Furniture")} 
                />
                <Button 
                    title="Groceries" 
                    className={activeFilter === "Groceries" ? styles.active : ""} 
                    onClick={() => handleFilterChange("Groceries")} 
                />
            </div>
            <ul className={styles.productList}>
                {productsArray ? (
                    productsArray.map((product) => (
                        <li key={product.id}>
                            <ProductCard product={product} />
                        </li>
                    ))
                ) : (
                    <li><p>No products available.</p></li>
                )}
            </ul>
        </section>
    );
};

export default Products;