import type { productsType } from "./interface";
import { TiDelete } from "react-icons/ti";

export interface stackprops {
  setproducts: productsType[];
  hendeldelete: (stackproduct: productsType) => void;
  alldelete: () => void;
}

const YourStack = ({ setproducts, hendeldelete, alldelete }: stackprops) => {
  if (setproducts.length === 0) {
    return (
      <div className="shadow  border border-gray-200 rounded-xl h-fit py-5 px-1">
        <h2 className="text-2xl text-center font-bold">Your Stack</h2>
        <p className="text-center">{setproducts.length} Thchnology selected</p>
        <p className="mx-3 shadow text-[1.1rem] font-semibold border border-dashed py-8 text-center rounded mt-5">
          Your stack is empty
        </p>
      </div>
    );
  }
  return (
    <div className=" border border-gray-200 rounded-xl h-fit py-5 px-1">
      <h2 className="text-2xl text-center font-bold">Your Stack</h2>
      <p className="text-center">{setproducts.length} Thchnology selected</p>

      <div>
        {setproducts.map((stackproduct) => (
          <div className="flex items-center justify-between mx-3 border border-dashed rounded mt-3">
            <div className="flex items-center">
              <img className="w-[3rem]" src={stackproduct.image} />
              <div>
                <p>{stackproduct.name}</p>
                <p>{stackproduct.category}</p>
              </div>
            </div>

            <TiDelete
              onClick={() => hendeldelete(stackproduct)}
              className="text-2xl"
            />
          </div>
        ))}
      </div>
      <button
        onClick={alldelete}
        className="btn bg-red-500 text-white  w-full rounded-2xl mt-3"
      >
        All delete
      </button>
    </div>
  );
};

export default YourStack;
