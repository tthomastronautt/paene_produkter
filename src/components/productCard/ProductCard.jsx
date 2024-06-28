import styles from './productCard.module.css';
import { Link } from 'react-router-dom';
import { FcLike, FcDislike } from 'react-icons/fc';
import { useLocalStorage } from '@uidotdev/usehooks';

const ProductCard = ({ product }) => {
  const [favorites, setFavorites] = useLocalStorage('Favorites', [])
  const isFavorite = favorites.includes(product.id)
  
  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== product.id)
        : [...prevFavorites, product.id]
    )
  }

  return (
    <figure className={styles.productCard}>
        <Link to={`/products/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
        </Link>
        
        <figcaption className={styles.productName}>
          <h2>{product.title}</h2>
          {isFavorite ? <FcDislike size={30} onClick={handleLike} className={styles.like} /> : <FcLike size={30} onClick={handleLike} className={styles.like} />} 
        </figcaption>
      </figure>
  );
};

export default ProductCard;