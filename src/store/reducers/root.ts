import { combineReducers } from "redux";
import book from "./book";
import cart from "./cart";
import orders from "./order";
import address from "./address";

const rootReducer = combineReducers({
  book,
  cart,
  orders,
  address
});

export default rootReducer;

