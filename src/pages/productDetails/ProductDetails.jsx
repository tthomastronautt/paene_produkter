import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";

const ProductDetails = () => {
    const { id } = useParams();
    const { product } = useFetchById(id);

    return (
        <div>
            <PageHeader
            title={product?.title}
            headerImg={product?.thumbnail}
            />
        </div>
    );
};

export default ProductDetails;