import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useEffect } from "react";
import Product from "../product";
import { fetchProducts } from "../../redux/productReducer";
const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const cartProductIds = useSelector((state) => state.cart.ids);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { isLoading, products } = product;
  return (
    <div className="container">
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        products.map((each) => (
          <Product
            {...each}
            key={each.id}
            isCartProduct={cartProductIds.includes(each.id)}
          />
        ))
      )}
    </div>
  );
};

export default Home;
