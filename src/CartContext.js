// File: CartContext.jsx
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// Create context
export const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔹 GET cart from backend
  const getCart = async (userId) => {
    try {
      const res = await axios.get(`/api/cart?userId=${userId}`);
      setCart(res.data); // ✅ Update cart state
    } catch (err) {
      console.error("Error getting cart:", err);
      toast.error("Failed to load cart");
    }
  };

  // 🔹 ADD to cart
  const addToCart = async (productId, userId) => {
    try {
      const res = await axios.post("/api/cart", { productId, userId });
      setCart(res.data); // ✅ Updated cart from backend
      toast.success("Product added to cart");
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error("Failed to add to cart");
    }
  };

  // 🔹 REMOVE from cart
  const removeFromCart = async (itemId, userId) => {
    try {
      const res = await axios.delete(`/api/cart/${itemId}?userId=${userId}`);
      setCart(res.data); // ✅ Updated cart
      toast.info("Product removed");
    } catch (err) {
      console.error("Error removing from cart:", err);
      toast.error("Failed to remove");
    }
  };

  // 🔹 CLEAR cart
  const clearCart = async (userId) => {
    if (!window.confirm("Are you sure you want to clear the cart?")) return;

    try {
      const res = await axios.delete(`/api/cart?userId=${userId}`);
      setCart(res); // ✅ Empty cart
      toast.success("Cart cleared");
    } catch (err) {
      console.error("Error clearing cart:", err);
      toast.error("Failed to clear cart");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, getCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
