import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://shrouded-eyrie-97974.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return [products, setProducts];
};

export default useProducts;
