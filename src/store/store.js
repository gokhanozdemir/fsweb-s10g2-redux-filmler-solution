import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import reducer from "./reducers";

export const myStore = createStore(reducer, applyMiddleware(logger, thunk)); //redux store ile değiştirin
