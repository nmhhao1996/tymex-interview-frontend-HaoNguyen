import { Product } from "../../models";

export type GetProductsInput = {
  [key: string]: string | number;
  page: number;
};

export type GetProductsOutput = {
  items: Product[];
  page: number;
  perPage: number;
  nextPage: number | null;
};
