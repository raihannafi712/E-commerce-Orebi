import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [],
}

export const productSlice = createSlice({  
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state , action) => {          /* state is for the initial value and action is for the other side's value   */

      let findProduct = state.cartItem.findIndex(
        (item) => item.id == action.payload.id
      );

      if (findProduct != -1) {
        state.cartItem[findProduct].quantity += 1;               /* If we add the same product for the second time, then the quantity will increase by 1 each time. */
      }else{
         state.cartItem = [ ...state.cartItem , action.payload];
         localStorage.setItem("cart" , JSON.stringify(state.cartItem));      /* Functions are explained in react note file */
      }
      // state.cartItem = action.payload;
      // console.log(findProduct);
    },
    incrementProduct: (state , action) => {
      state.cartItem[action.payload].quantity += 1;  
      localStorage.setItem("cart" , JSON.stringify(state.cartItem));
    },
    decrementProduct: (state , action) => {

      if (state.cartItem[action.payload].quantity > 1) {
        
        state.cartItem[action.payload].quantity -= 1;  
        localStorage.setItem("cart" , JSON.stringify(state.cartItem));
      }
    },
    productRemove: (state , action) => {
      state.cartItem.splice(action.payload, 1);
      localStorage.setItem("cart" , JSON.stringify(state.cartItem));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart , incrementProduct , decrementProduct , productRemove } = productSlice.actions

export default productSlice.reducer