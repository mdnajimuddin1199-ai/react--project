// this is Productcard its show for card
import { IoMdStar } from "react-icons/io";
import type { productsType } from "./interface";
import { useState } from "react";
interface product {
  product: productsType;
 hendeleven: (product: productsType) => void;
 setproducts: productsType[];
}

const Productcard = ({ product,hendeleven,setproducts }: product) => {

const isclick = setproducts.find(isproduct=> isproduct.id === product.id);
  return (
    <div className={`space-y-3 py-5 px-3  border border-gray-200 rounded`}>
      <div className="flex justify-between items-center">
        <img className="w-12" src={product.image} alt="" />
        <button className="btn rounded-2xl">{product.badge}</button>
      </div>
      <p className="text-2xl font-semibold mt-5">{product.name}</p>
      <p>{product.description}</p>
      <div className="flex justify-between items-center mt-5">
        <button className="btn">{product.category}</button>
        <p>{product.level}</p>
        <p className="flex items-center gap-1">
          <IoMdStar /> {product.rating}
        </p>
      </div>
      <button 
      onClick={()=>hendeleven(product)}
         className={`btn cursor-pointer text-white ${isclick? "opacity-35": ""} bg-black  rounded-2xl mt-3  w-full`} disabled={isclick?true:false}>
        {isclick?"selected":"Add to Stack" }
      </button>
    </div>
  );
};

export default Productcard;
