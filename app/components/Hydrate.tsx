"use client";

import { useThemeStore } from "@/store";
import { ReactNode, useEffect, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydreated, setIsHydrated] = useState(false);
  const [loadingTheme, setLoadingTheme] = useState("");
  const themeStore = useThemeStore();
  //wait untill Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydreated ? (
        <body
          className="px-8 py-8 lg:px-24 font-roboto"
          data-theme={themeStore.mode}
        >
          {children}
        </body>
      ) : (
        <body className="flex-col justify-center items-center w-full h-screen px-8 py-4 lg:px-24 font-inter">
          <p>Loading... ✌️</p>
        </body>
      )}
    </>
  );
}
