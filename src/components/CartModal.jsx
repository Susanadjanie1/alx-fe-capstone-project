import React from "react";
import { useCart } from "../context/CartContext";

const CartModal = ({ onClose }) => {
  const { items, removeFromCart, increase, decrease, clearCart } = useCart();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-11/12 md:w-1/2 p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      GHS {item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(item.id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increase(item.id)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 ml-2"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total: GHS {total.toFixed(2)}</h3>
              <button
                onClick={() => {
                  alert("Proceeding to checkout...");
                  onClose();
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
              >
                Checkout
              </button>
            </div>

            <button
              onClick={clearCart}
              className="mt-4 text-sm text-gray-500 hover:text-red-500"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
