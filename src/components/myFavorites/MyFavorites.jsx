import ProductCard from "../productCard/ProductCard";
import { useLocalStorage } from '@uidotdev/usehooks';
import useFetch from "../../hooks/useFetch";
import styles from "./myFavorites.module.css"

const MyFavorites = () => {
    const { products } = useFetch();
    const [favorites] = useLocalStorage("Favorites", [])

    const favoriteProducts = products.filter((product) => 
        favorites.includes(product.id)
    )
    console.log(favoriteProducts)

    return (
        <section className={styles.products}>
            {favoriteProducts?.map((product) => (
                <ProductCard isFavorite={true} key={product.id} product={product} />
            ))}
        </section>
    );
};

export default MyFavorites;