export type ItemsType = {
  displayName: string;
  mainId: string;
  displayAssets: DisplayAssestType;
  quantity?: number | 1;
  price: PriceType;
  series?: SeriesType;
  rarity?: SeriesType
};

type SeriesType = {
  id: string;
  name: string;
};

type DisplayAssestType = [
  {
    background: string;
  }
];

type PriceType = {
  finalPrice: number;
  regularPrice: number;
};
