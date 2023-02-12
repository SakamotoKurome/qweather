import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
const rootStore = createStoreWithMiddleware(rootReducer)

sagaMiddleware.run(rootSaga)

export default rootStore;