import React from 'react';
import { FaStar , FaShoppingCart } from 'react-icons/fa';
import { Products } from '../assets/Mockdata';
import { addtocart } from '../redux/cartslice';
import { useDispatch } from 'react-redux';

const Productcard=()=>{
    const dispatch=useDispatch()
    const handleAddToCart=(e,product)=>{
e.stopPropagation;
e.preventDefault;
dispatch(addtocart(product))
alert("Successfull")
    }


    return(

<div className="p-8 bg-gray-100">
<h2 className="text-2xl font-bold mb-6">Top Categories</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {Products && Products.length > 0 ? (
    Products.slice(0, 5).map((product, index) => (
      <div
        key={index}
        className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        {/* Product Image */}
        <img
  src={product.image}
  alt={product.name}
  className="w-full h-[250px] object-cover" 
/>

        
        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 text-lg font-bold">${product.price}</p>
          <div className='flex flex-row'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/> 
          <FaStar/>
          <button
                    onClick={(e) => handleAddToCart(e,product)}
                    className="text-black-500 hover:text-pink-600 text-2xl ml-60 mb-50"
                  >
                    <FaShoppingCart />
                  </button>
          </div>
         
         
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

    )
}
export default Productcard;
