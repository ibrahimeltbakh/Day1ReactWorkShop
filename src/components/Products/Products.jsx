import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  let Buttons = [
    { name: "All", category: "all" },
    { name: "Mens", category: "men's clothing" },
    { name: "Womens", category: "women's clothing" },
    { name: "Jewelery", category: "jewelery" },
    { name: "Electronics", category: "electronics" },
  ];

  let [products, setProducts] = useState([]);
  let [productsFilterd, setproductsFilterd] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setproductsFilterd(response.data);
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchData();
  }, []);
  const filterdProducts = (category) => {
    if (category === "all") {
      setproductsFilterd(products);
    } else {
      setproductsFilterd(products.filter((item) => item.category === category));
    }
  };
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center justify-content-center gap-3  my-5">
        {Buttons.map((button) => (
          <button
            key={button.category}
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              filterdProducts(button.category);
            }}>
            {button.name}
          </button>
        ))}
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 p-4">
        {productsFilterd.map((item) => (
          <Product key={item.id} productData={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
