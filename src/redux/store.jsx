import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import productslice from "./productslice"

const store=configureStore({
    reducer:{
        cart: cartslice,
        Product: productslice
    }
})

export default store;
