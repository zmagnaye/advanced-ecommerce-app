import { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCard = () => {
        dispatch(addToCart({...product, count: 1}));
    };

    return (
        <div className="card" style = {{ width: "18rem", margin: "1rem"}}>
            <img src={product.image} className="card-img-top" alt={product.title} style={{height: "200px", objectFit:"contain"}}/>
            <div className="card-body">
                <h5 className="card-title"> {product.title} </h5>
                <p className="card-text"> ${product.price.toFixed(2)} </p>
                <button onClick={handleAddToCard} className={"btn btn-primary"}> Add to Cart </button> 
            </div>
        </div>
    );
};

export default ProductCard;