import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./app/services"

const Index =() =>{
    return(
         <Provider store={store}>
             <App></App>
         </Provider>
       
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <Index />
 
);
 