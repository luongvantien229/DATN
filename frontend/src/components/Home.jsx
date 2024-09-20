import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./products/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const response = await axios.get(
          "/new_products"
        );
        setProducts(response.data.new_products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewProducts();
  }, []);
  return <ProductList products={products} />;
}
