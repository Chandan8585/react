import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./components/redux/AppStore";
const App = ()=>{
  return(
   <>
   <Provider store={appStore}>
   <Navbar/>
    <Outlet/>
    <Footer/>
   </Provider>
   
   </>
  )
}

export default App;

