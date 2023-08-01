type Params = {
  mainId: string;
};

type SearchParams = {
  displayName: string;
  displayAssets: DisplayAssestType;
  mainId: string;
  icon: string;
  quantity?: number | 1;
  finalPrice?: number;
  price: PriceType;
  rarityName?: string;
};

type DisplayAssestType = [
  {
    background: string
  }
]

export type SearchParamTypes = {
  params: Params;
  searchParams: SearchParams;
};

type PriceType = {
  finalPrice: number;
  regularPrice: number;
};
