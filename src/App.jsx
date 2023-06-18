import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import "./App.css";
import Cart from "./pages/Cart"
import { createContext } from "react";


export const ThemeContext = createContext(null);
export default function App() {

  return (
<ThemeContext.Provider >
<div className="App" >

        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
       
  </div>
</ThemeContext.Provider>
 );
}
 
 



