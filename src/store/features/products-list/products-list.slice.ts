import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../libs/types/types";
import { getAllProducts } from "./actions";

interface State {
  products: Product[];
  isLoading: boolean;
}

const initialState: State = {
  products: [],
  isLoading: false,
};

const { actions, reducer } = createSlice({
  initialState,
  name: "products-list",
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.products = action.payload;
      }
    );
    builder.addCase(getAllProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export { actions, reducer };
