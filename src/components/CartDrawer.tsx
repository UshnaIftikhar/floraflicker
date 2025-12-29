import { X, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={closeCart}>
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside drawer
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">
            Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
          </h2>
          <button onClick={closeCart} aria-label="Close Cart">
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 && (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border rounded-lg p-3 bg-yellow-50"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ₨{item.price} x {item.quantity} = ₨{item.price * item.quantity}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-1 border rounded"
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus size={16} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-1 border rounded"
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
                className="text-red-500 hover:text-red-700"
              >
                <X />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-3">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Price:</span>
            <span>₨ {totalPrice}</span>
          </div>

          <button className="w-full bg-brown-900 text-white py-3 rounded-lg hover:bg-brown-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
