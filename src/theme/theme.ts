
import { createTheme } from "@material-ui/core/styles";
import createMixins from "@material-ui/core/styles/createMixins";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ThemeConsumer } from "styled-components";



declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    ecommerce: {
       blue:string
       shadow:string
    };
  }
  interface PaletteOptions {
   ecommerce?: {
      blue:string,
      shadow:string
    };
  }
}

// should be applied for components that mostly look like angular-material components
const customTheme = createTheme({
  palette: {
    ecommerce: {
        blue:"#007ADE",
        shadow:"#888888"
    },
   
  },
});

export default customTheme;
