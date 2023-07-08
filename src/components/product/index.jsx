import { useDispatch } from "react-redux";
import "./index.css";
import { add, remove } from "../../redux/cartReducer";
const Product = ({ id, title, image, price, isCartProduct }) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <h4>{title}</h4>
      <img src={image} alt={title} />
      <p>Price: $ {price}</p>
      {isCartProduct ? (
        <button
          className="btn remove-from-cart"
          onClick={() => dispatch(remove({ id }))}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="btn add-to-cart"
          onClick={() => dispatch(add({ id, title, image, price }))}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
