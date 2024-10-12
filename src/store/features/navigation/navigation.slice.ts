import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type PageName } from "../../../libs/types/types";

interface State {
  currentPage: PageName;
}

const initialState: State = {
  currentPage: "products-list",
};

const { actions, reducer } = createSlice({
  initialState,
  name: "navigation",
  reducers: {
    redirect: (state, action: PayloadAction<PageName>) => {
      state.currentPage = action.payload;
    },
  },
});

export { actions, reducer };
