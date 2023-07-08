import { Link } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const itemsCount = useSelector((state) => state.cart.products.length);
  return (
    <nav>
      <h1>Store</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart: {itemsCount}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
