import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "../../types/async-thunk-config.type";
import { Product } from "../../../libs/types/types";
import { createRandomId } from "../../../libs/helpers/create-random-id.helper";

const getAllProducts = createAsyncThunk<Product[], undefined, AsyncThunkConfig>(
  "products-list/get-all-products",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = (await response.json()) as Product[];
    return data;
  }
);

const createProduct = createAsyncThunk<
  Product,
  Omit<Product, "id">,
  AsyncThunkConfig
>("products-list/create-product", async (payload) => {
  const id = createRandomId();
  const newProduct = { ...payload, id };
  await fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
  });

  return newProduct;
});

export { getAllProducts, createProduct };
