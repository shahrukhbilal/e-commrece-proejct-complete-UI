import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function CartPage({ userId }) {
  const navigate = useNavigate();
  const { cart, getCart, removeFromCart, clearCart } = useContext(CartContext);

  // ── 1) Safe‑guard + complete dependency list
  useEffect(() => {
    if (userId) {
      getCart(userId);
    }
  }, [userId, getCart]);  

  // ── 2) Cart total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ── 3) Checkout helper – arg not needed, we already have cart
  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">
        <strong>Your Cart</strong>
      </h2>

      <div className="mb-4 text-center">
        <Link to="/products" className="btn btn-primary">
          <strong>Back to Products</strong>
        </Link>
      </div>

      {cart.length === 0 ? (
        <p>
          <strong>Ooops! 😞 Your Cart is empty</strong>
        </p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th /> {/* Remove column header (blank) */}
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end">
            <h4>
              <strong>Total:</strong> ${total}
            </h4>

            <button onClick={clearCart} className="btn btn-warning mt-2 ms-2">
              <strong>Clear Cart</strong>
            </button>

            <button onClick={handleCheckout} className="btn btn-primary mt-2">
              <strong>Proceed to Checkout</strong>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
