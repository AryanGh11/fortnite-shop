"use-client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";

export default function AddCart({
  mainId,
  displayName,
  displayAssets,
  quantity,
  price,
  icon,
}: AddCartType) {
  const [added, setAdded] = useState(false);
  const cartStore = useCartStore();
  const existingItem = cartStore.cart.find((cartItem) => cartItem.mainId === mainId)
  useEffect(() => {
    if(existingItem?.quantity === 1) {
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
        price,
        icon,
      } as AddCartType);
    }
    setAdded(true);
  };
  return (
    <button
      className="btn btn-primary aspect-square rounded-lg pr-none"
      disabled={added}
      onClick={handdleAdded}
    >
      {added && <MdDone className="w-full h-full text-primary" />}
      {!added && <RiShoppingCart2Line className="w-full h-full text-base-100" />}
    </button>
  );
}
