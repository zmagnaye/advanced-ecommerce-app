import { useQuery } from "react-query";
import axios from "axios";
import ProductCard from "../components/ProductCard";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const fetchProducts = async () => {
    const { data } = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return data;
};

const ProductsPage = () => {
    const { data: products, isLoading, error } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p> Loading... </p>
    if (error) return <p> Error fetching products. </p>

    return <div className="d-flex flex-wrap justify-content-center">
        {products?.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
};

export default ProductsPage;