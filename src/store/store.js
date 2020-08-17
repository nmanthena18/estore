import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger'
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
