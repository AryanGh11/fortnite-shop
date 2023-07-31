export type AddCartType = {
  displayName: string;
  mainId: string;
  displayAssets: string;
  icon: string;
  quantity?: number | 1;
  price: PriceType;
};

type PriceType = {
  finalPrice: number;
  regularPrice: number;
};
