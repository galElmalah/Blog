import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { apiMiddleware } from "./middleware/apiCalls";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger, apiMiddleware));

window.store = store;

export default store;
