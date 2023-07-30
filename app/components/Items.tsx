import { ItemsType } from "@/types/ItemsType";
import Link from "next/link";
import Image from "next/image";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { useState } from "react";

export default function Items({
  displayName,
  mainId,
  displayAssets,
  quantity,
}: ItemsType) {
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);
  const icon = displayAssets[0].background;
  const handleAdded = () => {
    cartStore.addProduct({
      mainId,
      displayName,
      displayAssets,
      quantity,
    } as AddCartType);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };
  return (
    <div className="flex flex-col" key={mainId}>
      <Link
        href={{
          pathname: `/items/${mainId}`,
          query: { displayName, mainId, icon },
        }}
      >
        <Image
          src={icon}
          alt="aaa"
          width={1200}
          height={1200}
          className="w-full rounded-2xl"
        />
      </Link>

      <div className="bg-base-100 p-4 mx-4 -my-4 relative -top-16 rounded-xl flex justify-between items-center">
        <h1 className="font-bold text-md whitespace-nowrap overflow-hidden text-ellipsis">
          {displayName}
        </h1>
        {/* Cart Icon */}
        <button
          className="p-2 bg-red-500 rounded-lg"
          disabled={added}
          onClick={handleAdded}
        >
          {added && <h1>Adding...</h1>}
          {!added && (
            <RiShoppingCart2Line className="max-w-xs max-h-xs text-base-100" />
          )}
        </button>
      </div>
    </div>
  );
}
