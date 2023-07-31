export type ItemsType = {
  displayName: string;
  mainId: string;
  displayAssets: string;
  quantity?: number | 1;
  price: PriceType;
};

type PriceType = {
  finalPrice: number;
  regularPrice: number;
};
