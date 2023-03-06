import { makeStyles } from '@material-ui/styles';
import { Theme } from "@material-ui/core";
import { Card } from '../../types/card.type';

const useStyles = makeStyles(
    (theme:Theme) => ({
      cardWrapper:{
        width:"25%",
        display:"flex",
        flexDirection:"column",
        border:"1px solid red",
        justifyCenter:"center",
        alignItems:"center",
        margin:"10px",
        padding:"10px",
        boxShadow:`5px 5px 5px 5px ${theme.palette.ecommerce.shadow}`
      },
      title:{
        fontWeight:"bold"
      },
      description:{

      },
      price:{

      }
      

    }));
    const ProductCard: React.FC<Card> = ({imageSrc,title,description,price}) => {
    const classes = useStyles();
    return ( 
        <section className={classes.cardWrapper}>

            <img src={imageSrc}></img>
            <span className={classes.title}> {title}</span>
            <span className={classes.description}>{description}</span>
            <span className={classes.price}> {price}</span>
            
        </section>
     );
}

export default ProductCard;