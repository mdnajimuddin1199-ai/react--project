import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/technologies";
import Footer from "./components/footer";

const productdatapromis = async()=>{
let res = await fetch("./data.json");
let data = await res.json();
return data;

}
const productdata = productdatapromis();
console.log(productdata);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
    <Technologies productdata={productdata}></Technologies>
    <Footer></Footer>
  </StrictMode>,
);
