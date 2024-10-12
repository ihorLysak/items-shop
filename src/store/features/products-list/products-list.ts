import { actions } from "./products-list.slice";
import { getAllProducts, createProduct } from "./actions";

const allActions = { ...actions, getAllProducts, createProduct };

export { allActions as actions };
export { reducer } from "./products-list.slice";
