import { makeStyles } from '@material-ui/styles';
import { Theme } from "@material-ui/core";

import { useAppDispatch, useAppSelector } from "../../hooks/useReduxhooks";
import { VProduct, VProductState } from "../../types/product.type";
import Card from "../card/product-card";
import Header from "../header/header";
import { useEffect } from 'react';
import { fetchAllProducts } from '../../store/actions/products.actions';


const useStyles = makeStyles(
    (theme:Theme) => ({
      homepagWrapper:{
        display:"flex",
        displayDirection:"row",
      }

    }));

function Homepage() {

    // declare constants

    const classes = useStyles();
    const dispatch = useAppDispatch();
    const products:VProduct[] = useAppSelector((state)=>state.productsSlice.products);
    console.log(products);


    useEffect(()=>{
        dispatch(fetchAllProducts());
        return () => {}
      },[]);  

    return ( 
      //   <section >
      //   <Header></Header>
      //  { products &&   <section className={classes.homepagWrapper}>
      //   {
      //       products.map((product:VProduct ,index:number)=>{
      //           return <Card key={product.id} imageSrc={product.image} title={product.title} description={product.description} price={product.price}></Card>
      //       })
      //   }
      //   </section>}
      //   </section>

      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
     );
}

export default Homepage;