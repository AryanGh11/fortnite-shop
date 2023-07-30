import { SearchParamTypes } from "@/types/SearchParamsType";
import Image from "next/image";

export default function ItemPage({ searchParams }: SearchParamTypes) {
  return (
    <div>
      <h1>{searchParams.displayName}</h1>
      <Image
        src={searchParams.icon}
        alt="aaa"
        width={1200}
        height={1200}
        className="w-36 h-36"
      />
    </div>
  );
}
