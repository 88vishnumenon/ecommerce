import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/useReduxhooks";
import { VProduct, VProductState } from "../../types/product.type";
import Header from "../header/header";

function Homepage() {

    const products:VProduct[] = useAppSelector((state)=>state.productsSlice.products);
    console.log(products);

    return ( 
        <section>
        <Header></Header>
        <div>I am homepage</div>
        {
            products.map((product:VProduct)=>{
                return <div>{product.title}</div>
            })
        }
        </section>
     );
}

export default Homepage;