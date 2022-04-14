import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "../src/styles/globals.scss";
import App from "./App";
import SavedPostContextProvider from "./store/save-post";
import theme from "./theme";

const Root = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <SavedPostContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SavedPostContextProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
