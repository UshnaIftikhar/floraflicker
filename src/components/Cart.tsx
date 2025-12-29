import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const shippingFee = 199;

  if (cart.length === 0) return null;

  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = itemsTotal + shippingFee;

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-3xl shadow-2xl p-5 z-50">
      <h3 className="text-xl font-serif text-amber-950 mb-4">Your Cart</h3>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-amber-50 p-3 rounded-xl"
          >
            <div className="flex items-center space-x-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div>
                <p className="text-sm font-medium text-amber-950">{item.name}</p>
                <p className="text-xs text-amber-700">
                 ₨{item.price} x {item.quantity} = ₨{item.price * item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-amber-900 hover:text-red-600"
              aria-label={`Remove ${item.name} from cart`}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Total and Shipping */}
      <div className="mt-4 p-3 bg-amber-100 rounded-xl text-right font-medium text-amber-950 space-y-2">
        <div>
          Items Total: ₨{itemsTotal}
        </div>
        <div>
          Delivery Charges: ₨{shippingFee}
        </div>
        <div className="text-lg font-semibold">
          Grand Total: ₨{grandTotal}
        </div>
      </div>
    </div>
  );
}
