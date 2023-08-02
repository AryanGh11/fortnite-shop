import { ItemsType } from "@/types/ItemsType";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store";
import { useState } from "react";
import AddCart from "@/util/addToCart";

export default function Items({
  displayName,
  mainId,
  displayAssets,
  quantity,
  price,
  series,
  rarity
}: ItemsType) {
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);
  const icon = displayAssets[0].background;
  const rarityName = rarity?.name
  const finalPrice = price?.finalPrice

  return (
    <div className="flex flex-col" key={mainId}>
      <Link
        href={{
          pathname: `/items/${mainId}`,
          query: { displayName, mainId, icon, finalPrice, rarityName },
        }}
      >
        <Image
          src={icon}
          alt="aaa"
          width={1200}
          height={1200}
          className="w-full rounded-2xl"
          priority
        />
      </Link>

      <div className="bg-base-100 p-4 mx-4 -my-8 relative -top-16 rounded-xl flex justify-between items-center">
        <div className="flex overflow-hidden flex-col">
          <h1 className="font-bold text-md whitespace-nowrap overflow-hidden text-ellipsis">
            {displayName}
          </h1>
          <h2 className="text-xs text-primary whitespace-nowrap overflow-hidden text-ellipsis">
            {price?.finalPrice + " V-bucks"}
          </h2>
        </div>
        {/* Cart Icon */}
        <AddCart
          {...{ displayName, mainId, displayAssets, quantity, icon, rarityName, price }}
        />
      </div>
    </div>
  );
}
