import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutForm({ isOpen, onClose }: Props) {
  const { cart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const shippingFee = 199;
  const itemsTotal = cart.reduce(
    (sum, i) => sum + Number(i.price) * i.quantity,
    0
  );
  const grandTotal = itemsTotal + shippingFee;

  // Inline Thank You Message
  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-lg rounded-3xl p-6 relative text-center">
          <h2 className="text-2xl font-serif text-amber-950 mb-4">
            Thanks for Shopping!
          </h2>
          <p className="mb-4">We have received your order and will contact you shortly.</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-amber-900 text-white rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true); // show inline thank-you message
        form.reset();
      } else {
        alert('Oops! Something went wrong.');
      }
    } catch (error) {
      alert('Oops! Something went wrong.');
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-3xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-2xl font-serif text-amber-950 mb-4">
          Checkout (Cash on Delivery)
        </h2>

        <form
          action="https://formspree.io/f/mkonkkog"
          method="POST"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="address"
            required
            placeholder="Full Delivery Address"
            className="w-full p-3 border rounded-xl"
          />

          {/* ORDER DETAILS (HIDDEN) */}
          <input
            type="hidden"
            name="order_items"
            value={cart
              .map(
                i => `${i.name} x ${i.quantity} = Rs ${i.price * i.quantity}`
              )
              .join(' | ')}
          />

          <input type="hidden" name="items_total" value={itemsTotal} />
          <input type="hidden" name="delivery_charges" value={shippingFee} />
          <input type="hidden" name="grand_total" value={grandTotal} />

          <div className="bg-amber-50 p-4 rounded-xl text-sm">
            <p>Items Total: ₨{itemsTotal}</p>
            <p>Delivery Charges: ₨{shippingFee}</p>
            <p className="font-semibold">Grand Total: ₨{grandTotal}</p>
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
