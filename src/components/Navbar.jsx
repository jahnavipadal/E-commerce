import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const products=useSelector(state=>state.cart.products)
  return (
    <nav className='bg=white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-content items-center'>
        <div className='text-lg font-bold'>  <Link to="/">E-shop</Link></div>
      
    
      <div className='relative flex-1 mx-20'>
        <form>
          <input className='w-full border py-2 px-4' type="text" placeholder="Search here" />
       
       
            <FaSearch className='absolute top-3 right-3 text-pink-500'/>    
        </form>
      </div>
      <div className='flex items-center space-x-4 ml-2'>
        <Link to="/Cart"> <FaShoppingCart />
        {products.length>0?products.length:<></>}
        </Link>
       
        <button className='hidden md:block'>Login</button>
       <button className='block md:hidden'><FaUser /></button> 
        </div>  
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/shop" className="hover:underline">Shop</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </div>
     
    </nav>
  );
};

export default Navbar;
