import { makeStyles } from '@material-ui/styles';
import { Theme } from "@material-ui/core";



const useStyles = makeStyles(
    (theme:Theme) => ({
      header:{
        display:"flex", 
        background:theme.palette.ecommerce.blue,
        width:"100%",
        height:"5vh"
      }

    }));
function Header() {
    const classes = useStyles();

    return ( 
        <div className={classes.header}>
        </div>
     );
}

export default Header;