"use client"

import { useState, useEffect } from "react";
import { GetDetail } from "@/types/GetItemDetailType"

export default function itemDetails(id: string) {
  const [item, setItem] = useState<GetDetail>({ id: "", type: { name: "" }, introduction: { chapter: "", season: "", text: "" } })
  const url = `https://fortniteapi.io/v2/items/get?id=${id}&lang=en`;
  useEffect(() => {
    const option = {
      method: "GET",
      headers: {
        Authorization: "7e7b094a-b06e0887-e9dd49fe-25d3d289",
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(url, option);
        const data = await response.json();
        setItem(data.item)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [])
  return item;
}