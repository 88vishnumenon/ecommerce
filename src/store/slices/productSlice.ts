import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import {VProduct,VProductState} from "../../types/product.type";


// Initial state
const initialState:VProductState= {
    products:[{
        id:1,
        title:"test",
        description:"test",
        image:"string",
        price:"10"
    },]
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,  
    reducers: {
      getAllProducts:(state, action: PayloadAction<VProduct[]>)=>{
          state.products = action.payload
      },
      setAllProducts:(state, action: PayloadAction<VProduct[]>)=>{
          state.products = action.payload // this should be
      },
    }
  });

export const { getAllProducts } = productsSlice.actions;
export default productsSlice.reducer as Reducer<VProductState, any>;