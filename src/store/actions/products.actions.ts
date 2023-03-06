
import { getAllProducts } from "../slices/productSlice"
import { AppThunk } from "../store";
import { API } from "../../constants/constants";
import { productsService } from "../../services/products.service";

export const fetchAllProducts =(): AppThunk =>(dispatch, getState) => {
    productsService.getProducts(API.GET_PRODUCTS).then((response)=>{
         dispatch(getAllProducts(response)) 
    })
}
