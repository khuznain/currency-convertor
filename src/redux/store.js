import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/index";
import rootSaga from "./sagas";

// middlewares configuration
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

// start sagas
sagaMiddleware.run(rootSaga);

export default store;
