"use-client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md"

export default function AddToCart({
  mainId,
  displayName,
  displayAssets,
  quantity,
  finalPrice,
  price,
  icon,
}: AddCartType) {
  const [added, setAdded] = useState(false);
  const cartStore = useCartStore();
  const existingItem = cartStore.cart.find((cartItem) => cartItem.mainId === mainId)
  const removeItem = () => {
    cartStore.removeProduct({ mainId, displayAssets, displayName, quantity, icon, price })
    setAdded(false)
  }
  useEffect(() => {
    if (existingItem?.quantity === 1) {
      setAdded(true)
    }
  }, [])
  const handdleAdded = () => {
    if (existingItem?.quantity! === 1) {
      return cartStore.setError("Already in cart!")
    }
    else {
      cartStore.addProduct({
        mainId,
        displayName,
        displayAssets,
        quantity,
        finalPrice,
        icon,
        price
      } as AddCartType);
    }
    setAdded(true);
    // setTimeout(() => {
    //   setAdded(false)
    // }, 500)
  };
  return (
    <div className="flex gap-4 h-12 justify-between">
      <button
        className="btn btn-primary h-full aspect-square rounded-lg pr-none disabled:bg-neutral disabled:w-3/4 w-full"
        disabled={added}
        onClick={handdleAdded}
      >
        {added && <div className="flex justify-center items-center w-4/5 gap-2">
          <MdDone className="w-6 h-6 text-primary" />
          <h1 className="font-bold text-primary">Already in cart</h1>
        </div>}
        {!added && <div className="flex items-center w-full justify-center gap-2">
          <RiShoppingCart2Line className="w-6 h-6 text-base-100" />
          <h1 className="font-bold">Add to cart</h1>
        </div>}
      </button>
      {added && (
        <button className="w-full h-full p-2" onClick={removeItem}>
          <MdOutlineDeleteOutline className="w-full h-full text-primary" />
        </button>
      )}
    </div>
  );
}
