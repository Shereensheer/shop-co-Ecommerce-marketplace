
'use client'
 // Marks this as a Client Component
 import { useSelector, useDispatch } from "react-redux";
 import { RootState } from "@/app/redux/store"; // Replace with your Redux store path
 import { removeFromCart, updateQuantity } from "@/app/redux/cartslice";
 import { FiTrash2 } from "react-icons/fi";
 import Link from "next/link";
 
 export default function CartComponent() {
   const cart = useSelector((state: RootState) => state.cart);
   const dispatch = useDispatch();
 
   const handleRemove = (id: string) => {
     dispatch(removeFromCart(id));
   };
 
   const handleQuantityChange = (id: string, quantity: number) => {
     dispatch(updateQuantity({ id, quantity }));
   };
 
   const totalPrice = cart.reduce(
     (total: number, item: { price: number; quantity: number }) =>
       total + item.price * item.quantity,
     0
   );
 
   return (
     <div className="container mx-auto p-4">
       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
 
       {cart.length === 0 ? (
         <p className="text-gray-600">Your cart is empty.</p>
       ) : (
         <div className="space-y-6">
          {cart.map((item) => (
  <div
    key={item.id}
    className="flex flex-col md:flex-row items-center md:items-start gap-4 border-b pb-4"
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-md"
    />
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-600">${item.price}</p>
    </div>
    <div className="flex items-center justify-center md:justify-start">
      <button
        onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
        className="px-3 py-1 bg-gray-200 rounded-l"
      >
        -
      </button>
      <span className="px-4">{item.quantity}</span>
      <button
        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
        className="px-3 py-1 bg-gray-200 rounded-r"
      >
        +
      </button>
    </div>
    <button
      onClick={() => handleRemove(item.id)}
      className="text-black hover:text-red-800 mt-2 md:mt-0"
    >
      <FiTrash2 size={24} />
    </button>
  </div>
))}

 
           <div className="flex justify-between items-center mt-6">
             <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
             <Link href="/checkout">
               <button className="px-6 py-3 bg-black text-white rounded hover:bg-orange-700">
                 Checkout
               </button>
             </Link>
           </div>
         </div>
       )}
     </div>
   );
 }
 