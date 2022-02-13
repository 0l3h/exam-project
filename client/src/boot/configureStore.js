import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from '../reducers/index';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore () {
  const persistedState = {
    eventsStore: {
      events: JSON.parse(localStorage.getItem('events') || '[]'),
      outdatedEvents: JSON.parse(
        localStorage.getItem('outdatedEvents') || '[]'
      ),
    },
  };
  const store = createStore(
    combineReducers,
    persistedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga, store.dispatch);
  return store;
}
