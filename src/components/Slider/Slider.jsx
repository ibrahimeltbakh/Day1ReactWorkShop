import { v4 as uuid4 } from "uuid";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
const Slider = () => {
  let sliderImgs = [
    { imgSrc: img1, className: "carousel-item active" },
    { imgSrc: img2, className: "carousel-item" },
    { imgSrc: img3, className: "carousel-item" },
  ];
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          {sliderImgs.map((item) => {
            return (
              <div key={uuid4()} className={item.className}>
                <img
                  src={item.imgSrc}
                  className="d-block w-100"
                  alt="slider img"
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
