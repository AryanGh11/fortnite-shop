export type ItemsType = {
  displayName: string;
  mainId: string;
  displayAssets: DisplayAssestType;
  quantity?: number | 1;
  price: PriceType;
};

type DisplayAssestType = [
  {
    background: string
  }
]

type PriceType = {
  finalPrice: number;
  regularPrice: number;
};
