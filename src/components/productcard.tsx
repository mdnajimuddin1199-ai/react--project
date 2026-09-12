// this is Productcard its show for card
import { IoMdStar } from "react-icons/io";
import type { productsType } from "./interface";
import '../index.css'
interface product {
  product: productsType;
  hendeleven: (product: productsType) => void;
  setproducts: productsType[];
}

const Productcard = ({ product, hendeleven, setproducts }: product) => {
  const isclick = setproducts.find((isproduct) => isproduct.id === product.id);
  return (
    <div
      className={`transition-all duration-300 hover:shadow-xl shadow-2xs space-y-3 py-5 px-3  ${isclick ? "border-2 border-pink-600 " : "border border-gray-200"} rounded`}
    >
      <div className="flex justify-between items-center">
        <img className="w-12" src={product.image} alt="" />
        <p className=" bg-pink-100 py-1 px-3 text-pink-600 font-semibold rounded-2xl">{product.badge}</p>
      </div>
      <p className="text-2xl font-semibold mt-5">{product.name}</p>
      <p>{product.description}</p>
      <div className="flex justify-between items-center mt-5">
        <p className="bg-gray-200 py-1 px-3 rounded text-black font-semibold">{product.category}</p>
        <p>{product.level}</p>
        <p className="flex items-center gap-1">
          <IoMdStar /> {product.rating}
        </p>
      </div>
      <button
        onClick={() => hendeleven(product)}
        className={`btn cursor-pointer  ${isclick ? "bg-pink-100 text-pink-600" : "text-white bg-black"} bg-black  rounded-2xl mt-3  w-full`}
        disabled={isclick ? true : false}
      >
        {`${isclick ? " selected" : "Add to Stack"}`}
      </button>
    </div>
  );
};

export default Productcard;
