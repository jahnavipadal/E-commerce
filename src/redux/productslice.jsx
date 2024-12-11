import { createSlice } from "@reduxjs/toolkit";

// Corrected typo: "intialstate" → "initialState"
const initialState = {
    products: []
};

const productslice = createSlice({
    name: 'products',
    initialState, // Correct reference to initialState
    reducers: {
        setproducts(state, action) {
            state.products = action.payload; // Set products from action payload
        }
    },
});

// Expor
export const { setproducts } = productslice.actions;
export default productslice.reducer;