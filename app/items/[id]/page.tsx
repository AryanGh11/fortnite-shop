"use client"

import { SearchParamTypes } from "@/types/SearchParamsType";
import itemDetails from "@/util/itemDetails";
import Image from "next/image";
import { TiTags } from "react-icons/ti"
import { GoShareAndroid } from "react-icons/go"
import AddCart from "@/util/addToCart";
import AddToCart from "./AddToCart";

export default function ItemPage({ searchParams }: SearchParamTypes) {
  //copy item's url
  const hostname = "https://fortnite-shop-one.vercel.app"
  const currentUrl = `${hostname}/items/${searchParams.mainId}`
  const shareUrl = async () => {
    await navigator.clipboard.writeText(currentUrl)
  }
  //get current item details
  const getItemDetail = itemDetails(searchParams.mainId)
  console.log(getItemDetail)
  return (
    <div className="flex flex-wrap">
      <Image
        src={searchParams.icon}
        alt="aaa"
        width={1200}
        height={1200}
        className="w-full aspect-square rounded-2xl"
        priority
      />
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">{searchParams.displayName}</h1>
          <h1 className="text-sm">{searchParams.rarityName?.toUpperCase()}</h1>
        </div>
        <ul className="flex gap-2">
          {/* type of item */}
          <li className="w-16 gap-2 bg-neutral px-4 py-2 rounded-xl flex flex-col items-center justify-center">
            <TiTags className="w-full h-full" />
            <h1 className="text-xs">{getItemDetail.type.name}</h1>
          </li>
          {/* share button */}
          <li className="w-16 gap-2 bg-neutral px-4 py-2 rounded-xl flex flex-col items-center justify-center" onClick={shareUrl}>
            <GoShareAndroid className="w-full h-full" />
            <h1 className="text-xs">Share</h1>
          </li>
        </ul>
        <h1>{getItemDetail.introduction?.text}</h1>
        <h1>{searchParams.finalPrice}</h1>
      </div>
      <div className="w-full"><AddToCart {...searchParams} /></div>
    </div>
  );
}
