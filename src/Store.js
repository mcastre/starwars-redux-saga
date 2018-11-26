import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { StarWarsPeople } from './StarWarsReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const enhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const Store = createStore(
  StarWarsPeople,
  applyMiddleware(sagaMiddleware),
);

// .run() is a task. Its the glue between sagas and the redux store
// Also allows the takeLatest function to have access to store dispatches
sagaMiddleware.run(mySaga);