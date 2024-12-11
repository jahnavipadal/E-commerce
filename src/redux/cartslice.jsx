import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        // If the item exists in the cart, update its quantity and total price
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        // If the item does not exist in the cart, add it
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      // Update the total price and total quantity of the cart
      state.totalPrice = state.products.reduce((total, product) => total + product.totalPrice, 0);
      state.totalQuantity = state.products.reduce((total, product) => total + product.quantity, 0);
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice += product.price;
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      }
    },
    removefromcart(state,action){
      const id = action.payload;
      const finditem = state.products.find((item) => item.id === id);
      if(finditem){
        state.totalPrice -= finditem.totalPrice
        state.totalQuantity -= finditem.totalQuantity 
        state.products=state.products.filter(item =>item.id !==id)
      }
    }
    
  },
});

export default cartslice.reducer;
export const { addtocart,removefromcart,incrementQuantity,decrementQuantity } = cartslice.actions;
