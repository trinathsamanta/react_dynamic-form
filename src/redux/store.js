import { createStore, applyMiddleware } from "redux";
import  {rootReducer}  from "./reducer/rootreducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import promiseMiddleware from "redux-promise-middleware";

const composeEnhancerMiddleware = composeWithDevTools(
  applyMiddleware(thunk, promiseMiddleware)
);

const store = createStore(rootReducer, composeEnhancerMiddleware);

export default store;
