import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts, fetchCategories, fetchProductsByCategory } from "../api/products"
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Home = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");
    const {
        data: categories,
        isLoading: loadingCategories,
    } = useQuery("categories", fetchCategories);
    const {
        data: products,
        isLoading: loadingProducts,
    } = useQuery(["products", category], () => category ? fetchProductsByCategory(category) : fetchProducts());

    if (loadingProducts || loadingCategories) return <p> Loading...</p>

    return (
        <div>
            <h2> Product Catalog </h2>
            <select value ={category} onChange={(e) => setCategory(e.target.value)}>
                <option value=""> All Categories </option>
                {categories.map((cat: string) => (
                    <option key = {cat} value={cat}> {cat} </option>
                ))}
            </select>

            <div style={{display: "grid", gap: "1rem"}}>
                {products.map((product:any) => (
                    <div key = {product.id} style = {{border: "1px solid #ccc", padding: 10}}>
                        <img src = {product.image} alt = {product.title} width = {100}/>
                        <h4> {product.title} </h4>
                        <p> {product.price} </p>
                        <p> {product.category} </p>
                        <p> Rating: {product.rating?.rate} </p>
                        <button onClick = {() => dispatch(addToCart({...product, count: 1}))}> Add to Cart </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;