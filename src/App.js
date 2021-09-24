import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Detail from "./components/Detail";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Order2 from "./components/Order2"
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductsProvider } from "./context/ProductsContext";
import Fav from "./components/Fav";

function App() {

  return (
    <ChakraProvider>
    <ProductsProvider >
     
    <Router>
      <div>
        <Menu />
        <Switch>
        <Route path="/bag2">
            <Order2 />
          </Route>
        <Route path="/bag">
            <Order />
          </Route>
        <Route path="/fav">
            <Fav />
          </Route>
        <Route path="/cart">
            <Cart />
          </Route>
        
        <Route path="/signup">
            <Register />
          </Route>
        <Route path="/signin">
            <Signin />
          </Route>
         
          <Route path="/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </ProductsProvider>
    </ChakraProvider>
  );

}

export default App;


