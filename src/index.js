import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/Auth/AuthState";
import App from "./App";


// import data from "./utils/data";
// import { db } from "./config/firebase";
// import { addDoc, collection } from "firebase/firestore";
// const coll=collection(db,"products")
// const promise=data.map((pro)=>addDoc(coll,pro));
// await Promise.all(promise);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
