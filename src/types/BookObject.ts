export type BookObject = {
  name: string;
  id: string;
  description: {
    author: string | null;
    cover: string | null;
    rating: number | null;
    numberOfPages: number | null;
  };
};
