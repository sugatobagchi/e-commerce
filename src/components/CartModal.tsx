"use client";

import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";
import { currentCart } from "@wix/ecom";
import { useEffect } from "react";

const CartModal = () => {
  const cartItems = true; // temporary

  const wixClient = useWixClient();

  useEffect(() => {
    const cartItems = true;

    const getCart = async () => {
      const response = await wixClient.currentCart.getCurrentCart();
      console.log(response);
    };

    getCart();
  }, [wixClient]);

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl"> Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM  */}
            <div className="flex gap-4">
              <Image
                src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className="">
                  {/* TITLE  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESC  */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM  */}
                <div className="flex justify-between text-sm">
                  <span className="text-grey-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className="">
                  {/* TITLE  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESC  */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM  */}
                <div className="flex justify-between text-sm">
                  <span className="text-grey-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* CHECKOUT HOLDERS */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-grey-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 ring-1 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
