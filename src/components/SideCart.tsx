import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus } from 'lucide-react';
import CheckoutForm from './CheckoutForm';

export default function SideCart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isOpen,
    closeCart,
  } = useCart();

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const shippingFee = 199;
  const itemsTotal = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const grandTotal = itemsTotal + (cart.length > 0 ? shippingFee : 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeCart}
      />

      {/* Side Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl rounded-l-3xl transform transition-transform duration-500 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b">
          <h3 className="text-xl font-serif text-amber-950">Your Cart</h3>
          <button onClick={closeCart}>
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {cart.length === 0 && (
            <p className="text-center text-amber-700 mt-10">
              Cart is empty
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-amber-50 p-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-amber-950">
                    {item.name}
                  </p>
                  <p className="text-xs text-amber-700">
                    ₨{item.price} x {item.quantity} = ₨
                    {item.price * item.quantity}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1 bg-amber-200 rounded"
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1 bg-amber-200 rounded"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="p-5 border-t space-y-2">
          <p>Items Total: ₨{itemsTotal}</p>
          {cart.length > 0 && <p>Delivery: ₨{shippingFee}</p>}
          <p className="font-semibold text-lg">
            Grand Total: ₨{grandTotal}
          </p>

          <button
            onClick={() => setCheckoutOpen(true)}
            className="w-full py-3 bg-amber-900 text-white rounded-full"
          >
            Checkout
          </button>
        </div>
      </div>

      <CheckoutForm
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </>
  );
}
