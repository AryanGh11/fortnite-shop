export type GetDetail = {
  id: string;
  type: {
    name: string
  }
  introduction: {
    chapter: string;
    season: string;
    text: string;
  }
}