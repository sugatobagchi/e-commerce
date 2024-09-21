"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const stock = 4; // TEMPORARY

  const handleQuantity = (type: string) => {
    if (type === "d" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "i" && quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const wixClient = useWixClient();

  const addItem = async () => {
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: stockNumber,
        },
      ],
    });
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
          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
        <button
          className="w-36 text-sm rounded-3xl ring-1 ring-ecart text-ecart py-2 px-2 hover:bg-ecart hover:text-white diasbled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none"
          onClick={addItem()}
        >
          {" "}
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Add;
