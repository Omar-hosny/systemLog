import { createStore, applyMiddleware } from "./node_modules/redux";
import { composeWithDevTools } from "./node_modules/redux-devtools-extension";
import thunk from "./node_modules/redux-thunk";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
