import "./product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  let ProductData = props.productData;

  return (
    <div className="card col-12 col-md-5 col-lg-3 col-xl-2  d-flex  flex-column align-items-center justify-content-between p-3">
      <div style={{ height: "500px" }}>
        <img
          src={ProductData.image}
          className="card-img-top img-fluid  h-100"
          alt={ProductData.title}
        />
      </div>
      <h6 className="card-title w-75 text-center">{ProductData.title}</h6>
      <Link
        to={`/product/${ProductData.id}`}
        className="btn btn btn-outline-success w-75 mb-3">
        Details
      </Link>
    </div>
  );
};

export default Product;
