import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./Context/UserProvider";
import MovieProvider from "./Context/MovieProvider";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
    <UserProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </UserProvider>
    </MovieProvider>
   
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
