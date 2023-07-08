import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import "./App.css";
import Cart from "./components/cart";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
