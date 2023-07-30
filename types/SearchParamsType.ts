type Params = {
  mainId: string;
};

type SearchParams = {
  displayName: string;
  mainId: string;
  icon: string;
  quantity?: number | 1;
};

export type SearchParamTypes = {
  params: Params;
  searchParams: SearchParams;
};
