import "./productList.css";
import Product from "../Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's My Vision</h1>
        <p className="pl-desc">
          This is a creative portfolio that your work has been waiting for. You
          can built an CRUD Web App with API Consume, Single Page Website,
          Modern Website & Mobile App.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
