import React, { useEffect } from "react";
import { Categories, Products } from "../assets/Mockdata";
import Infosection from "../components/Infosection";
import Categorysection from "../components/Categorysection";
import { setproducts } from "../redux/productslice";
import { useSelector, useDispatch } from "react-redux";
import Productcard from "../components/Productcard";
import Shop from "./Shop";


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products || { products: [] }); // Safeguard for undefined products state

    useEffect(() => {
        dispatch(setproducts(Products)); // Make sure Products data is valid
    }, [dispatch]);

    return (
        <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
            <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
                <div className="w-12 md:w-3/12">
                    <div className="bg-pink-400 text-white text-xs font-bold px-2 py-2.5">
                        Shop By Categories
                    </div>
                    <ul className="space-y-4 bg-gray-100 p-3 border">
                        {Categories.map((category, index) => (
                            <li key={index} className="flex items-center text-sm font-medium">
                                <div className="w-2 h-2 border border-pink-500 rounded-full mr-2"></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                    <img
                        className="w-full h-full object-cover"
                        src="https://img.pikbest.com/wp/202408/website-online-shopping-in-denmark-an-impressive-3d-render-for-social-media-and-websites_9737255.jpg!sw800"
                        alt="shopping"
                    />
                    <div className="absolute top-16 left-8 text-white">
                        <p>Happy Shopping1!!</p>
                        <p>Get your things here</p>
                        <button className="hover:scale-100 bg-red-500 transform transition-transform duration-300 hover:bg-red-700">
                            Shop now
                        </button>
                    </div>
                </div>
            </div>

            <Infosection />
            <Categorysection />
            <Productcard/>
        
          <Shop/>

        

        </div>
    );
};

export default Home;
