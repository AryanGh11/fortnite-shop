"use client"

import { SearchParamTypes } from "@/types/SearchParamsType";
import itemDetails from "@/util/itemDetails";
import Image from "next/image";
import { TiTags } from "react-icons/ti"
import { GoShareAndroid } from "react-icons/go"
import AddCart from "@/util/addToCart";
import AddToCart from "./AddToCart";
import exchangePrice from "@/util/exchangePrice";

export default function ItemPage({ searchParams }: SearchParamTypes) {
  //copy item's url
  const currentUrl = window.location.href
  const shareUrl = async () => {
    await navigator.clipboard.writeText(currentUrl)
  }
  //get date
  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const currentDate = `${year}/${month}/${day}`
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
      <div className="flex flex-col py-4 gap-8">
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
          {/* vbucks amount */}
          <li className="w-16 gap-2 bg-neutral px-4 py-2 rounded-xl flex flex-col items-center justify-center" onClick={shareUrl}>
            <h1 className="text whitespace-nowrap">{searchParams.finalPrice}</h1>
            <h1 className="text-xs whitespace-nowrap">V-bucks</h1>
          </li>
          {/* tooman amount */}
          <li className="w-16 gap-2 bg-neutral px-4 py-2 rounded-xl flex flex-col items-center justify-center" onClick={shareUrl}>
            <h1 className="text whitespace-nowrap">{exchangePrice(searchParams.finalPrice as number)}</h1>
            <h1 className="text-xs">Tooman</h1>
          </li>
        </ul>
        {/* information here */}
        <ul className="flex flex-col gap-2">
          {getItemDetail.introduction?.text && (
            <li className="flex justify-between items-center">
              <h1 className="text-sm">Introduction</h1>
              <h1 className="text-sm">{getItemDetail.introduction?.chapter + " " + getItemDetail.introduction?.season}</h1>
            </li>
          )}
          {searchParams.rarityName && (
            <li className="flex justify-between items-center">
              <h1 className="text-sm">Rarity</h1>
              <h1 className="text-sm">{searchParams.rarityName}</h1>
            </li>
          )}
        </ul>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-base-100 p-8 pt-4"><AddToCart {...searchParams} /></div>
    </div>
  );
}
