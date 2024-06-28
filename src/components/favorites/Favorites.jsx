import useFetch from "../../hooks/useFetch"
import styles from "./favorites.module.css"
import ProductCard from "../productCard/ProductCard";

const Favorites = () => {
    const { rating } = useFetch()
    return (
        <section className={styles.products}>
            {rating.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    )
}

export default Favorites