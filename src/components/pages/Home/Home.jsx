import Products from "../../Products/Products";
import Slider from "../../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default Home;
