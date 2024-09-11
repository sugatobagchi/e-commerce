"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const stock = 4; // TEMPORARY

  const handleQuantity = (type: string) => {
    if (type === "d" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "i" && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium "></h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br />
            {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-ecart text-ecart py-2 px-2 hover:bg-ecart hover:text-white diasbled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          {" "}
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Add;
