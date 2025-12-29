import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    address: ''
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    const itemsText = cart
      .map(
        item =>
          `${item.name} x ${item.quantity} = Rs ${item.price * item.quantity}`
      )
      .join('%0A');

    const message = `
New Order 🕯️

Name: ${form.name}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp}
Email: ${form.email}
Address: ${form.address}

Items:
${itemsText}

Total Bill: Rs ${totalPrice}
    `;

    const whatsappNumber = '92XXXXXXXXXX'; // 👉 your WhatsApp number (with country code)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-serif text-amber-950 mb-6">Checkout</h2>

      <div className="space-y-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} className="w-full p-3 border rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded" />
        <textarea name="address" placeholder="Delivery Address" onChange={handleChange} className="w-full p-3 border rounded" />

        <div className="bg-amber-50 p-4 rounded">
          <p className="font-medium">Total Bill: Rs {totalPrice}</p>
        </div>

        <button
          onClick={placeOrder}
          className="w-full py-3 bg-amber-900 text-white rounded-full"
        >
          Place Order (WhatsApp)
        </button>
      </div>
    </div>
  );
}
