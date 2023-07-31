"use-client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useState } from "react";
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
  const handdleAdded = () => {
    cartStore.addProduct({
      mainId,
      displayName,
      displayAssets,
      quantity,
      price,
      icon,
    } as AddCartType);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };
  return (
    <button
      className="p-2 bg-primary text-base-100 rounded-lg disabled:bg-base-100 disabled:text-primary"
      disabled={added}
      onClick={handdleAdded}
    >
      {added && <MdDone className="max-w-xs max-h-xs" />}
      {!added && <RiShoppingCart2Line className="max-w-xs max-h-xs" />}
    </button>
  );
}
