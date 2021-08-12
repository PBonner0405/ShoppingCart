import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { cart } from "./cart";
import { items } from "./items";

const rootReducer = (history) =>
combineReducers({
    router: connectRouter(history),
    cart,
    items
});

export default rootReducer;