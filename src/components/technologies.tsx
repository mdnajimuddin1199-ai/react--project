import { use, useState } from "react";
import type { productsType } from "./interface";
import Productcard from "./productcard";
import YourStack from "./yourstack";
interface productdata {
  productdata: Promise<productsType[]>;
}

const Technologies = ({ productdata }: productdata) => {
  const products = use(productdata);
  const [setproducts, setsetproducts] = useState<productsType[]>([]);
  const hendeleven = (product: productsType) => {
    const exist = setproducts.find((p) => p.id === product.id);
    if (!exist) {
      setsetproducts([...setproducts, product]);
    } else {
      alert("you have already added");
    }
  };
  const hendeldelete = (stackproduct:productsType)=>{
    const remaning = setproducts.filter(s=> s.id!==stackproduct.id)
    setsetproducts(remaning)

  }
  const alldelete =()=>{
    setsetproducts([])
  }

  return (
    <section className="container mx-auto">
      <div>
        <h2 className="text-4xl text-center md:text-start font-bold text-pink-600 py-3">
          Explore the Technologies
        </h2>
        <p className="text-center md:text-start text-[1.1rem]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-4 my-10">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3">
          {products.map((product, index) => (
            <Productcard
              product={product}
              key={index}
              hendeleven={hendeleven}
              setproducts={setproducts}
            ></Productcard>
          ))}
        </div>
        <YourStack setproducts={setproducts} hendeldelete={hendeldelete} alldelete={alldelete}></YourStack>
      </div>
    </section>
  );
};

export default Technologies;
