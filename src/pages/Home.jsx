import PageHeader from "../components/pageHeader/PageHeader"
import SectionHeader from "../components/sectionHeader/SectionHeader"
import useFetchById from "../hooks/useFetchById";
import Favorites from "../components/favorites/Favorites";
import MyFavorites from "../components/myFavorites/MyFavorites";

const Home = () => {

    const { product, loading, error } = useFetchById(5);
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <section>
            <PageHeader 
            title="Beauty Products" 
            subTitle="For your beauty needs" 
            headerImg={product?.thumbnail}
            />
            <SectionHeader 
            title="Favorite Products" 
            />
            <Favorites />
            <SectionHeader 
            title="My Favorites" 
            />
            <MyFavorites />
        </section>
    )
}

export default Home