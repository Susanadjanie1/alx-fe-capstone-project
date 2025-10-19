import React, { useState } from "react";
import { useCart } from "./context/CartContext";

const CheckoutPage = () => {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", address: "", phone: "", type: "delivery" });

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = form.type === "delivery" ? 10 : 0;

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Order Submitted:", { ...form, items, total: total + deliveryFee });
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        {form.type === "delivery" && (
          <input
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={e => setForm({ ...form, address: e.target.value })}
            required
            className="w-full border p-2 rounded"
          />
        )}
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="delivery">Delivery (₵10)</option>
          <option value="pickup">Pickup (Free)</option>
        </select>

        <p className="font-semibold mt-4">
          Subtotal: GHS {total.toFixed(2)} <br />
          Delivery Fee: GHS {deliveryFee} <br />
          Total: GHS {(total + deliveryFee).toFixed(2)}
        </p>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
        >
          Place Order
        </button>
      </form>
    </section>
  );
};

export default CheckoutPage;
