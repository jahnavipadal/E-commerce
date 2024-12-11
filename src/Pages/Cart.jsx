import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../redux/cartslice";
import { incrementQuantity,decrementQuantity } from "../redux/cartslice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch=useDispatch()
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {cart.products.length > 0 ? (
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Shopping Cart</h3>

          {/* Cart Items */}
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded shadow-sm"
              >
                {/* Product Details */}
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                </div>

                {/* Quantity and Subtotal */}
                <div className="flex items-center gap-2">
                <button
    className={`bg-gray-300 text-gray-700 px-2 py-1 rounded ${product.quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
    disabled={product.quantity === 1}
    onClick={() => dispatch(decrementQuantity(product.id))}
  >
    -
  </button>
                  <p className="text-gray-800">{product.quantity}</p>
                  <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"onClick={()=>dispatch(incrementQuantity(product.id))}>
                    +
                  </button>
                </div>

                <p className="text-gray-800">
                  ${(product.quantity * product.price).toFixed(2)}
                </p>

                {/* Remove Button */}
                <button className="text-red-500 text-sm hover:underline"onClick={()=>dispatch(removefromcart(product.id))}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between text-sm text-gray-700">
              <p>Total Items:</p>
              <p>{cart.totalQuantity}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Total Price:</p>
              <p>${cart.totalPrice.toFixed(2)}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mt-6 bg-gray-50 p-3 rounded shadow-sm w-72 mx-auto">
            <h3 className="text-base font-bold mb-2 text-gray-800">Shipping Address</h3>
            <form className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={address.name}
                onChange={handleInputChange}
                className="w-full p-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={address.street}
                onChange={handleInputChange}
                className="w-full p-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleInputChange}
                className="w-full p-1 border border-gray-300 rounded text-sm"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={address.state}
                  onChange={handleInputChange}
                  className="w-1/2 p-1 border border-gray-300 rounded text-sm"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip"
                  value={address.zip}
                  onChange={handleInputChange}
                  className="w-1/2 p-1 border border-gray-300 rounded text-sm"
                />
              </div>
            </form>
          </div>

          {/* Checkout Button */}
          <button className="w-50 mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-30">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        // Empty Cart
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg"
            alt="Empty cart"
            className="h-48"
          />
          <h1 className="text-gray-700 text-lg font-semibold mt-2">
            Your cart is empty
          </h1>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
