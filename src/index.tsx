import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import { store } from './store/store';
import Homepage from './components/homepage/homepage';
import GlobalStyle from "./theme/globalStyles";
import customTheme from "./theme/theme";
import { ThemeProvider } from'@material-ui/styles';
import { axiosInterceptor } from './interceptor/axios.interceptor';
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
axiosInterceptor();

root.render(
  <React.StrictMode>
     <GlobalStyle />
    <ThemeProvider theme={customTheme}>
    <Provider store={store}>
    <Homepage></Homepage>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
