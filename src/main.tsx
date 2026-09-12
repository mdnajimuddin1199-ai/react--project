import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/technologies";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";

const productdatapromis = async()=>{
let res = await fetch("./data.json");
let data = await res.json();
return data;

}
const productdata = productdatapromis();
console.log(productdata);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <Navbar></Navbar>
    <Hero></Hero>
    <Suspense fallback='Loding...'>
      <Technologies productdata={productdata}></Technologies>
    </Suspense>

    <Footer></Footer>
  </StrictMode>,
);
