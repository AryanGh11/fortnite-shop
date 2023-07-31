"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Items from "./components/Items";
import { ItemsType } from "@/types/ItemsType";

export default function Home() {
  const [items, setItems] = useState([]);
  const FortniteAPI = require("fortnite-api-io");

  const url = "https://fortniteapi.io/v2/shop?lang=en";
  const option = {
    method: "GET",
    headers: {
      Authorization: "7e7b094a-b06e0887-e9dd49fe-25d3d289",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, option);
        const data = await response.json();
        setItems(data.shop);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(items);
  return (
    <div className="grid grid-cols-fluid gap-x-8 pt-8">
      {items ? (
        items.map((item: ItemsType) => <Items {...item} key={item.mainId} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
