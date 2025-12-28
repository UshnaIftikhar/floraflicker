import { useCart } from '../context/CartContext';
import { X, Plus, Minus } from 'lucide-react';

export default function SideCart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isOpen,
    closeCart
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeCart}
      ></div>

      {/* Side Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-500 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h3 className="text-xl font-serif text-amber-950">Your Cart</h3>
          <button onClick={closeCart} className="text-amber-900 hover:text-red-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 && <p className="text-amber-700">Cart is empty</p>}

          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-amber-50 p-3 rounded-xl">
              <div className="flex items-center space-x-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium text-amber-950">{item.name}</p>
                  <p className="text-xs text-amber-700">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button onClick={() => decreaseQuantity(item.id)} className="p-1 bg-amber-200 rounded">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="p-1 bg-amber-200 rounded">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-amber-900 hover:text-red-600">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="p-5 border-t space-y-2">
          <p className="font-medium text-amber-950">Total Items: {cart.reduce((sum, i) => sum + i.quantity, 0)}</p>
          <p className="font-medium text-amber-950">Total Price: ₹{cart.reduce((sum, i) => sum + i.price * i.quantity, 0)}</p>
          <button className="w-full py-3 bg-amber-900 text-amber-50 rounded-full font-light hover:bg-amber-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
