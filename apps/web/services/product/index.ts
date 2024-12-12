import axios from "../../lib/axios";
import { Product } from "../../models";
import { GetProductsInput, GetProductsOutput } from "./types";

class ProductService {
  async getMaxPrice(): Promise<number> {
    const response = await axios.get<Product[]>("/products", {
      params: {
        _limit: 1,
        _sort: "price",
        _order: "desc",
      },
    });

    return response?.data[0]?.price ?? 0;
  }

  async getProducts({
    page,
    ...query
  }: GetProductsInput): Promise<GetProductsOutput> {
    const limit = 20;

    const response = await axios.get<Product[]>("/products", {
      params: {
        ...query,
        _limit: limit,
        _page: page,
      },
    });

    return {
      items: response.data,
      page,
      perPage: limit,
      nextPage: response.data.length > 0 ? page + 1 : null,
    };
  }
}

export default new ProductService();
