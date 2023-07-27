"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [aryan, setA] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://fortnite-api.com/v2/shop/br"
        )
      ).json();

      // set state when the data received
      setA(data);
    };

    dataFetch();
  }, []);
  
  console.log(aryan)
  return <main className=""></main>;
}
