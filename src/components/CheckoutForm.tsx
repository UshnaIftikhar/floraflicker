import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutForm({ isOpen, onClose }: Props) {
  const { cart } = useCart();

  const itemsTotal = cart.reduce(
    (sum, i) => sum + Number(i.price) * i.quantity,
    0
  );

  const shippingFee = 199;
  const grandTotal = itemsTotal + shippingFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <h2 className="text-2xl font-serif text-amber-950 mb-4">
          Checkout
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Order:', {
              cart,
              grandTotal
            });
            alert('Order placed (demo)');
          }}
          className="space-y-4"
        >
          <input
            required
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl"
          />
          <input
            required
            placeholder="Phone Number"
            className="w-full p-3 border rounded-xl"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
          />
          <textarea
            required
            placeholder="Delivery Address"
            className="w-full p-3 border rounded-xl"
          />

          <div className="bg-amber-50 p-4 rounded-xl text-sm">
            <p>Items Total: ₨{itemsTotal}</p>
            <p>Delivery: ₨{shippingFee}</p>
            <p className="font-semibold">
              Grand Total: ₨{grandTotal}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-900 text-white rounded-full"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
