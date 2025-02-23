import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const ProductDetails = () => {
  const { id } = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let resposnse = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(resposnse.data);
      } catch (e) {
        console.log("Error", e);
      }
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <h1> Loading...</h1>;
  }
  return (
    <div className="container mt-5">
      <div className="card mb-3 p-4 w-100">
        <div className="row g-0">
          <div className="col-md-4 p-3">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-8 d-flex  justify-content-center text-success ">
            <div className="card-body d-flex flex-column  justify-content-between text-center align-items-center gap-3 ">
              <h2 className="card-title ">{product.title}</h2>
              <p className="card-text text-capitalize fs-4  text-body-secondary">
                {product.description}
              </p>
              <div className="d-flex justify-content-between w-75 gap-3 flex-wrap ">
                <p className="card-text fs-4 ">
                  category:{" "}
                  <span className="text-body-secondary">
                    {product.category}
                  </span>
                </p>
                <p className="card-text fs-4">
                  Price:{" "}
                  <span className="text-danger fw-bold ">
                    {product.price} $
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center w-75 gap-3 flex-wrap ">
                {product.rating && (
                  <div className="d-flex ">
                    <Rating
                      name="read-only"
                      precision={0.1}
                      value={product.rating.rate}
                      readOnly
                    />
                    <p>{product.rating.count} Person</p>
                  </div>
                )}
                <button type="button" className="btn btn-danger">
                  <AddShoppingCartOutlinedIcon /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
