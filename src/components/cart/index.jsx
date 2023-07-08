import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { remove } from "../../redux/cartReducer";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      {cartItems.map((each) => (
        <div key={each.id}>
          <div className="cart-item">
            <img src={each.image} alt="image" />
            <p>{each.title}</p>
            <b>$ {each.price}</b>
          </div>
          <span onClick={() => dispatch(remove({ id: each.id }))}>X</span>
        </div>
      ))}
      <p>
        Total Price: <b>$ {totalPrice}</b>
      </p>
    </div>
  );
};

export default Cart;
