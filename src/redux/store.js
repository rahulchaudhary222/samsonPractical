import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import rootReduser from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReduser, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
