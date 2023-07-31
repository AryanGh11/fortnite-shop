export type AddCartType = {
  displayName: string;
  mainId: string;
  displayAssets: DisplayAssestType;
  icon: string;
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
