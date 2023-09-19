import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../Data';


const initialState = {
  products: productData,
  count: 0,
};

const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    
    
    updateProduct: (state, action) => {
      // Use state.products and action.payload.id
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    increaseCount: (state, action) => {
      state.count += action.payload;
    }
  },
});

export const { addProduct, deleteProduct, updateProduct, increaseCount } = productReducer.actions;
export default productReducer.reducer;