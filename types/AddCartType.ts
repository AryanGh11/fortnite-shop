export type AddCartType = {
  displayName: string;
  mainId: string;
  displayAssets: DisplayAssestType;
  icon: string;
  quantity?: number | 1;
  price: PriceType;
  finalPrice?: number;
  series?: SeriesType;
  rarity?: SeriesType
};

type SeriesType = {
  id: string;
  name: string;
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
