import React from 'react';
import { FaStar,FaShoppingCart } from 'react-icons/fa';
import { Products } from '../assets/Mockdata'; // Assuming Products is imported here
import { useSelector } from 'react-redux';

const Shop = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Check if products are available */}
        {Products && Products.length > 0 ? (
          Products.map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[250px] object-cover"
              />

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-lg font-bold text-gray-700">${product.price}</p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Add to Cart Button */}
               
                <button
                    onClick={() => handleAddToCart(product)}
                    className="text-black-500 hover:text-pink-600 text-2xl ml-60 mb-50"
                  >
                    <FaShoppingCart />
                  </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products available
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
