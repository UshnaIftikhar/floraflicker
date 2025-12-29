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
    closeCart
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
        className={`fixed inset-0 bg-black/40 z-40 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={closeCart}
      />

      {/* Side Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b">
          <h3 className="text-xl font-serif text-amber-950">
            Your Cart
          </h3>
          <button onClick={closeCart}>
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 && (
            <p className="text-center text-amber-700">
              Cart is empty
            </p>
          )}

          {cart.map(item => (
            <div
              key={item.id}
              className="bg-amber-50 p-3 rounded-xl flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-medium">
                  {item.name}
                </p>
                <p className="text-xs">
                  ₨{item.price} x {item.quantity} = ₨
                  {item.price * item.quantity}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                <X size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="p-5 border-t space-y-2">
          <p>Items Total: ₨{itemsTotal}</p>
          {cart.length > 0 && (
            <p>Delivery Charges: ₨{shippingFee}</p>
          )}
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
