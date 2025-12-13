import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// Configure axios base URL to point to backend API
// In Vercel, set REACT_APP_API_BASE_URL to your Render backend URL.
// Example: REACT_APP_API_BASE_URL=https://chatting12.onrender.com
const DEFAULT_API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "https://chatting12.onrender.com";

axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL;

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
