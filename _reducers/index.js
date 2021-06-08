import { combineReducers } from "redux";

import { auth } from './auth.reducer'
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { search } from "./search.reducer";
import { topic } from "./topic.reducer";
import { citation } from "./citation.reducer";
import { cart } from './cart.reducer'
import { sales } from './sales.reducer'
import { mapping } from './mapping.reducer'

const rootReducer = combineReducers({
  auth,
  users,
  cart,
  sales,
  alert,
  search,
  topic,
  citation,
  mapping,
});

export default rootReducer;
