import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { search } from "./search.reducer";
import { topic } from "./topic.reducer";
import { citation } from "./citation.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  search,
  topic,
  citation,
});

export default rootReducer;
