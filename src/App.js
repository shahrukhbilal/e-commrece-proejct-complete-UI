import { CartProvider } from "./CartContext";
import CartPage from "./CartPage";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import ProductsListing from "./Pages/ProductsListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Checkout from "./Checkout";
import ThankYou from "./ThankYou";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // also required!

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <NavBar />

          {/* Toast container should be OUTSIDE Routes */}
          <ToastContainer position="top-right" autoClose={2000} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsListing />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
